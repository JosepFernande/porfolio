import "./globals.css";
import { Manrope } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://josepfernandez.dev"),
  title: {
    default: "Josep Fernández Ortega | Full Stack Developer",
    template: "%s | Josep Fernández Ortega",
  },
  description:
    "Portfolio profesional de Josep Fernández Ortega. Desarrollo soluciones web escalables con foco en arquitectura, rendimiento y experiencia de usuario.",
  keywords: [
    "Josep Fernández Ortega",
    "Full Stack Developer",
    "Portfolio",
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "Arquitectura de Software",
  ],
  authors: [{ name: "Josep Fernández Ortega" }],
  creator: "Josep Fernández Ortega",
  publisher: "Josep Fernández Ortega",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://josepfernandez.dev",
    siteName: "Josep Fernández Ortega Portfolio",
    title: "Josep Fernández Ortega | Full Stack Developer",
    description:
      "Portfolio profesional de Josep Fernández Ortega. Desarrollo soluciones web escalables con foco en arquitectura, rendimiento y experiencia de usuario.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Josep Fernández Ortega | Full Stack Developer",
    description:
      "Portfolio profesional de Josep Fernández Ortega. Desarrollo soluciones web escalables con foco en arquitectura, rendimiento y experiencia de usuario.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" suppressHydrationWarning>
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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
