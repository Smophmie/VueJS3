<template>

  <!-- On affiche le template HelloWorld et on lui passe la variable user -->
  <HelloWorld :user="user"/>

  <!-- Affichage de la div à condition que l'âge saisi soit supérieur à 15 -->
  <div
    v-if="user.age>15"
    >
    Mon âge
  </div>

  <input type="text" v-model="user.name">
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

  display();

</script>

<style scoped>
</style>
