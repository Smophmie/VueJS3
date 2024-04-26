<template>

  <!-- On affiche le template HelloWorld et on lui passe la variable user -->
  <HelloWorld>
    <!-- Slots content -->
    <template v-slot:name>
      <p>{{ user.name }}</p>
    </template>

    <template v-slot:age>
      <!-- Utilisation d'une classe de style sous condition d'âge -->
      <p
        :class="[user.age>=18 ? 'text-green': 'text-red']"
      >{{ user.age }}</p>
    </template>
    
  </HelloWorld>

  <!-- Affichage de la div selon des conditions d'âge -->
  <div
    v-if="user.age>=18"
    >
    Vous êtes majeur.
  </div>

  <div
    v-else
    >
    Vous êtes mineur.
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

  .text-red {
    color:indianred;
  }

  .text-green{
    color:green;
  }

</style>
