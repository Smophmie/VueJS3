<template>
  <HelloWorld :sub-title="subTitle"/>
  <input type="text" v-model="subTitle">
</template>

<script setup>
  import HelloWorld from "./components/HelloWorld.vue";

  import {ref} from "vue";

  const subTitle = ref("Lorem ipsum dolor sit amet consectetur adipisicing elit.");
</script>

<style scoped>
</style>
