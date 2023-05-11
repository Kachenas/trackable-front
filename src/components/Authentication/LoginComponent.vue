<script setup>
// import { storeToRefs } from 'pinia';
import { useAuthenticationStore } from "@/stores/Authentication/authenticationStore";
const store = useAuthenticationStore();  
// const { is_authenticated, user } = storeToRefs(store);
// function logout() {
//     //store.is_authenticated = false; 1st
//     // store.$state = { is_authenticated: false, user: {}}; 2nd
//     store.$patch((state) => {
//         (state.is_authenticated = false),
//         (state.user = {})
//     });
// }

// function login() {
//     // store.$patch((state) => {
//     //     (state.is_authenticated = true),
//     //     (state.user = {'username': "Kachenas",'password': "samplePassword"})
//     // });

//     //if there are many states you can use $reset
//     store.$reset();
// }

</script>
<template>
    <v-form>
      <v-container>
        <v-row>
            <v-text-field
              label="Username"
              prepend-icon="mdi-vuetify"
              variant="solo-filled"
            ></v-text-field>
        </v-row>
        <v-row>
            <v-text-field
              label="Password"
              prepend-icon="mdi-vuetify"
              variant="solo-filled"
              type="password"
            ></v-text-field>
        </v-row>
        <v-row>
          <v-btn block class="mt-2" @click="store.logout" v-if="store.is_authenticated">Logout</v-btn>
          <v-btn block class="mt-2" @click="store.login" v-else>Login</v-btn>
        </v-row>
      </v-container>
    </v-form>
    <div v-if="store.is_authenticated">
        <!-- <h1>Username: {{ store.user.first_name }}</h1>
        <h1>Password {{ store.user.last_name }}</h1> -->
        <h1>Username: {{ store.user.product_name }}</h1>
        <h1>Password {{ store.user.product_price }}</h1>
        <h1>Combine is {{ store.fullname }}</h1>
    </div>
</template>