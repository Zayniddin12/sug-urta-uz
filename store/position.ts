import { defineStore } from 'pinia'

export const usePositionStore = defineStore('positionStore', {
  state: () => ({
    isVisible: true, // true bo'lishi kerak, chunki boshida ko‘rinadi
    lastScrollY: 0,
  }),
  actions: {
    handleScroll() {
      const currentScrollY = window.scrollY || window.pageYOffset

      if (Math.abs(currentScrollY - this.lastScrollY) < 5) return
      this.isVisible = currentScrollY < this.lastScrollY
      this.lastScrollY = currentScrollY
    },
  },
})
