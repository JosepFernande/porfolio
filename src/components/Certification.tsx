'use client'
import { CERTIFICATION_FILTERS, CERTIFICATIONS } from "@/const/certifications.data";
import { FileDownloadOutlined } from "@mui/icons-material";
import { useState } from "react";


export default function Certification() {
    const [filter, setFilter] = useState<"all" | "agile" | "technical">("all");

    const filteredCertifications =
        filter === "all"
            ? CERTIFICATIONS
            : CERTIFICATIONS.filter((c) => c.category === filter);

    return (
        <div className="layout-content-container flex flex-col max-w-5xl flex-1">
            {/* Header */}
            <div className="flex flex-col gap-2 mb-10 text-center md:text-left">
                <h2 className="text-[#111418] dark:text-white text-3xl md:text-4xl font-bold">
                    Certificaciones & Logros
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                    Validación de conocimientos técnicos, frameworks modernos y metodologías ágiles.
                </p>
            </div>

            {/* Filtros */}
            <div className="flex gap-3 mb-12 flex-wrap justify-center md:justify-start">
                {CERTIFICATION_FILTERS.map(({ id, label, icon: Icon }) => (
                    <button
                        key={id}
                        onClick={() => setFilter(id)}
                        className={`flex h-10 items-center gap-x-2 rounded-full px-6 transition-all shadow-sm
              ${filter === id
                                ? "bg-primary text-white scale-105"
                                : "bg-white dark:bg-[#2d4625] border border-gray-200 dark:border-transparent hover:bg-gray-50 dark:hover:bg-[#3a5a30]"
                            }`}
                    >
                        <Icon className="text-[20px]!" />
                        <span className="text-sm font-medium">{label}</span>
                    </button>
                ))}
            </div>

            {/* Timeline */}
            <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-gray-300 before:to-transparent dark:before:via-[#2d4625]">
                {filteredCertifications.map((cert) => {
                    const TimelineIcon = cert.timelineIcon;
                    const CardIcon = cert.cardIcon;

                    return (
                        <div
                            key={cert.id}
                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                        >
                            {/* Timeline Icon */}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-primary/20 bg-white dark:bg-[#2d4625] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:border-primary group-hover:scale-110 transition-all">
                                <TimelineIcon className="text-primary text-[20px]!" />
                            </div>

                            {/* Card */}
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-gray-200 dark:border-[#2d4625] bg-card-light dark:bg-card-dark hover:shadow-md transition-all hover:border-primary/50 group-hover:-translate-y-1">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-900/30 text-primary">
                                            <CardIcon className="text-[22px]!" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                                                {cert.title}
                                            </h3>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                                {cert.issuer}
                                            </p>
                                        </div>
                                    </div>

                                    <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-[#2d4625] text-primary">
                                        {cert.year}
                                    </span>
                                </div>

                                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                                    {cert.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-3">
                                    {cert.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-[10px] font-medium px-2 py-1 rounded border bg-gray-50 dark:bg-[#152111] border-gray-200 dark:border-[#2d4625] text-gray-500 dark:text-gray-400"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {cert.credentialUrl && (
                                    <a
                                        href={cert.credentialUrl}
                                        className="inline-flex items-center text-primary text-xs font-bold hover:underline"
                                    >
                                        Ver Credencial
                                    </a>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="mt-16 flex justify-center">
                <button className="flex min-w-50 cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-primary dark:bg-primary text-white dark:text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] transition-transform hover:scale-105 shadow-lg shadow-blue-200 dark:shadow-none hover:shadow-blue-300">
                    <FileDownloadOutlined />
                    <span className="truncate">Descargar CV Completo</span>
                </button>
            </div>
        </div>
    );
}
