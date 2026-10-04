'use client'

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FunctionComponent, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ArrowUpRight, Menu, MoveRight, X } from "lucide-react";
import { HyperText } from "../magicui/hyper-text";

import { ZorsSymbol } from "./logo";

interface HeaderProps {
    className?: string;
}

const Header: FunctionComponent<HeaderProps> = ({ className }) => {
    const pathname = usePathname();
    const [offset, setOffset] = useState(0);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        function onScroll() {
            setOffset(window.scrollY);
        }
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Client Stories', href: '/client-stories' },
        { name: 'About Us', href: '/about' },
    ];

    return (
        <>
            <header className={cn("fixed w-full left-0 top-0 z-50", className)}>
                <div className={`px-5 py-3.5 duration-300 from-[#F0ECE2]/90 to-transparent bg-gradient-to-b ${offset > 10 && 'backdrop-blur-md bg-[#F0ECE2]/80 border-b border-[#171715]/5 shadow-xs'} w-full flex items-center`}>
                    <Link href={"/"} className="flex items-center gap-2.5 group">
                        <ZorsSymbol className="w-8 h-auto duration-200 group-hover:scale-105" />
                        <span className="text-base font-semibold tracking-tight text-[#171715] max-md:hidden">
                            ZORS CRAFT
                        </span>
                    </Link>
                    <nav className={`hidden md:flex text-sm items-center gap-1.5 mx-auto bg-white/70 p-1 rounded-full border border-[#171715]/10 shadow-xs backdrop-blur-xs`}>
                        {navItems.map((item, index) => {
                            const isActive = item.href === pathname;
                            return (
                                <Link
                                    href={item.href}
                                    key={index}
                                    data-active={isActive}
                                    className={`flex items-center gap-1.5 rounded-full py-1.5 px-4 font-medium text-xs duration-200 ${
                                        isActive
                                            ? "bg-[#171715] text-[#F0ECE2] shadow-xs"
                                            : "text-[#171715]/75 hover:text-[#171715] hover:bg-white/80"
                                    }`}
                                >
                                    {isActive && <span className="size-1.5 rounded-full bg-[#A88C40]" />}
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>
                    <Button asChild className={`hidden md:flex rounded-full px-5 py-2 text-xs font-mono tracking-wide bg-[#171715] hover:bg-[#A88C40] text-[#F0ECE2] shadow-xs transition-colors duration-200`}>
                        <Link href={"/contact"} className="flex items-center gap-1.5">
                            Start a Project <MoveRight strokeWidth={1.5} className="size-3.5" />
                        </Link>
                    </Button>
                    <Button onClick={() => setOpen(true)} className="ml-auto md:hidden bg-white/80 border border-[#171715]/10" variant={"secondary"} size={"icon"}>
                        <Menu className="text-[#171715]" />
                    </Button>
                </div>
            </header>

            {/* Mobile Nav Overlay */}
            <div data-open={open} className="fixed py-4 px-5 w-full h-full data-[open=true]:visible opacity-0 data-[open=true]:opacity-100 invisible bg-[#F0ECE2]/95 flex -translate-x-10 data-[open=true]:translate-x-0 flex-col backdrop-blur-xl z-[999] duration-300">
                <div className="flex items-center">
                    <div className="flex items-center gap-2.5">
                        <ZorsSymbol className="w-8 h-auto" />
                        <span className="text-base font-semibold text-[#171715]">
                            ZORS CRAFT
                        </span>
                    </div>
                    <Button onClick={() => setOpen(false)} className="ml-auto md:hidden bg-white/80 border border-[#171715]/10" variant={"outline"} size={"icon"}>
                        <X className="text-[#171715]" />
                    </Button>
                </div>
                <nav className={`flex flex-col text-sm justify-center mt-auto gap-2`}>
                    {navItems.map((item, index) => {
                        const isActive = item.href === pathname;
                        return (
                            <Link
                                href={item.href}
                                key={index}
                                onClick={() => setOpen(false)}
                                className={`w-fit flex items-center gap-2 rounded-full py-2.5 px-5 text-xl font-medium duration-200 ${
                                    isActive
                                        ? "bg-[#171715] text-[#F0ECE2]"
                                        : "text-[#171715]/80 hover:text-[#A88C40]"
                                }`}
                            >
                                {isActive && <span className="size-2 rounded-full bg-[#A88C40]" />}
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>
                <Button asChild className={`mt-auto w-fit rounded-full px-6 py-3 bg-[#171715] hover:bg-[#A88C40] text-[#F0ECE2] transition-colors`}>
                    <Link href={"/contact"} onClick={() => setOpen(false)} className="flex items-center gap-1.5">
                        Start a Project <MoveRight strokeWidth={1.5} className="size-4" />
                    </Link>
                </Button>
            </div>
        </>
    );
};

export default Header;