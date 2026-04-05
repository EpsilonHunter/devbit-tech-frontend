<template>
  <nav class="navbar">
    <div class="container">
      <NuxtLink to="/" class="navbar__brand">
        <span>Dev</span>Bit Tech
      </NuxtLink>
      <ul class="navbar__links">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <template v-if="isAuthenticated">
          <li><span class="navbar__user">{{ user?.name }}</span></li>
          <li><button class="btn btn--outline navbar__logout" @click="logout">Logout</button></li>
        </template>
        <template v-else>
          <li><NuxtLink to="/login">Login</NuxtLink></li>
          <li><NuxtLink to="/register" class="btn btn--primary navbar__cta">Register</NuxtLink></li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
const { isAuthenticated, user, logout } = useAuth()
</script>
