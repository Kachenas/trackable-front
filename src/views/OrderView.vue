<script setup>
import Order from "@/components/Orders/OrderComponent.vue"
</script>
<template>
  <Order />
  <v-form>
    <v-container>
      <v-row>
          <v-text-field
            label="Order Items"
            prepend-icon="mdi-vuetify"
            variant="solo-filled"
          ></v-text-field>
      </v-row>
      <v-row>
          <v-text-field
            label="Quantity"
            prepend-icon="mdi-vuetify"
            variant="solo-filled"
          ></v-text-field>
      </v-row>
      <v-row>
          <v-text-field
            label="Price"
            prepend-icon="mdi-vuetify"
            variant="solo-filled"
          ></v-text-field>
      </v-row>
      <v-row>
          <v-text-field
            label="Discount"
            prepend-icon="mdi-vuetify"
            variant="solo-filled"
          ></v-text-field>
      </v-row>
      <v-row>
          <v-text-field
            label="Total"
            prepend-icon="mdi-vuetify"
            variant="solo-filled"
          ></v-text-field>
      </v-row>
      <v-row>
          <v-text-field
            label="Date"
            prepend-icon="mdi-vuetify"
            variant="solo-filled"
          ></v-text-field>
      </v-row>
      <v-row>
        <v-btn type="submit" block class="mt-2">Submit</v-btn>
      </v-row>
    </v-container>
  </v-form>
  </template>
  
  <style>
  @media (min-width: 1024px) {
    .order {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>
  