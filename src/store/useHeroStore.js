import { create } from 'zustand'

import { heroData } from '../components/common/Hero/hero.data'

export const useHeroStore = create((set) => ({
  data: heroData.home,

  setHeroContent: (key) =>
    set({
      data: heroData[key] || heroData.home,
    }),
}))
