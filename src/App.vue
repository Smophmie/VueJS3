<template>
  <HelloWorld :sub-title="subTitle"/>
  <input type="text" v-model="subTitle">
</template>

<script setup>
  import HelloWorld from "./components/HelloWorld.vue";

  const subTitle = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
</script>

<style scoped>
</style>
