<template>
  <div>
    <div class="page-header">
      <div class="container">
        <h1 class="page-header__title">或许</h1>
        <p class="page-header__subtitle about-subtitle--large">
          将谓偷闲学少年
        </p>
        <p class="page-header__subtitle about-subtitle--large">
          但
        </p>
        <p class="page-header__subtitle about-subtitle--Bold">
          谁又不曾是少年
        </p>
      </div>
    </div>

    <section class="about-section">
      <div class="container">
        <h2 class="section__title">我们的目标</h2>
        <p>
          我们相信：网站应该让人感到快乐
        </p>
        <p>
          快乐不能构筑现实，但现实是为了更快乐的生活
        </p>
        <p>
          We believe that websites should make people happy.Happiness cannot construct reality, but reality is for a happier life
        </p>

        <h2 class="section__title" style="margin-top: 3rem;">我们的团队</h2>
        <div class="team-grid">
          <div v-for="member in team" :key="member.name" class="team-card">
            <div class="team-card__avatar">{{ member.avatar }}</div>
            <div class="team-card__name">{{ member.name }}</div>
            <div class="team-card__role">{{ member.role }}</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const team = [
  { avatar: '👨‍💻', name: 'Clearders', role: '全栈前端工程师' },
  { avatar: '🧑‍🎨', name: 'EpsilonHunter', role: '全栈后端工程师' },
]

useSeoMeta({
  title: 'About – DevBit Tech',
  description: 'Learn about the team and mission behind DevBit Tech.'
})
</script>

<style scoped>
.about-subtitle--large {
  font-size: 1.35rem;
}
.about-subtitle--Bold {
  font-size: 1.55rem;
  font-weight: bold;
}
</style>
