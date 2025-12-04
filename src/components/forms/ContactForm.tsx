"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";
import { Button } from "../ui/Button";
import { Input, Textarea, Select } from "../ui/Form";
import { Send } from "lucide-react";

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    service: z.string().min(1, "Please select a service"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        try {
            await axios.post("/api/contact", data);
            setSubmitStatus("success");
            reset();
        } catch (error) {
            console.error("Error submitting form:", error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>

            {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg">
                    Thank you! Your message has been sent successfully. We will contact you soon.
                </div>
            )}

            {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg">
                    Something went wrong. Please try again later or contact us via WhatsApp.
                </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <Input
                    label="Full Name"
                    placeholder="John Doe"
                    {...register("name")}
                    error={errors.name?.message}
                />

                <div className="grid md:grid-cols-2 gap-4">
                    <Input
                        label="Email Address"
                        type="email"
                        placeholder="john@example.com"
                        {...register("email")}
                        error={errors.email?.message}
                    />
                    <Input
                        label="Phone Number"
                        type="tel"
                        placeholder="+91 98765 43210"
                        {...register("phone")}
                        error={errors.phone?.message}
                    />
                </div>

                <Select
                    label="Interested Service"
                    options={[
                        { label: "Study Visa", value: "Study Visa" },
                        { label: "Work Visa", value: "Work Visa" },
                        { label: "PR Visa", value: "PR Visa" },
                        { label: "Visitor Visa", value: "Visitor Visa" },
                        { label: "Dependent Visa", value: "Dependent Visa" },
                        { label: "Other", value: "Other" },
                    ]}
                    {...register("service")}
                    error={errors.service?.message}
                />

                <Textarea
                    label="Message"
                    placeholder="Tell us about your requirements..."
                    rows={4}
                    {...register("message")}
                    error={errors.message?.message}
                />

                <Button type="submit" className="w-full" isLoading={isSubmitting}>
                    Send Message <Send className="ml-2 h-4 w-4" />
                </Button>
            </form>
        </div>
    );
}
