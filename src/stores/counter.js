import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useAuthenticationStore } from "@/stores/Authentication/authenticationStore";

// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

//   return { count, doubleCount, increment }
// })

export const useCounterStore = defineStore("counter", {

  state: () => ({
    'count' : 0
  }),
  getters: {
    countDigitLength: (state) => state.count.toString.length,
  },
  actions: {
    increment() {
      //const authStore = useAuthenticationStore();
      //if (!authStore.is_authenticated) return;
      // if(authStore.is_authenticated) {
      //   this.count++;
      // }
      if (!this.isAuthenticated()) return;
      this.count++;
    },
    decrement() {
      if (!this.isAuthenticated()) return;
      this.count--;
      //const authStore = useAuthenticationStore();
      //if (!authStore.is_authenticated) return;
      // if(authStore.is_authenticated) {
      //   this.count--;
      // }
    },
    isAuthenticated() {
      const authStore = useAuthenticationStore();
      return authStore.is_authenticated;
    }
  }
});