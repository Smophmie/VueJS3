<template>

  <!-- On affiche le template HelloWorld et on lui passe la variable user -->
  <HelloWorld :user="user"/>

  <!-- Affichage de la div selon des conditions d'âge -->
  <div
    v-if="user.age>15"
    >
    Vous avez plus de 15 ans.
  </div>

  <div
    v-else
    >
    Vous avez 15 ans ou moins.
  </div>

  <!-- Evènement à la modification de l'input : on lance la fonction display -->
  <input type="text" v-model="user.name" @input="display">
  <input type="text" v-model="user.age">

</template>

<script setup>

  // On importe le template
  import HelloWorld from "./components/HelloWorld.vue";

  import {reactive} from "vue";

  // On crée un objet
  const user = reactive({
    name: "Sophie",
    age: 28,
  });

  const display = () => {
    console.log(user);
  }


</script>

<style scoped>
</style>
