import { defineStore } from 'pinia';

export const useMembershipsStore = defineStore('memberships', {
  state: () => ({
    modalMemberships: '', 
  }),
});
