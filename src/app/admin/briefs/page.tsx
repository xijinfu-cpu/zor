import { Metadata } from "next";
import AdminBriefsClient from "./briefs-client";

export const metadata: Metadata = {
    title: "Project Briefs — Admin ZORS CRAFT",
    description: "Internal admin page untuk melihat semua project brief yang masuk.",
    robots: "noindex, nofollow", // Jangan diindex oleh search engine
};

export default function AdminBriefsPage() {
    return <AdminBriefsClient />;
}
