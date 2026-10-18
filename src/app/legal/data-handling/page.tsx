import { Metadata } from "next";
import DataHandlingContent from "./data-handling-content";

export const metadata: Metadata = {
    title: "Data Handling — ZORS CRAFT",
    description: "Operational principles for handling client information and project credentials securely.",
};

export default function DataHandlingPage() {
    return <DataHandlingContent />;
}
