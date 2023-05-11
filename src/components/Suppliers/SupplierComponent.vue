<script setup>
import { useSupplierStore } from "@/stores/Suppliers/supplierStore";

const store = useSupplierStore();  
</script>
<template>
    <div>
        <h1>{{ store.name }}</h1>
    </div>
</template>