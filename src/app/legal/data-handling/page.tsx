import LegalLayout from "@/components/custom/legal-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Data Handling — ZORS CRAFT",
    description: "Operational principles for handling client information and project credentials securely.",
};

const dataHandlingSections = [
    {
        number: "01",
        title: "Purpose First",
        content: "We request and use project information only when it has a clear purpose related to understanding, delivering, maintaining, or supporting the agreed work.",
    },
    {
        number: "02",
        title: "Minimum Necessary Access",
        content: "Team members and approved collaborators should access only the information reasonably necessary for their specific responsibilities.",
    },
    {
        number: "03",
        title: "Client Credentials",
        content: "Where project access credentials are required, we encourage the use of dedicated project accounts, role-based permissions, temporary access, and secure credential-sharing methods rather than sending passwords through ordinary messages.",
        callout: "Security Recommendation: We recommend sharing API keys, database credentials, and server passwords through end-to-end encrypted secret vaults rather than plaintext chat.",
    },
    {
        number: "04",
        title: "Storage",
        content: "Project files and information may be stored in approved systems used for communication, design, development, documentation, hosting, or project management. We aim to avoid unnecessary duplication of confidential information across tools.",
    },
    {
        number: "05",
        title: "Third-Party Platforms",
        content: "Some projects require third-party platforms, cloud providers, hosting providers, repositories, analytics tools, or other external services. Where they are required, access should be limited to the project purpose and governed by the relevant provider terms and any applicable client agreement.",
    },
    {
        number: "06",
        title: "Confidential Information",
        content: "Information identified as confidential, or which is reasonably understood to be confidential, should not be disclosed outside the project team except where authorized, contractually required, or legally required.",
    },
    {
        number: "07",
        title: "Production Data",
        content: "We avoid using real production or personal data for development and testing when realistic alternatives such as dummy, masked, or anonymized data can reasonably be used.",
        callout: "Environment Isolation: Development, staging, and preview environments are strictly decoupled from production client databases.",
    },
    {
        number: "08",
        title: "Backups and Copies",
        content: "Temporary copies, exported files, and backups should be limited to what is reasonably necessary for project delivery, recovery, or contractual obligations.",
    },
    {
        number: "09",
        title: "Project Completion",
        content: "After project completion, access rights should be reviewed. Credentials, repositories, accounts, and files should be transferred, retained, archived, or removed according to the project agreement and legitimate operational or legal requirements.",
    },
    {
        number: "10",
        title: "Incident Handling",
        content: "If we become aware of a security or data incident affecting information entrusted to ZORS CRAFT, we will assess the situation, take reasonable steps to contain the issue, document relevant facts, and communicate with affected clients or parties where appropriate or legally required.",
    },
    {
        number: "11",
        title: "Client Responsibilities",
        content: "Secure projects are a shared responsibility. Clients should maintain appropriate access controls, avoid unnecessary sharing of sensitive credentials, keep authorized contacts current, and promptly inform ZORS CRAFT when access should change or be revoked.",
    },
    {
        number: "12",
        title: "Questions",
        content: "Questions or audits regarding project data handling can be sent to hello@zorscraft.id.",
    },
];

export default function DataHandlingPage() {
    return (
        <LegalLayout
            title="Data Handling"
            subtitle="How we treat the information entrusted to us."
            lastUpdated="4 October 2026"
            accentColor="#2D8065"
            opening="Client data is part of the trust behind every project. This page describes the principles ZORS CRAFT follows when receiving, accessing, storing, sharing, and removing information provided to us during project discovery, design, development, support, and other professional engagements."
            importantNotice={{
                title: "Production Data Principle",
                content: "We strictly avoid using live customer production data in development or staging environments. Anonymized mock data is enforced across all engineering pipelines.",
            }}
            sections={dataHandlingSections}
        />
    );
}
