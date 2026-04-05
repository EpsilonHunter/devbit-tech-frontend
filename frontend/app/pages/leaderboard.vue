<template>
  <div>
    <section class="page-header">
      <div class="container">
        <p class="hero__badge">Coming Soon</p>
        <h1 class="page-header__title">🏆 排行榜</h1>
        <p class="page-header__subtitle">
          查看社区贡献者与竞技活动的实时排名。
        </p>
      </div>
    </section>
    <section class="about-section">
      <div class="container">
        <p>排行榜功能正在开发中，敬请期待！</p>
        <NuxtLink to="/" class="btn btn--primary" style="margin-top: 1.5rem; display: inline-flex;">← 返回主页</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'DevBit Tech – 排行榜',
  description: '查看社区贡献者与竞技活动排名。'
})
</script>
