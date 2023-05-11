<script setup>
import { usePaymentStore } from "@/stores/Payments/paymentStore";

const store = usePaymentStore(); 
</script>
<template>
    <div>
        <h1>{{ store.name }}</h1>
    </div>
</template>