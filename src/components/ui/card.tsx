import { cn } from "@/lib/utils";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { FunctionComponent } from "react";

interface CardProps {
    children: React.ReactNode | React.ReactNode[]
    className?: string
    title: string
    link?: string
    sub?: string
    sm?: boolean
    altStyle?: boolean
    arrowDirDown?: boolean
    reverse?: boolean
}

const Card: FunctionComponent<CardProps> = ({ children, className, title, link, sub, sm, altStyle, arrowDirDown, reverse = false }) => {
    const Arrow = arrowDirDown ? ArrowDown : ArrowUpRight
    return (<><div className={cn("p-1 group bg-white/80 border border-[#171715]/10 shadow-xs flex rounded-xl", className, reverse ? 'flex-col-reverse' : 'flex-col')}>
        <div>
            {children}
        </div>
        <div className="p-5">
            {link ? <Link href={link} className="hover:text-[#A88C40] group/link duration-300 relative text-[#171715]">
                <h1 className={`${sm ? 'text-lg' : 'text-2xl'} font-semibold text-[#171715]`}>
                    {title}<br /><span className="text-[#171715]/50 group-hover/link:text-[#171715]/75 duration-300 font-normal">{sub}</span>
                    {altStyle ? <div className={`bg-white/90 border border-[#171715]/10 p-1 rounded-2xl absolute ${reverse ? 'top-29' : '-top-17'} right-0 group-hover/link:translate-x-2 duration-300 opacity-0 group-hover/link:opacity-100`}>
                        <Arrow size={32} strokeWidth={1.25} className="text-[#A88C40]" />
                    </div> : <Arrow size={32} strokeWidth={1} className={`absolute top-5 right-5 text-[#A88C40] ${arrowDirDown ? 'group-hover/link:translate-y-1' : 'group-hover/link:translate-x-1 group-hover/link:-translate-y-1'} duration-300 opacity-0 group-hover/link:opacity-100`} />}
                </h1>
            </Link> : <h1 className={`${sm ? 'text-lg' : 'text-2xl'} font-semibold text-[#171715]`}>
                {title}<br /><span className="text-[#171715]/50 font-normal">{sub}</span>
            </h1>}
        </div>
    </div></>);
}

export default Card;