"use client";

import { FileDownloadOutlined } from "@mui/icons-material";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Certificaciones", href: "#certificaciones" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Workflow", href: "#workflow" },
  { label: "Contacto", href: "#contacto" },
];

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
  const [activeHref, setActiveHref] = useState("#inicio");

  useEffect(() => {
    const setFromHash = () => {
      const hash = globalThis.location.hash;
      if (hash && NAV_ITEMS.some((item) => item.href === hash)) {
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
    <header className="w-full border-b border-gray-200 dark:border-slate-700/50 bg-background-light/75 dark:bg-background-dark/80 backdrop-blur-lg sticky top-0 z-50">
      <div className="px-6 lg:px-20 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-8 text-primary">
            <svg
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <Link
            href="/"
            className="text-slate-900 dark:text-white text-xl font-bold tracking-tight"
          >
            Josep Fernández Ortega<span className="text-primary">.</span>
          </Link>
        </div>
        <div className="flex items-center gap-8">
          <nav
            aria-label="Navegación principal"
            className="hidden md:flex items-center gap-2 p-1 rounded-xl bg-white/70 dark:bg-surface-dark/70 border border-gray-200 dark:border-slate-700/50"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                  activeHref === item.href
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
            <ThemeToggle variant="icon" />
            <a
              href="/CV-Josep-Fernandez-Ortega.pdf"
              download
              className="hidden sm:flex bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all items-center gap-2 shadow-[0_6px_20px_rgba(16,185,129,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background-light dark:focus-visible:ring-offset-background-dark"
            >
              <span>Descargar CV</span>
              <FileDownloadOutlined />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
