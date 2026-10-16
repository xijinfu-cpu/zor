import { Metadata } from "next";
import ClientStoriesContent from "./client-stories-content";

export const metadata: Metadata = {
    title: "Client Stories — ZORS CRAFT",
    description: "Crafted in Partnership. From Challenges to Digital Experiences That Move Businesses Forward.",
};

export default function ClientStories() {
    return <ClientStoriesContent />;
}
