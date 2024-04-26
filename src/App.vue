<template>

  <HelloWorld :user="user"/>
  <input type="text" v-model="user.name">
  <input type="text" v-model="user.age">

</template>

<script setup>

  import HelloWorld from "./components/HelloWorld.vue";

  import {ref} from "vue";

  const user = ref({
    name: "Sophie",
    age: 28,
  });


</script>

<style scoped>
</style>
