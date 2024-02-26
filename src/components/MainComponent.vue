<template>
    <v-container>
        <v-col>
            <v-row>
                <MenuTwo />
                <TitleOne />
            </v-row>
            <v-row>
                <MenuOne />
            </v-row>
            <v-row>
                <ListePersonnel />
            </v-row>
            <v-row>
                <NextButton />
            </v-row>
        </v-col>
    </v-container>
</template>

<script setup>
import TitleOne from './TitleOne.vue';
import MenuOne from './MenuOne.vue';
import MenuTwo from './MenuTwo.vue';
import ListePersonnel from './ListePersonnel.vue';
import NextButton from './NextButton.vue';
//
</script>
