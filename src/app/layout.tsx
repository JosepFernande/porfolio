import "./globals.css";
import { Manrope } from "next/font/google";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getLocale, getTranslations, setRequestLocale } from "next-intl/server";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Layout.metadata");
  const locale = await getLocale();

  return {
    metadataBase: new URL("https://josepfernandez.dev"),
    title: {
      default: t("title"),
      template: t("titleTemplate"),
    },
    description: t("description"),
    keywords: t.raw("keywords") as string[],
    authors: [{ name: "Josep Fernández Ortega" }],
    creator: "Josep Fernández Ortega",
    publisher: "Josep Fernández Ortega",
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      locale: locale === "es" ? "es_ES" : "en_US",
      url: "https://josepfernandez.dev",
      siteName: "Josep Fernández Ortega Portfolio",
      title: t("title"),
      description: t("description"),
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale();
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <Script
          id="theme-bootstrap"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (() => {
              try {
                const stored = localStorage.getItem('theme');
                const theme = stored === 'light' || stored === 'dark'
                  ? stored
                  : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                document.documentElement.classList.toggle('dark', theme === 'dark');
              } catch (_) {}
            })();`,
          }}
        />
      </head>
      <body
        className={`${manrope.variable} bg-background-light dark:bg-background-dark text-gray-900 dark:text-white font-(--font-display) transition-colors duration-300`}
      >
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
