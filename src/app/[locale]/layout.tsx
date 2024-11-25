import Header from "../../components/header";
import { getMessages, setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";
import {routing} from '@/i18n/routing';
import { notFound } from "next/navigation";

type Props = {
  children: ReactNode;
  params: Promise<{locale: string}>;
}


export default async function LocaleLayout({
  children,
  params
} : Props) {

  const { locale } = await params;
 
   // Ensure that the incoming `locale` is valid
   if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground w-screen">
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
