import { defineStore } from 'pinia'

export const usePaymentStore = defineStore("payment", {

    state: () => ({
      'name' : 'this is for payment'
    })
  });