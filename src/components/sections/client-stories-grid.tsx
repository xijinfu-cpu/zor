import { cn } from "@/lib/utils";
import { FunctionComponent } from "react";
import Stories from "@/data/client-stories.json";
import ClientStoryCard from "../ui/clientstorycard";

interface ClientStoriesGridProps {
    className?: string;
}

const ClientStoriesGrid: FunctionComponent<ClientStoriesGridProps> = ({ className }) => {
    return (
        <div className={cn("font-medium max-md:px-5", className)}>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                {Stories.slice(0, 4).map((story, i) => (
                    <ClientStoryCard
                        key={i}
                        className={story.className}
                        company={story.company}
                        industry={story.industry}
                        services={story.services || [(story as { projectType?: string }).projectType || "Experience"]}
                        title={story.title}
                        bgimg={story.image}
                        result={(story as { result?: string }).result}
                        link={`/case-study/${story.id}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ClientStoriesGrid;