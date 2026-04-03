<script setup lang="ts">
import AppNavbar from "./components/AppNavbar.vue";
import AppFooter from "./components/AppFooter.vue";
</script>
<template>
  <div>
    <NuxtRouteAnnouncer />
    <AppNavbar />
    <main>
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>
