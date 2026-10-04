import { cn } from "@/lib/utils";
import { FunctionComponent } from "react";

interface IndustriesProps {
    className?: string;
}

const Industries: FunctionComponent<IndustriesProps> = ({ className }) => {
    const industries = [
        {
            title: "Retail & eCommerce",
            image: "/shopping-cart.png",
            className: "md:col-span-2",
        },
        {
            title: "Beauty & Lifestyle",
            image: "/saas.png",
            className: "md:col-span-1",
        },
        {
            title: "Food & Beverage",
            image: "/data.png",
            className: "md:col-span-1",
        },
        {
            title: "Startups & Technology",
            image: "/cybersecurity.png",
            className: "md:col-span-1",
        },
        {
            title: "Education & Healthcare",
            image: "/iot.png",
            className: "md:col-span-1",
        },
        {
            title: "Property & Hospitality",
            image: "/ai.png",
            className: "md:col-span-2",
        },
    ];

    return (
        <section className={cn("w-full py-20", className)}>
            <div className="max-w-5xl mx-5 md:mx-auto mb-10 font-medium">
                <span className="border text-xs uppercase tracking-wider font-mono py-1 px-3.5 border-[#A88C40]/30 rounded-full bg-[#A88C40]/10 text-[#A88C40]">
                    Industries
                </span>
                <h2 className="md:text-4xl md:leading-12 text-2xl my-3 font-semibold text-[#171715]">
                    Segments We Serve, <br />
                    <span className="text-[#171715]/50 font-normal">
                        For Brands Ready to Grow — and Built to Go Further.
                    </span>
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 max-w-6xl mx-5 md:mx-auto">
                {industries.map((item, i) => (
                    <div
                        key={i}
                        className={cn(
                            "group relative flex flex-col justify-end p-6 rounded-2xl md:min-h-96 font-medium bg-[#171715] overflow-hidden border border-[#171715]/10 shadow-xs duration-300",
                            item.className
                        )}
                        style={{
                            backgroundImage: `url('${item.image}')`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                        }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 group-hover:from-black/90 duration-300" />
                        <div className="relative z-10">
                            <span className="text-sm bg-white/90 text-neutral-900 backdrop-blur-xs px-3.5 py-1.5 rounded-full font-medium shadow-xs inline-block">
                                {item.title}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Industries;