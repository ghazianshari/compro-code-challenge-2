import { User } from '@/types/users';
import { create } from 'zustand';
import { persist } from "zustand/middleware";

type Store = {
    user: User | null;
    onAuthSuccess: ({ user }: { user: User }) => void; // waktu login jalanin fungsi ini
    clearAuth: () => void; // waktu logout ngejalanin fungsi ini
}

// nyimpen global state di memory ketika kita nggak masukin ke local storage. jadi ketika di refresh, memory ke reset ulang

export const useAuthStore = create<Store>()(
    persist(
        (set) => ({
            user: null,
            onAuthSuccess: ({ user }) => set(() => ({ user })),
            clearAuth: () => set(() => ({ user: null })),
        }),
        { name: "blog-go-store" }
    )
);