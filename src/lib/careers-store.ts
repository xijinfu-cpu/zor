export interface JobPosition {
    id: string;
    title: string;
    department: string;
    type: string;
    location: string;
    status: "open" | "closed";
    applicantsCount: number;
    descEn?: string;
    descId?: string;
    accent?: string;
}

export interface JobApplication {
    id: string;
    jobId: string;
    jobTitle: string;
    fullName: string;
    email: string;
    phone?: string;
    portfolioUrl: string;
    resumeUrl: string;
    coverNote?: string;
    appliedAt: string;
    status: "new" | "reviewed" | "shortlisted" | "rejected";
}

export const STORAGE_KEY_JOBS = "zors_career_jobs";
export const STORAGE_KEY_APPLICATIONS = "zors_career_applications";

export const DEFAULT_JOBS: JobPosition[] = [
    {
        id: "senior-frontend-engineer",
        title: "Senior Full-Stack Engineer (Next.js & TypeScript)",
        department: "Engineering",
        type: "Full-Time / Remote (ID/SEA)",
        location: "Remote (ID/SEA)",
        status: "open",
        applicantsCount: 0,
        descEn: "Lead web application architecture across Next.js, TypeScript, and modern headless ecosystems with extreme attention to micro-interactions and performance.",
        descId: "Memimpin arsitektur aplikasi web modern Next.js, TypeScript, dan ekosistem headless dengan standar tinggi pada animasi dan performa.",
        accent: "#A88C40",
    },
    {
        id: "brand-ui-designer",
        title: "Lead UI/UX Designer & Design Systems",
        department: "Design",
        type: "Full-Time / Remote (ID/SEA)",
        location: "Remote / Hybrid Jakarta",
        status: "open",
        applicantsCount: 0,
        descEn: "Shape brand identities, design systems, and digital product experiences that balance typographic rigor with human-centered interaction.",
        descId: "Merancang identitas brand, sistem desain terstruktur, dan pengalaman produk digital yang memadukan keindahan tipografi dengan kegunaan nyata.",
        accent: "#7D568E",
    },
    {
        id: "digital-strategist",
        title: "Digital Product Strategist",
        department: "Strategy",
        type: "Contract / Hybrid",
        location: "Bandung / Jakarta, Indonesia",
        status: "closed",
        applicantsCount: 0,
        descEn: "Bridge client business objectives with creative and engineering roadmaps, facilitating discovery, sprints, and verified delivery.",
        descId: "Menjembatani visi bisnis klien dengan peta jalan kreatif dan teknis, memfasilitasi sesi discovery, sprint, hingga delivery terverifikasi.",
        accent: "#586B6D",
    },
];

export function getJobs(): JobPosition[] {
    if (typeof window === "undefined") return DEFAULT_JOBS;
    try {
        const raw = localStorage.getItem(STORAGE_KEY_JOBS);
        if (raw) {
            const parsed = JSON.parse(raw);
            if (Array.isArray(parsed) && parsed.length > 0) {
                return parsed;
            }
        }
    } catch (e) {
        console.error("Failed to read jobs from localStorage", e);
    }
    return DEFAULT_JOBS;
}

export function saveJobs(jobs: JobPosition[]): void {
    if (typeof window === "undefined") return;
    try {
        localStorage.setItem(STORAGE_KEY_JOBS, JSON.stringify(jobs));
        window.dispatchEvent(new Event("zors_jobs_updated"));
    } catch (e) {
        console.error("Failed to save jobs to localStorage", e);
    }
}

export function getApplications(): JobApplication[] {
    if (typeof window === "undefined") return [];
    try {
        const raw = localStorage.getItem(STORAGE_KEY_APPLICATIONS);
        if (raw) {
            const parsed = JSON.parse(raw);
            if (Array.isArray(parsed)) {
                return parsed;
            }
        }
    } catch (e) {
        console.error("Failed to read applications from localStorage", e);
    }
    return [];
}

export function saveApplications(apps: JobApplication[]): void {
    if (typeof window === "undefined") return;
    try {
        localStorage.setItem(STORAGE_KEY_APPLICATIONS, JSON.stringify(apps));
        window.dispatchEvent(new Event("zors_applications_updated"));
    } catch (e) {
        console.error("Failed to save applications to localStorage", e);
    }
}

export function submitApplication(data: Omit<JobApplication, "id" | "appliedAt" | "status">): JobApplication {
    const apps = getApplications();
    const newApp: JobApplication = {
        ...data,
        id: `app_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        appliedAt: new Date().toISOString(),
        status: "new",
    };
    const updatedApps = [newApp, ...apps];
    saveApplications(updatedApps);

    // Update applicantsCount for the matching job
    const jobs = getJobs();
    const updatedJobs = jobs.map((j) => {
        if (j.id === data.jobId) {
            return { ...j, applicantsCount: (j.applicantsCount || 0) + 1 };
        }
        return j;
    });
    saveJobs(updatedJobs);

    return newApp;
}

export function updateApplicationStatus(id: string, status: JobApplication["status"]): void {
    const apps = getApplications();
    const updated = apps.map((a) => (a.id === id ? { ...a, status } : a));
    saveApplications(updated);
}

export function deleteApplication(id: string): void {
    const apps = getApplications();
    const target = apps.find((a) => a.id === id);
    const updated = apps.filter((a) => a.id !== id);
    saveApplications(updated);

    if (target) {
        const jobs = getJobs();
        const updatedJobs = jobs.map((j) => {
            if (j.id === target.jobId && j.applicantsCount > 0) {
                return { ...j, applicantsCount: j.applicantsCount - 1 };
            }
            return j;
        });
        saveJobs(updatedJobs);
    }
}
