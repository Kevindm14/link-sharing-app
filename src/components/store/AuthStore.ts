import { AuthError, Session, User } from "@supabase/supabase-js";
import { create } from "zustand";
import { supabase } from "../../libraries/supabase";
import { persist } from "zustand/middleware";

interface AuthState {
  session: Session | null;
}

interface AuthActions {
  setSession: (session: Session | null) => void;
  login: (email: string, password: string) => Promise<User | AuthError>;
  logout: () => Promise<void>;
}

const useAuthStore = create(
  persist<AuthState & AuthActions>(
    (set) => ({
      session: null,
      setSession: (session) => set({ session }),
      login: async (email, password) => {
        if (!email) return Promise.reject(new Error("Email is required"));
        if (!password) return Promise.reject(new Error("Password is required"));

        const { data, error } = await supabase.auth.signInWithPassword({
          email: email,
          password: password,
        });

        if (error) return Promise.reject(error);

        set({ session: data.session });
        return Promise.resolve(data.user);
      },
      logout: async () => {},
    }),
    {
      name: "auth-storage",
    }
  )
);

export default useAuthStore;
