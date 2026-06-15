"use client";

import { FileDownloadOutlined, Menu } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import MobileMenu from "./MobileMenu";
import Link from "next/link";
import { useTranslations } from "next-intl";

const NAV_CONFIG = [
  { sectionId: "inicio", i18nKey: "inicio" },
  { sectionId: "habilidades", i18nKey: "habilidades" },
  { sectionId: "certificaciones", i18nKey: "certificaciones" },
  { sectionId: "experiencia", i18nKey: "experiencia" },
  { sectionId: "case-studies", i18nKey: "caseStudies" },
  { sectionId: "workflow", i18nKey: "workflow" },
  { sectionId: "contacto", i18nKey: "contacto" },
] as const;

const SECTION_IDS = [
  "inicio",
  "habilidades",
  "certificaciones",
  "experiencia",
  "case-studies",
  "workflow",
  "contacto",
];

export default function Navbar() {
  const t = useTranslations("Navbar");
  const [activeHref, setActiveHref] = useState("#inicio");
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const navItems = NAV_CONFIG.map((item) => ({
    href: `#${item.sectionId}`,
    label: t(`items.${item.i18nKey}`),
  }));

  useEffect(() => {
    const setFromHash = () => {
      const hash = globalThis.location.hash;
      if (hash && NAV_CONFIG.some((item) => `#${item.sectionId}` === hash)) {
        setActiveHref(hash);
      }
    };

    const onScroll = () => {
      const offset = 140;
      let current = "#inicio";

      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top - offset <= 0) {
          current = `#${id}`;
        }
      }

      setActiveHref(current);
    };

    setFromHash();
    onScroll();

    globalThis.addEventListener("hashchange", setFromHash);
    globalThis.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      globalThis.removeEventListener("hashchange", setFromHash);
      globalThis.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <header className="w-full border-b border-gray-200 dark:border-slate-700/50 bg-background-light/75 dark:bg-background-dark/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="px-6 lg:px-20 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="text-slate-900 dark:text-white text-xl font-bold tracking-tight"
            >
              Josep Fernández Ortega<span className="text-primary">.</span>
            </Link>
          </div>
          <div className="flex items-center gap-8">
            <nav
              aria-label={t("ariaLabel")}
              className="hidden xl:flex items-center gap-2 p-1 rounded-xl bg-white/70 dark:bg-surface-dark/70 border border-gray-200 dark:border-slate-700/50"
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${activeHref === item.href
                    ? "bg-primary/12 text-primary"
                    : "text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary hover:bg-primary/8"
                    } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background-light dark:focus-visible:ring-offset-background-dark`}
                  href={item.href}
                  onClick={() => setActiveHref(item.href)}
                  aria-current={activeHref === item.href ? "page" : undefined}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-4">
              <div className="sm:flex hidden items-center gap-4">
                <LanguageToggle />
                <ThemeToggle variant="icon" />
              </div>
              <a
                href="/CV-Josep-Fernandez-Ortega.pdf"
                download
                className="flex bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all items-center gap-2 shadow-[0_6px_20px_rgba(16,185,129,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background-light dark:focus-visible:ring-offset-background-dark"
              >
                <span>{t("downloadCv")}</span>
                <FileDownloadOutlined />
              </a>
              <button
                type="button"
                ref={triggerRef}
                className="flex xl:hidden p-2 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-800/60 text-slate-600 dark:text-slate-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                aria-label={t("menu.toggle")}
                onClick={() => setIsOpen(true)}
              >
                <Menu />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        triggerRef={triggerRef}
        items={navItems}
        localeToggle={<LanguageToggle />}
        cvCta={
          <a
            href="/CV-Josep-Fernandez-Ortega.pdf"
            download
            className="flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-[0_6px_20px_rgba(16,185,129,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background-light dark:focus-visible:ring-offset-background-dark"
          >
            <span>{t("downloadCv")}</span>
            <FileDownloadOutlined />
          </a>
        }
      />
    </>
  );
}
