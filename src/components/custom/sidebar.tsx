"use client"

import { ArrowUpRight, Moon, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent, useState } from "react";
import { usePathname } from 'next/navigation';

import { ZorsSymbol } from "./logo";

interface SidebarProps {
    className?: string
}

const Sidebar: FunctionComponent<SidebarProps> = ({ }) => {
    const [open] = useState(false)
    const pathname = usePathname();

    return (<aside className="w-96 data-[open=true]:w-screen fixed top-0 left-0 z-50 p-6 h-screen" data-open={open}>
        <div className="flex flex-col py-6 rounded-3xl px-6 bg-[#F0ECE2] border border-[#171715]/10 shadow-xl h-full">
            <div className="flex items-center">
                <Link href="/" className="flex items-center gap-2">
                    <ZorsSymbol className="size-10 text-[#171715]" />
                </Link>
                <button className="p-3 bg-white/70 border border-[#171715]/10 rounded-full ml-auto text-[#171715]">
                    <Search size={20} />
                </button>
            </div>
            <div className="my-auto max-w-64 mx-auto flex flex-col gap-5 text-center">
                {[{
                    name: 'Home',
                    href: '/'
                }, {
                    name: 'Services',
                    href: '/services'
                }, {
                    name: 'Client Stories',
                    href: '/client-stories'
                }, {
                    name: 'About Us',
                    href: '/about'
                },].map((item, index) => (
                    <Link
                        href={item.href}
                        key={index}
                        data-active={pathname === item.href}
                        className="text-xl text-[#171715]/60 font-medium data-[active=true]:text-[#A88C40] data-[active=true]:font-semibold duration-300 hover:text-[#171715]"
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
            <Link
                href={"/contact"}
                className="py-3 px-6 bg-[#171715] hover:bg-[#A88C40] hover:text-[#171715] text-[#F0ECE2] duration-200 group flex items-center gap-2 justify-center mt-auto text-base font-medium rounded-full w-56 mx-auto shadow-sm"
            >
                Start a Project <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-200" />
            </Link>
        </div>
    </aside>);
}

export default Sidebar;