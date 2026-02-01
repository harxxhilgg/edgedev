"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../card";
import { Field, FieldError, FieldGroup, FieldLabel } from "../field";
import { Input } from "../input";
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText, InputGroupTextarea } from "../input-group";
import { Button } from "../button";
import { RotateCcw, Send, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { BsExclamationCircle } from "react-icons/bs";
import { Tooltip, TooltipArrow, TooltipContent, TooltipTrigger } from "../tooltip";

const contactFormSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters.")
    .max(20, "Name must be at most 20 characters."),
  phone: z
    .string()
    .max(10)
    .optional()
    .or(z.literal('')),
  email: z
    .email({ message: "Invalid email address." }),
  message: z
    .string()
    .min(2, "Message must be at least 2 characters.")
    .max(300, "Message must be at most 300 characters."),
});

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    mode: "onSubmit",
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: z.infer<typeof contactFormSchema>) {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Message sent successfully!", {
          description: "Thank you for reaching out. I\'ll get back to you soon.",
        });

        form.reset();
      } else {
        toast.error("Failed to send message", {
          description: result.error || "Please try again later.",
        });
      }
    } catch (error) {
      console.error("Submissions error: ", error);

      toast.error("Network error", {
        description: "Unable to send message. Check your connection.",
      });
    } finally {
      setIsSubmitting(false);
    };
  };

  return (
    <Card className="w-full border-transparent bg-transparent shadow-none transition-all">
      <CardHeader className="px-4 pt-2 pb-4">
        <CardTitle>Send me a message</CardTitle>

        <CardDescription>
          Fill out the form below and I will get back to you as soon as possible.
        </CardDescription>
      </CardHeader>

      <CardContent className="p-4">
        <form
          id="form-rhf-contact"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FieldGroup>
            <div className="flex flex-col gap-7 md:flex-row md:justify-around md:gap-14">
              <Controller
                name="name"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-rhf-name" className="gap-0.5">
                      Name <span className="text-secondary">*</span>
                    </FieldLabel>

                    <Input
                      {...field}
                      id="form-rhf-name"
                      aria-invalid={fieldState.invalid}
                      placeholder="Your full name"
                      autoComplete="off"
                      className="bg-input/30"
                    />

                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="phone"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-rhf-phone" className="gap-1 items-center">
                      Phone <span className="text-secondary text-xs">(Optional)</span>
                    </FieldLabel>

                    <Input
                      {...field}
                      id="form-rhf-phone"
                      type="number"
                      aria-invalid={fieldState.invalid}
                      placeholder="+91 (123)xx-xxxxx"
                      autoComplete="off"
                      className="bg-input/30 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />

                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </div>

            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-email" className="gap-0.5">
                    Email <span className="text-secondary">*</span>
                  </FieldLabel>

                  <InputGroup>
                    <InputGroupInput
                      {...field}
                      id="form-rhf-email"
                      aria-invalid={fieldState.invalid}
                      type="email"
                      placeholder="your.email@example.com"
                      autoComplete="off"
                      className="bg-input/30"
                    />
                    <InputGroupAddon align="inline-end">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <BsExclamationCircle className="cursor-default" />
                        </TooltipTrigger>

                        <TooltipContent>
                          <TooltipArrow className="fill-primary" />
                          <div className="py-0.5 inline-flex items-center gap-1">
                            <ShieldCheck size={16} />
                            <p className="text-sm">Your email is safe</p>
                          </div>
                        </TooltipContent>
                      </Tooltip>
                    </InputGroupAddon>
                  </InputGroup>

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="message"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-message" className="gap-0.5">
                    Message <span className="text-secondary">*</span>
                  </FieldLabel>

                  <InputGroup className="bg-input/30">
                    <InputGroupTextarea
                      {...field}
                      id="form-rhf-message"
                      placeholder="Tell me about your project or just say hello..."
                      rows={6}
                      className="min-h-24 resize-none"
                      aria-invalid={fieldState.invalid}
                    />

                    <InputGroupAddon align="block-end">
                      <InputGroupText>
                        {field.value.length}/300 characters
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>

      <CardFooter className="px-4 pt-1 pb-4">
        <Field orientation="horizontal" className="select-none">
          <Button
            type="button"
            variant="outline"
            onClick={() => form.reset()}
            className="text-secondary cursor-pointer"
          >
            <RotateCcw /> Reset
          </Button>

          <Button
            type="submit"
            form="form-rhf-contact"
            className="cursor-pointer"
            disabled={isSubmitting}
          >
            <Send /> Submit
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
};