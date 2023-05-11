<script setup>
import Supplier from "@/components/Suppliers/SupplierComponent.vue"
</script>
<template>
  <Supplier />
    <v-form>
    <v-container>
      <v-row>
          <v-text-field
            label="Supplier Name"
            prepend-icon="mdi-vuetify"
            variant="solo-filled"
          ></v-text-field>
      </v-row>
      <v-row>
          <v-text-field
            label="Address"
            prepend-icon="mdi-vuetify"
            variant="solo-filled"
          ></v-text-field>
      </v-row>
      <v-row>
          <v-text-field
            label="City"
            prepend-icon="mdi-vuetify"
            variant="solo-filled"
          ></v-text-field>
      </v-row>
      <v-row>
          <v-text-field
            label="Country"
            prepend-icon="mdi-vuetify"
            variant="solo-filled"
          ></v-text-field>
      </v-row>
      <v-row>
          <v-text-field
            label="Zip Code"
            prepend-icon="mdi-vuetify"
            variant="solo-filled"
          ></v-text-field>
      </v-row>
      <v-row>
          <v-text-field
            label="Contact Name"
            prepend-icon="mdi-vuetify"
            variant="solo-filled"
          ></v-text-field>
      </v-row>
      <v-row>
          <v-text-field
            label="Contact No"
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
    .supplier {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>
  