import { create } from "zustand";

import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useAuthStore = create((set) => ({
  authUser: null,
  isSingingUp: false,
  isLoggingUp: false,
  isCheackingAuth: true,

  signup: async (data) => {
    set({ isSingingUp: true });
    try {
      const res = await axiosInstance.post("/auth/signup", data);

      if (res) {
        set({ authUser: res.data.message });
        toast.success("Account created successfully");
      }
    } catch (error) {
      toast.error(error.response?.data.message);
    } finally {
      set({ isSingingUp: false });
    }
  },

  login: async (data) => {
    set({ isLoggingUp: true });
    try {
      const res = await axiosInstance.post("/auth/login", data);

      if (res) {
        set({ authUser: res.data.message });
        toast.success("Login successfully");
      }
    } catch (error) {
      toast.error(error.response?.data.message);
    } finally {
      set({ isLoggingUp: false });
    }
  },

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/profile");

      set({ authUser: res.data.message });
    } catch (error) {
      console.log("Error in checking auth");
      set({ authUser: null });
    } finally {
      set({ isCheackingAuth: false });
    }
  },
}));
