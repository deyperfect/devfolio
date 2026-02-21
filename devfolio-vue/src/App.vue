<script setup>
  import Navbar from './components/Navbar.vue';
  import Footer from './components/Footer.vue';
  import Theme from './components/Theme.vue';

</script>

<template>
  <Navbar />
  <router-view />
  <Theme />
  <Footer />
</template>

<style scoped></style>
