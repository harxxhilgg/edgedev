import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(3).max(20),
  phone: z.string().max(10).optional().or(z.literal("")),
  email: z.email(),
  message: z.string().min(2).max(300),
});

type ContactFormData = z.infer<typeof contactSchema>;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    const discordWebhookUrl = process.env.DISCORD_WEBHOOK_URL;

    if (!discordWebhookUrl) {
      console.error("Missing DISCORD_WEBHOOK_URL in env");

      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 },
      );
    }

    const discordResponse = await sendToDiscord(
      validatedData,
      discordWebhookUrl,
    );

    if (!discordResponse.ok) {
      const errorText = await discordResponse.text();
      console.error("Discord webhook failed: ", errorText);

      return NextResponse.json(
        { error: "Failed to send notification" },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { success: true, message: "Message send succesfully!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form error: ", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
    }

    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 },
    );
  }
}

async function sendToDiscord(
  data: ContactFormData,
  webhookUrl: string,
): Promise<Response> {
  const discordPayload = {
    embeds: [
      {
        title: `New Message from ${data.name}`,
        color: 0x5865f2,
        fields: [
          {
            name: "Name",
            value: data.name,
            inline: false,
          },
          {
            name: "Email",
            value: data.email,
            inline: true,
          },
          {
            name: "Phone",
            value: data.phone || "Not Provided",
            inline: true,
          },
          {
            name: "Message",
            value: data.message,
            inline: false,
          },
        ],
        timestamp: new Date().toISOString(),
        footer: {
          text: "Contact form - harxxhilgg",
        },
      },
    ],
  };

  return fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(discordPayload),
  });
}
