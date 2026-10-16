import { Metadata } from "next";
import ContactContent from "./contact-content";

export const metadata: Metadata = {
    title: "Start a Project — ZORS CRAFT",
    description: "Tell us what you're building, changing, or trying to solve. Whether you have a clear brief or just the beginning of an idea, we will help figure out what comes next.",
};

export default function Contact() {
    return <ContactContent />;
}
