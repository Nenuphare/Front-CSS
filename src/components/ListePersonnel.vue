<template>
    <v-container>
        <!-- Utilisation du composant v-list de Vuetify pour la liste scrollable -->
        <v-list style="overflow-y: auto;" class="mx-auto" cols="12">
            <!-- Utilisation de v-for pour itérer à travers les éléments de la liste -->
            <v-list-item-group v-for="(item, index) in itemList" :key="index">
                <!-- Chaque élément de la liste avec checkbox et nom -->
                <v-list-item>
                    <v-list-item-action>
                        <v-list-item-title>{{ item.name }}</v-list-item-title>
                        <v-checkbox v-model="item.checked" class="mr-3"></v-checkbox>
                    </v-list-item-action>
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
                { name: 'Élément 1', checked: true },
                { name: 'Élément 2', checked: false },
                { name: 'Élément 3', checked: true }
                // Ajoutez d'autres éléments au besoin
            ],
        };
    },
};
</script>
  