<script setup>
import { useProductStore } from "@/stores/Products/productStore";

const store = useProductStore();  
</script>
<template>
    <div>
        <h1>{{ store.name }}</h1>
    </div>
</template>