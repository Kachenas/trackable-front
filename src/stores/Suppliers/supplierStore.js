import { defineStore } from 'pinia'

export const useSupplierStore = defineStore("supplier", {

    state: () => ({
      'name' : 'this is for supplier'
    })
    
  });