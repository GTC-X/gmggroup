import "./globals.css";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { ToastContainer } from "react-toastify";

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const isArabicOrKurdish = locale === "ar" || locale === "ku";

  return (
    <html lang={locale} dir={isArabicOrKurdish ? "rtl" : "ltr"}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
         <meta
          name="facebook-domain-verification"
          content="3viith4fykysbzqiwlda4x60ctvrzt"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      
        <style>{`
          body {
            font-family: '${
              isArabicOrKurdish ? "Noto Kufi Arabic" : "Poppins"
            }', sans-serif;
          }
        `}</style>
      </head>
      <body>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
        <ToastContainer autoClose={3000} />
      </body>
    </html>
  );
}
