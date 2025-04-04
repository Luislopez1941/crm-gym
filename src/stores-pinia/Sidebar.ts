import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useSidebarStore = defineStore('sidebar', () => {
  const isClose = ref(false);

  const toggle = () => {
    isClose.value = !isClose.value;
  };

  return { isClose, toggle };
});
