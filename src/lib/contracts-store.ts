export interface ProjectContract {
    id: string;
    contractNumber: string;
    messageId?: string;
    clientName: string;
    clientEmail: string;
    clientCompany: string;
    projectTitle: string;
    engagementModel: "Fixed Scope Project" | "Monthly Sprint Retainer" | "Dedicated Pod";
    contractValue: string;
    timeline: string;
    paymentTerms: string;
    deliverables: string[];
    warrantyDays: number;
    specialNotes?: string;
    createdAt: string;
    status: "draft" | "sent" | "signed";
}

export const STORAGE_KEY_CONTRACTS = "zors_contracts";

export function generateContractNumber(): string {
    const year = new Date().getFullYear();
    const random = Math.floor(1000 + Math.random() * 9000);
    return `CTR/ZC/${year}/${random}`;
}

export function getContracts(): ProjectContract[] {
    if (typeof window === "undefined") return [];
    try {
        const raw = localStorage.getItem(STORAGE_KEY_CONTRACTS);
        if (raw) {
            const parsed = JSON.parse(raw);
            if (Array.isArray(parsed)) return parsed;
        }
    } catch (e) {
        console.error("Failed to read contracts from localStorage", e);
    }
    return [];
}

export function saveContract(contract: ProjectContract): void {
    if (typeof window === "undefined") return;
    try {
        const existing = getContracts();
        const index = existing.findIndex((c) => c.id === contract.id);
        let updated: ProjectContract[];
        if (index >= 0) {
            updated = existing.map((c) => (c.id === contract.id ? contract : c));
        } else {
            updated = [contract, ...existing];
        }
        localStorage.setItem(STORAGE_KEY_CONTRACTS, JSON.stringify(updated));
        window.dispatchEvent(new Event("zors_contracts_updated"));
    } catch (e) {
        console.error("Failed to save contract", e);
    }
}

export function deleteContract(id: string): void {
    if (typeof window === "undefined") return;
    try {
        const existing = getContracts();
        const updated = existing.filter((c) => c.id !== id);
        localStorage.setItem(STORAGE_KEY_CONTRACTS, JSON.stringify(updated));
        window.dispatchEvent(new Event("zors_contracts_updated"));
    } catch (e) {
        console.error("Failed to delete contract", e);
    }
}

export function updateContractStatus(id: string, status: ProjectContract["status"]): void {
    if (typeof window === "undefined") return;
    try {
        const existing = getContracts();
        const updated = existing.map((c) => (c.id === id ? { ...c, status } : c));
        localStorage.setItem(STORAGE_KEY_CONTRACTS, JSON.stringify(updated));
        window.dispatchEvent(new Event("zors_contracts_updated"));
    } catch (e) {
        console.error("Failed to update contract status", e);
    }
}
