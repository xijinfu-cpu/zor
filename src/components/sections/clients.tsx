import { cn } from "@/lib/utils";
import { FunctionComponent } from "react";
import Image from "next/image";

interface ClientsProps {
    className?: string;
}

const Clients: FunctionComponent<ClientsProps> = ({ className }) => {
    const clients = [
        {
            name: "Unoversion",
            logo: '/unoversion.png',
            w: 54,
            h: 54,
        },
        {
            name: "Kartikey AI",
            logo: '/kartikey-full.png',
            cls: 'invert-0',
            w: 120,
            h: 54,
            className: "max-md:border-r-0"
        },
        {
            name: "Hyperwafer",
            logo: '/hyperwafer.png',
            w: 54,
            h: 54,
        },
        {
            name: "DYU",
            logo: '/dyu.png',
            w: 54,
            h: 54,
            className: 'border-r-0'
        },
        {
            name: "SciHawk",
            logo: '/scihawk.png',
            w: 54,
            h: 54,
            className: 'md:border-b-0'
        },
        {
            name: "Mahalik Foundation",
            logo: '/mahalik-foundation.png',
            cls: 'invert-0',
            w: 120,
            h: 54,
            className: 'md:border-b-0 max-md:border-r-0'
        },
        {
            name: "BharatSaga",
            logo: '/bharatsaga.png',
            cls: 'invert-0',
            w: 54,
            h: 54,
            className: 'border-r border-b-0 border-neutral-300 border-dashed'
        },
    ];

    return (
        <section className={cn("w-full py-16", className)}>
            <div className="max-w-5xl mx-5 md:mx-auto text-center mb-8">
                <span className="text-xs uppercase tracking-wider text-[#A88C40] font-mono">
                    Collaborations
                </span>
                <h3 className="text-lg md:text-xl font-medium text-[#171715] mt-1">
                    Trusted by Growing Brands and Teams.
                </h3>
            </div>
            <div className="max-w-4xl mx-5 md:mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y divide-dashed divide-[#171715]/10 bg-white/80 rounded-2xl border border-[#171715]/10 p-2 shadow-xs">
                    {clients.map((client, i) => (
                        <div
                            key={i}
                            className={cn(
                                "h-28 relative flex items-center justify-center p-4 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 duration-300",
                                client.className
                            )}
                        >
                            <Image
                                src={client.logo}
                                width={client.w}
                                height={client.h}
                                unoptimized
                                alt={client.name}
                                className={cn("object-contain", client.cls)}
                            />
                        </div>
                    ))}
                    <div className="h-28 relative flex items-center justify-center text-xs font-mono text-[#171715]/40">
                        + more partners
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients;