<template>

  <p>{{ sentence }}</p>
            
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
  <div>
      <p>
          Modifier le user :
      </p>
      <div class="flex-input">
          <input type="text" v-model="user.name" @input="display">
          <input type="text" v-model="user.age" @input="display">
      </div>
  </div>

</template>

<script setup>

  import {computed, watch, ref} from "vue";

  const emit = defineEmits(["updateName"]);

  const name = ref('');

  // On crée une computed ref utilisant les valeurs de age et name même si elles sont modifiées
  const sentence = computed( () => {
    return "Vous êtes connecté.e en tant que " + user.name + " et vous avez " + user.age + " ans.";
  })

  // const name = ref("Sophie");

  // const age = ref(28);

  // On crée une fonction watch qui surveille l'évolution de la variable name et qui retourne sa valeur actuelle et la valeur qu'elle avait auparavant
  // watch(name, (newValue, oldValue) => {
  //   console.log(newValue, oldValue);
  // })

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

.flex-input {
    margin: 5px 0;
    display: flex;
    flex-direction: row;
    gap: 15px;
}

</style>