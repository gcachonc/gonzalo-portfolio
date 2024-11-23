import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';


export const metadata: Metadata = {
  title: "Gonzalo Cachón website",
  description: "Conoce un poco más a Gonzalo.",
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // Declarar que `params` es una promesa
}) {
  // Esperar a que se resuelva la promesa
  const resolvedParams = await params;
  const { locale } = resolvedParams;

  // Define the type of locales explicitly
  type Locale = typeof routing.locales[number];

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }
 
  // Providing all messages to the client
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet"></link>
      </head>
      <body className= 'antialiased bg-background text-foreground w-screen'>
      <NextIntlClientProvider locale={ locale } messages={messages}>
        <Header />
        {children}
      </NextIntlClientProvider>
      </body>
    </html>
  );
}
