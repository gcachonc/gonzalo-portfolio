import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';
 
export default getRequestConfig(async ({requestLocale}) => {
  // Define the type of locales dynamically based on `routing.locales`
  type Locale = typeof routing.locales[number];

  // Ensure that a valid locale is used
  let locale: Locale | undefined = requestLocale as unknown as Locale;

  if (!locale || !routing.locales.includes(locale)) {
    locale = routing.defaultLocale as Locale;
  }

 
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});