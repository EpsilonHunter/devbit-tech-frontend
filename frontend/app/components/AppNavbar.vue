<template>
  <nav class="navbar">
    <div class="container">
      <NuxtLink to="/" class="navbar__brand">
        <span>Dev</span>Bit Tech
      </NuxtLink>
      <ul class="navbar__links">
        <li><NuxtLink to="/">首页</NuxtLink></li>
        <li><NuxtLink to="/forum">论坛</NuxtLink></li>
        <li><NuxtLink to="/games">游戏</NuxtLink></li>
        <li><NuxtLink to="/leaderboard">排行榜</NuxtLink></li>
        <li><NuxtLink to="/about">团队介绍</NuxtLink></li>
        <template v-if="isAuthenticated">
          <li class="navbar__user">{{ user?.name }}</li>
          <li><button class="btn btn--outline navbar__logout" @click="logout">Logout</button></li>
        </template>
        <template v-else>
          <li><NuxtLink to="/login" class="btn btn--outline navbar__cta">Login</NuxtLink></li>
          <li><NuxtLink to="/register" class="btn btn--primary navbar__cta">Register</NuxtLink></li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
const { isAuthenticated, user, logout } = useAuth()
</script>
