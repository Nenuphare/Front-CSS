<template>
    <v-container>
        <v-row>
            <v-col >
                <Date/>
                <TitleOne />
            </v-col>

            <!-- MenuTwo prend 3/12 de la largeur (25%) pour les écrans moyens et plus grands, et 12/12 (100%) pour les écrans plus petits -->
            <v-col style="display: flex; flex-direction: row; align-items: flex-end;">
                <MenuTwo />
            </v-col>
        </v-row>

        <v-row>
            <!-- MenuOne prend toute la largeur disponible -->
            <v-col>
                <MenuOne />
            </v-col>
        </v-row>

        <v-row>
            <!-- ListePersonnel prend toute la largeur disponible -->
            <v-col>
                <ListePersonnel />
            </v-col>
        </v-row>

        <v-row>
            <!-- NextButton prend toute la largeur disponible -->
            <v-col class="mt-4 mb-4"> <!-- Ajout de margin-top (mt) et margin-bottom (mb) pour ajuster l'espace -->
                <NextButtonThree />
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import TitleOne from './TitleOne.vue';
import MenuOne from './MenuOne.vue';
import MenuTwo from './MenuTwo.vue';
import ListePersonnel from './ListePersonnel.vue';
import NextButtonThree from './NextButtonThree.vue';
import Date from './Date.vue';

</script>
