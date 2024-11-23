"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LanguageSwitcher = () => {

  const pathName = usePathname();
  const currentLocale = pathName.startsWith('/es') ? 'es' : 'en';

  return (
    <div className="flex items-center space-x-2">
      <Link href="/es" className={` border rounded border-none font-play text-xl lg:text-2xl ${
          currentLocale === 'es' ? 'text-foreground' : 'text-gray-400'
        }`}>ES</Link>
      <span className="text-gray-500 text-xl lg:text-2xl">/</span>
      <Link href="/en" className={` border rounded border-none font-play text-xl lg:text-2xl ${
          currentLocale === 'en' ? 'text-foreground' : 'text-gray-400'
        }`}>EN</Link>
    </div>
  );
};

export default LanguageSwitcher;
