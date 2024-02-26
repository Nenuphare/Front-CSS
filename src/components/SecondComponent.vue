<template>
    <v-container>
        <v-row>
            <!-- MenuTwo prend 3/12 de la largeur (25%) pour les écrans moyens et plus grands, et 12/12 (100%) pour les écrans plus petits -->
            <v-col style="display: flex; flex-direction: row; align-items: flex-end;">
                <MenuTwo />
            </v-col>

            <!-- TitleOne prend 9/12 de la largeur (75%) pour les écrans moyens et plus grands, et 12/12 (100%) pour les écrans plus petits -->
            <v-col >
                <TitleOne />
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
                <NextButton />
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import TitleOne from './TitleOne.vue';
import MenuOne from './MenuOne.vue';
import MenuTwo from './MenuTwo.vue';
import ListePersonnel from './ListePersonnel.vue';
import NextButton from './NextButton.vue';

</script>
