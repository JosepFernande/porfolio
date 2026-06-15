"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { Close } from "@mui/icons-material";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
  items: { href: string; label: string }[];
  localeToggle: React.ReactNode;
  cvCta: React.ReactNode;
}

const FOCUSABLE = "a[href], button:not([disabled]), [tabindex]:not([tabindex='-1'])";

export default function MobileMenu({
  isOpen,
  onClose,
  triggerRef,
  items,
  localeToggle,
  cvCta,
}: MobileMenuProps) {
  const t = useTranslations("Navbar");
  const drawerRef = useRef<HTMLDivElement>(null);
  const previousOverflowRef = useRef("");

  // Focus trap + Escape handler
  useEffect(() => {
    if (!isOpen || !drawerRef.current) return;

    const drawer = drawerRef.current;

    function getFocusables(): HTMLElement[] {
      return Array.from(drawer.querySelectorAll<HTMLElement>(FOCUSABLE));
    }

    // Focus first element on open
    const initial = getFocusables();
    if (initial.length > 0) {
      initial[0].focus();
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === "Tab") {
        const focusables = getFocusables();
        if (focusables.length === 0) return;

        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      previousOverflowRef.current = document.body.style.overflow;
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = previousOverflowRef.current;
    }

    return () => {
      document.body.style.overflow = previousOverflowRef.current;
    };
  }, [isOpen]);

  // Restore focus to trigger on close
  useEffect(() => {
    if (!isOpen && triggerRef.current) {
      triggerRef.current.focus();
    }
  }, [isOpen, triggerRef]);

  return (
    <>
      {/* Backdrop — closes on click, blocks scroll-through on iOS */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 motion-reduce:transition-none touch-none ${
          isOpen
            ? "opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={isOpen ? onClose : undefined}
        aria-hidden="true"
      />

      {/* Drawer panel — always mounted for CSS transition */}
      <div
        ref={drawerRef}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label={t("menu.open")}
        className={`fixed top-0 right-0 z-[60] flex h-full w-72 flex-col bg-surface-light dark:bg-surface-dark shadow-2xl transition-transform duration-300 ease-in-out motion-reduce:transition-none ${
          isOpen ? "translate-x-0" : "translate-x-full invisible"
        }`}
      >
        {/* Close button */}
        <div className="flex justify-end p-4">
          <button
            type="button"
            onClick={onClose}
            aria-label={t("menu.close")}
            className="rounded-xl p-2 text-slate-600 transition-colors hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-slate-800/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
          >
            <Close />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-1 px-4" aria-label={t("ariaLabel")}>
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-600 transition-colors hover:bg-primary/8 hover:text-primary dark:text-slate-300 dark:hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Divider */}
        <div className="mx-4 my-4 border-t border-gray-200 dark:border-slate-700/50" />

        {/* Language toggle + CV CTA */}
        <div className="flex flex-col gap-3 px-4 pb-6">
          {localeToggle}
          {cvCta}
        </div>
      </div>
    </>
  );
}
