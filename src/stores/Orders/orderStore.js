import { defineStore } from 'pinia'

export const useOrderStore = defineStore("order", {

    state: () => ({
      'name' : 'this is for order'
    })

  });