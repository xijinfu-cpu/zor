"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";

export interface AdminUser {
    name: string;
    email: string;
    role: string;
}

interface AdminAuthContextType {
    user: AdminUser | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (email: string, pass: string) => Promise<{ success: boolean; error?: string }>;
    logout: () => void;
}

const STORAGE_AUTH_KEY = "zors_admin_auth";
const STORAGE_CREDENTIALS_KEY = "zors_admin_custom_credentials";

export const AdminAuthContext = createContext<AdminAuthContextType>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
    login: async () => ({ success: false }),
    logout: () => {},
});

export function AdminAuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<AdminUser | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        try {
            const stored = localStorage.getItem(STORAGE_AUTH_KEY);
            if (stored) {
                const parsed = JSON.parse(stored);
                setUser(parsed);
            }
        } catch (e) {
            console.error("Failed to read admin auth session", e);
        } finally {
            setIsLoading(false);
        }
    }, []);

    const login = async (email: string, pass: string): Promise<{ success: boolean; error?: string }> => {
        const cleanEmail = email.trim().toLowerCase();
        const cleanPass = pass.trim();

        // Check against custom credentials if set, else fallback to defaults
        let validEmail = "admin@zorscraft.id";
        let validPass = "admin123";

        try {
            const customCreds = localStorage.getItem(STORAGE_CREDENTIALS_KEY);
            if (customCreds) {
                const parsed = JSON.parse(customCreds);
                if (parsed.email) validEmail = parsed.email.toLowerCase();
                if (parsed.password) validPass = parsed.password;
            }
        } catch {
            // fallback to default
        }

        if (cleanEmail === validEmail && cleanPass === validPass) {
            const userData: AdminUser = {
                name: "ZORS Admin",
                email: cleanEmail,
                role: "Super Admin",
            };
            setUser(userData);
            localStorage.setItem(STORAGE_AUTH_KEY, JSON.stringify(userData));
            return { success: true };
        } else {
            return {
                success: false,
                error: "Email atau kata sandi salah. Gunakan admin@zorscraft.id / admin123",
            };
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem(STORAGE_AUTH_KEY);
        router.push("/admin/login");
    };

    return (
        <AdminAuthContext.Provider
            value={{
                user,
                isAuthenticated: !!user,
                isLoading,
                login,
                logout,
            }}
        >
            {children}
        </AdminAuthContext.Provider>
    );
}

export function useAdminAuth() {
    return useContext(AdminAuthContext);
}
