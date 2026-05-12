"use server";

import { redis } from "@/lib/redis";
import { z } from "zod";

// Redis
export async function trackVisitor(visitorId: string) {
  const isNew = await redis.sadd("app:visitors:set", visitorId);

  if (isNew === 1) {
    await redis.incr("app:visitor:count");
  }

  const count = await redis.get<number>("app:visitor:count");

  return count;
}

// (/)get-in-touch form
const contactSchema = z.object({
  name: z.string().min(3).max(20),
  phone: z.string().max(15).optional().or(z.literal("")),
  email: z.email(),
  message: z.string().min(2).max(300),
});

type ContactFormData = z.infer<typeof contactSchema>;

export async function sendContactMessage(data: ContactFormData) {
  const validatedData = contactSchema.parse(data);

  const discordWebhookUrl = process.env.DISCORD_WEBHOOK_URL;

  if (!discordWebhookUrl) {
    console.error("Missing DISCORD_WEBHOOK_URL");

    throw new Error("Server configuration error");
  }

  const discordResponse = await sendToDiscord(validatedData, discordWebhookUrl);

  if (!discordResponse.ok) {
    const errorText = await discordResponse.text();

    console.error("Discord webhook failed:", errorText);

    throw new Error("Failed to send notification");
  }

  return {
    success: true,
  };
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
