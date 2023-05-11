<script setup>
import Payment from "@/components/Payments/PaymentComponent.vue"
</script>
<template>
   <Payment />
    <v-form>
      <v-container>
        <v-row>
            <v-text-field
              label="Payment Method"
              prepend-icon="mdi-vuetify"
              variant="solo-filled"
            ></v-text-field>
        </v-row>
        <v-row>
            <v-text-field
              label="Account Number"
              prepend-icon="mdi-vuetify"
              variant="solo-filled"
            ></v-text-field>
        </v-row>
        <v-row>
            <v-text-field
              label="Expiry Date"
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
      .payment {
        min-height: 100vh;
        display: flex;
        align-items: center;
      }
    }
    </style>
    