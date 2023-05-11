<script setup>
import Product from "@/components/Products/ProductComponent.vue"
</script>
<template>
  <Product />
  <v-form>
    <v-container>
      <v-row>
          <v-text-field
            label="Product Name"
            prepend-icon="mdi-vuetify"
            variant="solo-filled"
          ></v-text-field>
      </v-row>
      <v-row>
          <v-text-field
            label="Product Price"
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
            label="Status"
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
  .product {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
