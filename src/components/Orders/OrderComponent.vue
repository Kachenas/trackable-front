<script setup>
import { useOrderStore } from "@/stores/Orders/orderStore";
const store = useOrderStore();  
</script>
<template>
    <div>
        <h1>{{ store.name }}</h1>
    </div>
</template>