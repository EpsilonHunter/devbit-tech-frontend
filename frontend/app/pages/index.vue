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
