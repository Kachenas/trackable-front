<script setup>
import { useCounterStore } from "@/stores/counter";

const store = useCounterStore();  
</script>
<template>
    <div>
        <v-btn block class="mt-2" @click="store.increment">increment</v-btn>
        Count Value : {{ store.count }}
        <v-btn block class="mt-2" @click="store.decrement">decrement</v-btn>
    </div>
</template>