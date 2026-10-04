import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { FunctionComponent } from "react";
import { ZorsLockup } from "./logo";

interface FooterProps {
    className?: string;
}

const Footer: FunctionComponent<FooterProps> = ({ className }) => {
    return (
        <footer className={cn("mt-32 mx-5 md:mx-auto max-w-4xl border-t border-[#171715]/10 pt-16", className)}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4">
                <Link href="/" className="inline-block">
                    <ZorsLockup className="h-8 md:h-9 w-auto" />
                </Link>
                <p className="text-sm md:text-base font-medium tracking-tight text-[#171715] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A88C40]" />
                    Built Different. Meant to Last.
                </p>
            </div>

            <div className="grid font-medium mt-12 pb-12 grid-cols-1 md:grid-cols-3 gap-8">
                {/* 1. Pages */}
                <div>
                    <p className="text-xs uppercase tracking-wider font-mono text-[#A88C40]">1. Pages</p>
                    <ul className="mt-4 space-y-2.5 text-sm">
                        {[
                            { label: 'Home', link: '/' },
                            { label: 'Services', link: '/services' },
                            { label: 'Client Stories', link: '/client-stories' },
                            { label: 'About Us', link: '/about' },
                            { label: 'Careers', link: '/career' },
                            { label: 'Contact', link: '/contact' },
                        ].map((page, i) => (
                            <li key={i}>
                                <Link href={page.link} className="text-[#171715]/90 hover:text-[#A88C40] flex items-center gap-1 duration-200">
                                    {page.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 2. Connect */}
                <div>
                    <p className="text-xs uppercase tracking-wider font-mono text-[#A88C40]">2. Connect</p>
                    <ul className="mt-4 space-y-2.5 text-sm">
                        {[
                            { label: 'hello@zorscraft.id', link: 'mailto:hello@zorscraft.id', ext: true },
                            { label: 'LinkedIn', link: 'https://linkedin.com', ext: true },
                            { label: 'Instagram', link: 'https://instagram.com', ext: true },
                            { label: 'X (Twitter)', link: 'https://x.com', ext: true },
                        ].map((page, i) => (
                            <li key={i}>
                                <Link
                                    href={page.link}
                                    target={page.ext ? "_blank" : undefined}
                                    rel={page.ext ? "noopener noreferrer" : undefined}
                                    className="text-[#171715]/90 hover:text-[#A88C40] flex items-center gap-1 duration-200"
                                >
                                    {page.label} {page.ext && <ArrowUpRight size={14} strokeWidth={1.5} />}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 3. Legal */}
                <div>
                    <p className="text-xs uppercase tracking-wider font-mono text-[#A88C40]">3. Legal</p>
                    <ul className="mt-4 space-y-2.5 text-sm">
                        {[
                            { label: 'Terms & Conditions', link: '/legal/terms' },
                            { label: 'Privacy Policy', link: '/legal/privacy' },
                            { label: 'Data Handling', link: '/legal/data-handling' },
                            { label: 'Cookie Policy', link: '/legal/cookie-policy' },
                        ].map((page, i) => (
                            <li key={i}>
                                <Link href={page.link} className="text-[#171715]/90 hover:text-[#A88C40] duration-200">
                                    {page.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="py-6 border-t border-[#171715]/10 flex flex-col md:flex-row items-center justify-between text-xs text-[#5C5850] gap-2">
                <p>
                    &copy; {new Date().getFullYear()} PT Zors Craft Digital. All rights reserved.
                </p>
                <p className="font-mono text-[11px] text-[#5C5850]">
                    Strategy • Branding • Design • Development • Optimization • Support
                </p>
            </div>
        </footer>
    );
};

export default Footer;