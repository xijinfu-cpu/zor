import { Metadata } from "next";
import PrivacyContent from "./privacy-content";

export const metadata: Metadata = {
    title: "Privacy Policy — ZORS CRAFT",
    description: "How we collect, use, and protect personal information under applicable Indonesian data protection laws.",
};

export default function PrivacyPage() {
    return <PrivacyContent />;
}
