import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface User {
  id: number;
  email: string;
  password: string;
  username?: string;
  // أضف الحقول حسب بيانات الـ API
}

interface AuthState {
  users: User[];            // كل المستخدمين المسجلين (local signups)
  currentUser: User | null; // المستخدم الحالي (logged-in)
  signUp: (user: Omit<User, "id">) => boolean; // ترجع true لو تم التسجيل، false لو الإيميل موجود
  login: (email: string, password: string) => boolean; // تسجيل دخول، ترجع true لو ناجح
  logout: () => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      users: [], 
      currentUser: null,

      signUp: (user) => {
        const { users } = get();
        // تحقق من تكرار الإيميل
        const exists = users.some((u) => u.email === user.email);
        if (exists) {
          return false; // الإيميل موجود بالفعل
        }
        // توليد ID بسيط (مثلاً max ID + 1)
        const id = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
        const newUser: User = { id, ...user };
        set({ users: [...users, newUser], currentUser: newUser });
        return true;
      },

      login: (email, password) => {
        const { users } = get();
        const foundUser = users.find(u => u.email === email && u.password === password);
        if (foundUser) {
          set({ currentUser: foundUser });
          return true;
        }
        return false;
      },

      logout: () => set({ currentUser: null }),
    }),
    {
      name: "auth-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useAuthStore;
