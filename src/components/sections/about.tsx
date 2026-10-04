import { cn } from "@/lib/utils";
import { FunctionComponent } from "react";

interface AboutProps {
    className?: string;
}

const About: FunctionComponent<AboutProps> = ({ className }) => {
    return (
        <section className={cn("py-20 mx-5", className)}>
            <div className="max-w-5xl mx-auto mb-6 font-medium">
                <span className="border text-xs uppercase tracking-wider font-mono py-1 px-3.5 border-[#A88C40]/30 rounded-full bg-[#A88C40]/10 text-[#A88C40]">
                    About Us
                </span>
            </div>
            <div className="grid grid-cols-1 max-w-5xl mx-auto md:grid-cols-2 gap-8 md:gap-12">
                <div>
                    <h2 className="text-2xl md:text-3xl font-semibold text-[#171715] leading-snug">
                        ZORS CRAFT builds meaningful digital products for businesses ready to grow.
                    </h2>
                </div>
                <div className="space-y-6">
                    <p className="text-base md:text-lg text-[#171715]/75 leading-relaxed font-normal">
                        From strategy and branding to website development and digital solutions,
                        we create products that help brands communicate clearly, build trust, and grow in the digital world.
                    </p>
                    <p className="text-base md:text-lg text-[#171715]/60 leading-relaxed font-normal">
                        Every project starts with understanding — not assumptions. We craft with intention,
                        design with purpose, and build with attention to detail. No unnecessary complexity.
                        Just thoughtful digital experiences designed to make an impact and last.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;