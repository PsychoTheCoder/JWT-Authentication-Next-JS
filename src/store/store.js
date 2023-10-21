import { create } from 'zustand'

export const useUserStore = create((set) => ({
  isLogin: false,
  username: "No",
  email: "",
  isAlert: false,
  alertMsg: "",
  alertType: "",
  attachments: [],
 setAttachments: (attachment) => {
    set((state) => ({
      attachments: [...state.attachments, attachment],
    }));
  },
  resetAttachments: () => set({ attachments: [] }),
  setIsLogin: (newState) => set({ isLogin:newState}),
  setUsername: (newState) => set({ username:newState}),
  setEmail: (newState) => set({ email:newState}),
  setIsAlert: (newState) => set({ isAlert:newState}),
  setAlertMsg: (newState) => set({ alertMsg:newState }),
  setAlertType: (newState) => set({ alertType:newState }),


}))