<template>
    <v-container>
        <!-- Utilisation du composant v-list de Vuetify pour la liste scrollable -->
        <v-list style="overflow-y: auto;" class="mx-auto" cols="12">
            <!-- Utilisation de v-for pour itérer à travers les éléments de la liste -->
            <v-list-item-group v-for="(item, index) in itemList" :key="index" style="border: 5px; border-color: #FF6B40;">
                <v-list-item >
                        <v-row class="align-center">
                            <v-list-item-title><p>{{ item.name }}</p></v-list-item-title>
                            <v-checkbox v-model="enabled"></v-checkbox>
                        </v-row>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-container>
</template>
  
<script>
export default {
    data() {
        return {
            // Liste d'éléments avec noms et état de la checkbox
            itemList: [
                { name: 'Aaron James', checked: true },
                { name: 'Amanda Wallace', checked: true },
                { name: 'Angela Danger', checked: true },
                { name: 'Abella White', checked: true },
                { name: 'Darlène Robertson', checked: true },
                { name: 'Fred Davis', checked: true },


                // Ajoutez d'autres éléments au besoin
            ],
        };
    },
};
</script>
  