import { defineStore } from 'pinia';
import ApiService from '@/services/Api';
import type { MeditationType } from '@/types';

type StateShape = {
  meditationList: MeditationType[];
};

export const useMeditationStore = defineStore('meditation', {
  state: (): StateShape => ({
    meditationList: [],
  }),
  actions: {
    getMeditationList() {
      this.meditationList = ApiService.getMeditationList();
    },
    getType(typeId: string) {
      const currentType = this.meditationList.find(item => item.id === typeId);
      if (!currentType) {
        return null;
      }
      return currentType;
    },
    getCategoryList(typeId: string) {
      const currentType = this.meditationList.find(item => item.id === typeId);
      if (!currentType) {
        return [];
      }
      return currentType.categoryList;
    },
    getCategory(typeId: string, categoryId: string) {
      const categoryList = this.getCategoryList(typeId);
      if (categoryList.length === 0) {
        return null;
      }
      const currentCategory = categoryList.find(item => item.id === categoryId);
      if (!currentCategory) {
        return null;
      }
      return currentCategory;
    },
    getFocus(typeId: string, categoryId: string, focusId: string) {
      const currentCategory = this.getCategory(typeId, categoryId);
      if (!currentCategory) {
        return null;
      }
      const currentFocus = currentCategory.focusList.find(item => item.id === focusId);
      if (!currentFocus) {
        return null;
      }
      return currentFocus;
    },
  },
});
