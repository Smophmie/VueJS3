<template>
  
  <nav class="flex-nav">
    <RouterLink to="/">Accueil</RouterLink>
    <RouterLink to="/about">A propos</RouterLink>
  </nav>

  <RouterView/>

</template>

<script setup>


</script>

<style scoped>

.flex-nav {
  display: flex;
  flex-direction: row;
  gap: 15px;
}

a {
  text-decoration: none;
  color: darkolivegreen;
  font-weight: 600;
  font-size: large;
}

</style>
