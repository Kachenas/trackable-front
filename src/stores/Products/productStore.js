import { defineStore } from 'pinia'

export const useProductStore = defineStore("product", {

    state: () => ({
      'name' : 'this is for Product'
    })
  });