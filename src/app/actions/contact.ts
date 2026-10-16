// Client-side brief management compatible with static export (GitHub Pages & client-side storage)
export interface ContactFormData {
    name: string;
    company: string;
    email: string;
    website?: string;
    services: string[];
    summary: string;
    goals?: string;
    timeline?: string;
    budget?: string;
    referral?: string;
}

export interface BriefEntry extends ContactFormData {
    id: string;
    submittedAt: string;
    status: "new" | "read" | "replied";
}

export interface ContactFormResult {
    success: boolean;
    message: string;
}

const STORAGE_KEY = "zors_project_briefs";

function getStoredBriefs(): BriefEntry[] {
    if (typeof window === "undefined") return [];
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? (JSON.parse(raw) as BriefEntry[]) : [];
    } catch {
        return [];
    }
}

function saveStoredBriefs(briefs: BriefEntry[]): void {
    if (typeof window === "undefined") return;
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(briefs));
    } catch (e) {
        console.error("Failed to save briefs to localStorage:", e);
    }
}

export async function submitContactForm(
    formData: ContactFormData
): Promise<ContactFormResult> {
    try {
        if (!formData.name || !formData.email || !formData.summary) {
            return { success: false, message: "Please fill in all required fields." };
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            return { success: false, message: "Please enter a valid email address." };
        }

        const newBrief: BriefEntry = {
            ...formData,
            id: `brief_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
            submittedAt: new Date().toISOString(),
            status: "new",
        };

        const existing = getStoredBriefs();
        existing.unshift(newBrief);
        saveStoredBriefs(existing);

        return {
            success: true,
            message: "Brief received! We will get back to you within 24 hours.",
        };
    } catch (error) {
        console.error("Contact form error:", error);
        return {
            success: false,
            message: "Something went wrong. Please email us directly at hello@zorscraft.id",
        };
    }
}

export async function getBriefs(): Promise<BriefEntry[]> {
    return getStoredBriefs();
}

export async function markBriefStatus(
    id: string,
    status: BriefEntry["status"]
): Promise<void> {
    const briefs = getStoredBriefs();
    const idx = briefs.findIndex((b) => b.id === id);
    if (idx !== -1) {
        briefs[idx].status = status;
        saveStoredBriefs(briefs);
    }
}

export async function deleteBrief(id: string): Promise<void> {
    const briefs = getStoredBriefs().filter((b) => b.id !== id);
    saveStoredBriefs(briefs);
}
