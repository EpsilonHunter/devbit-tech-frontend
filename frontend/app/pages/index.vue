<template>
  <div>
    <!-- Hero -->
    <section class="hero">
      <div class="container">
        <p class="hero__badge">Now in Beta</p>
        <h1 class="hero__title">
          Build faster with<br><span>DevBit Tech</span>
        </h1>
        <p class="hero__subtitle">
          Innovative developer tools and software solutions crafted for modern engineering teams.
        </p>
        <div class="hero__actions">
          <NuxtLink to="/about" class="btn btn--primary">Learn More</NuxtLink>
          <a href="https://github.com/Clearders/devbit-tech" target="_blank" rel="noopener" class="btn btn--outline">
            View on GitHub
          </a>
        </div>
      </div>
    </section>

    <!-- Quick Navigation -->
    <section class="section quick-nav-section">
      <div class="container">
        <h2 class="section__title">探索 DevBit Tech</h2>
        <p class="section__subtitle">快速跳转到你感兴趣的板块</p>
        <div class="quick-nav-grid">
          <NuxtLink
            v-for="nav in quickNavItems"
            :key="nav.to"
            :to="nav.to"
            class="quick-nav-card"
          >
            <div class="quick-nav-card__icon">{{ nav.icon }}</div>
            <h3 class="quick-nav-card__title">{{ nav.title }}</h3>
            <p class="quick-nav-card__desc">{{ nav.description }}</p>
            <span class="quick-nav-card__arrow">→</span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="section">
      <div class="container">
        <h2 class="section__title">Why DevBit Tech?</h2>
        <p class="section__subtitle">Everything you need to ship great software, faster.</p>
        <div class="features-grid">
          <div v-for="feature in features" :key="feature.title" class="feature-card">
            <div class="feature-card__icon">{{ feature.icon }}</div>
            <h3 class="feature-card__title">{{ feature.title }}</h3>
            <p class="feature-card__desc">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const quickNavItems = [
  {
    icon: '💬',
    title: '论坛',
    description: '参与技术讨论，分享经验，提问解答。',
    to: '/forum'
  },
  {
    icon: '🎮',
    title: '游戏',
    description: '探索我们精心挑选的开发者小游戏。',
    to: '/games'
  },
  {
    icon: '🏆',
    title: '排行榜',
    description: '查看社区贡献者与竞技活动排名。',
    to: '/leaderboard'
  },
  {
    icon: '👥',
    title: '团队介绍',
    description: '了解 DevBit Tech 背后的核心团队。',
    to: '/about'
  }
]

const features = [
  {
    icon: '⚡',
    title: 'Lightning Fast',
    description: 'Optimized for performance from day one. Ship blazing-fast experiences your users will love.'
  },
  {
    icon: '🛠️',
    title: 'Developer Friendly',
    description: 'Clean APIs and great DX. Spend more time building features, less time fighting tooling.'
  },
  {
    icon: '🔒',
    title: 'Secure by Default',
    description: 'Security best practices built in so you can focus on what matters — your product.'
  },
  {
    icon: '🌐',
    title: 'Globally Scalable',
    description: 'Designed to scale from a side project to millions of users without rewrites.'
  }
]

useSeoMeta({
  title: 'DevBit Tech – Home',
  description: 'Innovative developer tools and software solutions for modern engineering teams.'
})
</script>
