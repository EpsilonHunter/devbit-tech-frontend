<script setup lang="ts">
import AppNavbar from "./components/AppNavbar.vue";
import AppFooter from "./components/AppFooter.vue";
import DynamicBackground from "./components/DynamicBackground.vue";
</script>
<template>
  <div class="app-shell">
    <NuxtRouteAnnouncer />
    <div class="app-shell__background" aria-hidden="true">
      <DynamicBackground />
    </div>
    <div class="app-shell__content">
      <AppNavbar />
      <main>
        <NuxtPage />
      </main>
      <AppFooter />
    </div>
  </div>
</template>
