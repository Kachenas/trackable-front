<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
 <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/orders">Orders</RouterLink>
        <RouterLink to="/products">Products</RouterLink>
        <RouterLink to="/suppliers">Suppliers</RouterLink>
        <RouterLink to="/payments">Payments</RouterLink>
        <RouterLink to="/counters">Counter</RouterLink>
 </nav>
 <RouterView />
</template>

<style scoped>

</style>
