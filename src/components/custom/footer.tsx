'use client';

import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { FunctionComponent } from "react";
import { ZorsLockup } from "./logo";
import { useLang } from "@/lib/language-context";

interface FooterProps { className?: string; }

const content = {
    en: {
        tagline: "Built Different. Meant to Last.",
        sections: [
            {
                label: "1. Pages",
                links: [
                    { label: 'Home', link: '/' },
                    { label: 'Services', link: '/services' },
                    { label: 'Client Stories', link: '/client-stories' },
                    { label: 'About Us', link: '/about' },
                    { label: 'Careers', link: '/career' },
                    { label: 'Contact', link: '/contact' },
                ],
            },
            {
                label: "2. Connect",
                links: [
                    { label: 'hello@zorscraft.id', link: 'mailto:hello@zorscraft.id', ext: true },
                    { label: 'LinkedIn', link: 'https://linkedin.com', ext: true },
                    { label: 'Instagram', link: 'https://instagram.com', ext: true },
                    { label: 'X (Twitter)', link: 'https://x.com', ext: true },
                ],
            },
            {
                label: "3. Legal",
                links: [
                    { label: 'Terms & Conditions', link: '/legal/terms' },
                    { label: 'Privacy Policy', link: '/legal/privacy' },
                    { label: 'Data Handling', link: '/legal/data-handling' },
                    { label: 'Cookie Policy', link: '/legal/cookie-policy' },
                ],
            },
        ],
        copyright: `© ${new Date().getFullYear()} PT Zors Craft Digital. All rights reserved.`,
        services: "Strategy • Branding • Design • Development • Optimization • Support",
    },
    id: {
        tagline: "Beda dari yang Lain. Dirancang untuk Bertahan.",
        sections: [
            {
                label: "1. Halaman",
                links: [
                    { label: 'Beranda', link: '/' },
                    { label: 'Layanan', link: '/services' },
                    { label: 'Kisah Klien', link: '/client-stories' },
                    { label: 'Tentang Kami', link: '/about' },
                    { label: 'Karir', link: '/career' },
                    { label: 'Kontak', link: '/contact' },
                ],
            },
            {
                label: "2. Hubungi",
                links: [
                    { label: 'hello@zorscraft.id', link: 'mailto:hello@zorscraft.id', ext: true },
                    { label: 'LinkedIn', link: 'https://linkedin.com', ext: true },
                    { label: 'Instagram', link: 'https://instagram.com', ext: true },
                    { label: 'X (Twitter)', link: 'https://x.com', ext: true },
                ],
            },
            {
                label: "3. Legal",
                links: [
                    { label: 'Syarat & Ketentuan', link: '/legal/terms' },
                    { label: 'Kebijakan Privasi', link: '/legal/privacy' },
                    { label: 'Penanganan Data', link: '/legal/data-handling' },
                    { label: 'Kebijakan Cookie', link: '/legal/cookie-policy' },
                ],
            },
        ],
        copyright: `© ${new Date().getFullYear()} PT Zors Craft Digital. Hak cipta dilindungi.`,
        services: "Strategi • Branding • Desain • Pengembangan • Optimasi • Dukungan",
    },
};

const Footer: FunctionComponent<FooterProps> = ({ className }) => {
    const { lang } = useLang();
    const t = content[lang];

    return (
        <footer className={cn("mt-32 mx-5 md:mx-auto max-w-4xl border-t border-[#171715]/10 pt-16", className)}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4">
                <Link href="/" className="inline-block">
                    <ZorsLockup className="h-8 md:h-9 w-auto" />
                </Link>
                <p className="text-sm md:text-base font-medium tracking-tight text-[#171715] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A88C40]" />
                    {t.tagline}
                </p>
            </div>

            <div className="grid font-medium mt-12 pb-12 grid-cols-1 md:grid-cols-3 gap-8">
                {t.sections.map((section, si) => (
                    <div key={si}>
                        <p className="text-xs uppercase tracking-wider font-mono text-[#A88C40]">{section.label}</p>
                        <ul className="mt-4 space-y-2.5 text-sm">
                            {section.links.map((page, i) => (
                                <li key={i}>
                                    <Link
                                        href={page.link}
                                        target={'ext' in page && page.ext ? "_blank" : undefined}
                                        rel={'ext' in page && page.ext ? "noopener noreferrer" : undefined}
                                        className="text-[#171715]/90 hover:text-[#A88C40] flex items-center gap-1 duration-200"
                                    >
                                        {page.label} {'ext' in page && page.ext && <ArrowUpRight size={14} strokeWidth={1.5} />}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="py-6 border-t border-[#171715]/10 flex flex-col md:flex-row items-center justify-between text-xs text-[#5C5850] gap-2">
                <p>{t.copyright}</p>
                <p className="font-mono text-[11px] text-[#5C5850]">{t.services}</p>
            </div>
        </footer>
    );
};

export default Footer;