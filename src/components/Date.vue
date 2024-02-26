<template>
    <v-col>
        <v-row>
            <div>{{ currentDate }}</div>
        </v-row>
    </v-col>
</template>

<script setup>
const currentDate = new Date().toLocaleDateString();
</script>
