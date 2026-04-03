<template>
  <div>
    <section class="page-header">
      <div class="container">
        <p class="hero__badge">Coming Soon</p>
        <h1 class="page-header__title">🎮 游戏</h1>
        <p class="page-header__subtitle">
          探索我们精心挑选的开发者小游戏，寓教于乐，提升编程技能。
        </p>
      </div>
    </section>
    <section class="about-section">
      <div class="container">
        <p>游戏板块正在开发中，敬请期待！</p>
        <NuxtLink to="/" class="btn btn--primary" style="margin-top: 1.5rem; display: inline-flex;">← 返回主页</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'DevBit Tech – 游戏',
  description: '探索我们精心挑选的开发者小游戏。'
})
</script>
