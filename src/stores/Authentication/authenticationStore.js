import { defineStore } from 'pinia'

// https://www.youtube.com/watch?v=G4H6QOcGKbU

export const useAuthenticationStore = defineStore("authentication", {

    state: () => ({
      'is_authenticated' : false,
      'user': {}
    }),
    getters: {
      fullname: (state) => `${state.user.product_name} ${state.user.product_price}`
        // console.log(state.user);
    },
    actions: {
      logout(){
        this.$patch((state) => {
            (state.is_authenticated = false),
            (state.user = {})
        });
      },
      async login(){
        // this.$reset();
        // const res = await fetch("https://reqres.in/api/users/2");
        // const {data} = await res.json();
        // this.user = data;
        // this.is_authenticated = true;
        const res = await fetch("http://127.0.0.1:8000/api/products/index");
        const data = await res.json();
        //console.log(data.result[0]);
        this.user = data.result[0];
        this.is_authenticated = true;
      }
    }

  });