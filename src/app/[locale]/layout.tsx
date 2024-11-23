import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import type { Locale } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "Gonzalo Cachón website",
  description: "Conoce un poco más a Gonzalo.",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const { locale } = await Promise.resolve(params);

  // Obtener mensajes para el idioma actual
  let messages;
  try {
    messages = await getMessages({ locale });
  } catch (error) {
    console.error("Error al obtener mensajes:", error);
    notFound(); // Redirige a la página 404 si no se pueden cargar los mensajes
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-background text-foreground w-screen">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
