import { defineStore } from 'pinia';

export const useCoachesStore = defineStore('coaches', {
  state: () => ({
    modalCoaches: '', 
  }),
});
