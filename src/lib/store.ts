import { create } from 'zustand'

interface NavbarState {
  isOpen: boolean
  toggleNavbar: () => void
  closeNavbar: () => void
  openNavbar: () => void
}

export const useNavbarStore = create<NavbarState>((set) => ({
  isOpen: false,
  toggleNavbar: () => set((state) => ({ isOpen: !state.isOpen })),
  closeNavbar: () => set({ isOpen: false }),
  openNavbar: () => set({ isOpen: true }),
}))