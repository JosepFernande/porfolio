'use client'

import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeToggleProps {
    variant?: "icon" | "switch";
}

function resolveInitialTheme(): Theme {
    if (typeof window === "undefined") return "dark";

    const stored = window.localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") return stored;

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme: Theme) {
    document.documentElement.classList.toggle("dark", theme === "dark");
}

function setStoredTheme(theme: Theme) {
    window.localStorage.setItem("theme", theme);
}

export default function ThemeToggle({ variant = "icon" }: ThemeToggleProps) {
    const [theme, setTheme] = useState<Theme>(() => resolveInitialTheme());

    useEffect(() => {
        applyTheme(theme);
        setStoredTheme(theme);
    }, [theme]);

    const isDark = theme === "dark";
    const toggleTheme = () => setTheme(isDark ? "light" : "dark");

    if (variant === "switch") {
        return (
            <div className="flex items-center gap-3 bg-gray-100 dark:bg-slate-800/50 px-4 py-2 rounded-xl border border-transparent dark:border-slate-700/50">
                <LightModeOutlined className="text-slate-600 dark:text-slate-300" />
                <button
                    aria-label="Cambiar tema"
                    className="relative flex h-6 w-11 cursor-pointer items-center rounded-full bg-gray-300 dark:bg-slate-700 p-1 transition-colors"
                    onClick={toggleTheme}
                    type="button"
                >
                    <span
                        className={`h-4.5 w-4.5 rounded-full bg-white shadow-sm transition-transform duration-300 ${isDark ? "translate-x-5" : "translate-x-0"
                            }`}
                    />
                </button>
                <DarkModeOutlined className="text-slate-600 dark:text-slate-300" />
            </div>
        );
    }

    return (
        <button
            aria-label="Cambiar tema"
            className="flex items-center justify-center p-2 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-800/60 text-slate-600 dark:text-slate-300 transition-colors"
            onClick={toggleTheme}
            type="button"
        >
            {isDark ? <LightModeOutlined /> : <DarkModeOutlined />}
        </button>
    );
}
