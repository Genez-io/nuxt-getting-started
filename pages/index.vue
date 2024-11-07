<template>
  <div>
    <h1>Welcome to the Home Page</h1>
    <p>This is the home page of the Nuxt project.</p>
  </div>
</template>

<script setup>
// Add any necessary script setup here
</script>

<style scoped>
/* Add any necessary styles here */
</style>

<script>
export default {
  middleware: 'auth',
};
</script>