"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslations } from "next-intl";

const ContactForm = () => {

    const t = useTranslations('ContactForm');

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        emailjs
        .send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
            formData,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        )
        .then(
            () => {
            alert("Mensaje enviado con éxito!");
            setFormData({ name: "", email: "", message: "" });
            },
            (error) => {
            console.error("Error al enviar el mensaje:", error.text);
            alert("Hubo un error al enviar el mensaje. Intenta nuevamente.");
            }
        );
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-4xl box-border px-4 m-auto flex flex-col items-center">
            <div className="flex flex-col lg:flex-row w-full gap-4">
                <div className="w-full lg:w-1/2">
                    <label htmlFor="name" className="block font-play text-sm font-medium text-foreground">
                    {t('name')}
                    </label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md text-foreground bg-background mt-2 focus:outline-none focus:ring-2 focus:ring-foreground"
                    required
                    />
                </div>
                <div className="w-full lg:w-1/2">
                    <label htmlFor="email" className="block text-sm font-medium text-foreground">
                    {t('email')}
                    </label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md text-foreground bg-background mt-2 focus:outline-none focus:ring-2 focus:ring-foreground"
                    required
                    />
                </div>
            </div>
            <div className="w-full">
                <label htmlFor="message" className="block text-sm font-medium text-foreground">
                {t('message')}
                </label>
                <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md text-foreground bg-background mt-2 focus:outline-none focus:ring-2 focus:ring-foreground"
                rows={5}
                required
                />
            </div>

            <button
                type="submit"
                className="px-4 py-2 font-play font-bold uppercase text-background bg-foreground hover:bg-slate-50 w-32 rounded-lg m-auto"
            >
                {t('send')}
            </button>
        </form>
    );
};

export default ContactForm;
