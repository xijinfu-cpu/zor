import { cn } from "@/lib/utils";
import { FunctionComponent } from "react";
import ClientStoriesGrid from "./client-stories-grid";

interface WorkProps {
    className?: string;
}

const Work: FunctionComponent<WorkProps> = ({ className }) => {
    return (
        <section className={cn("w-full py-20", className)}>
            <div className="max-w-5xl mx-5 md:mx-auto mb-10 font-medium">
                <span className="border text-xs md:text-sm py-1 px-3.5 border-neutral-300 rounded-full bg-white/70 shadow-xs">
                    Client Stories
                </span>
                <h1 className="text-2xl md:text-4xl md:leading-12 my-3 font-semibold text-neutral-900">
                    Crafted in Partnership, <br />
                    <span className="text-neutral-400 font-normal">
                        From Strategy to Digital Experience — We Build Every Layer.
                    </span>
                </h1>
            </div>
            <ClientStoriesGrid />
        </section>
    );
};

export default Work;