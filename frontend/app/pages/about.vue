<template>
  <div>
    <div class="page-header">
      <div class="container">
        <h1 class="page-header__title">About DevBit Tech</h1>
        <p class="page-header__subtitle">
          We're a team of passionate engineers building tools that make developers more productive.
        </p>
      </div>
    </div>

    <section class="about-section">
      <div class="container">
        <h2 class="section__title">Our Mission</h2>
        <p>
          DevBit Tech was founded with a simple belief: developer tooling should be a joy to use.
          We're on a mission to reduce friction in the software development lifecycle and help teams
          ship better software faster.
        </p>
        <p>
          From open-source utilities to enterprise-grade platforms, every product we build is driven
          by real developer pain-points and a commitment to quality.
        </p>

        <h2 class="section__title" style="margin-top: 3rem;">The Team</h2>
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
  { avatar: '👩‍💻', name: 'Alice Chen', role: 'Founder & CEO' },
  { avatar: '👨‍💻', name: 'Bob Martinez', role: 'Lead Engineer' },
  { avatar: '🧑‍🎨', name: 'Sam Nguyen', role: 'Design Lead' },
  { avatar: '👩‍🔬', name: 'Eva Müller', role: 'DevRel' }
]

useSeoMeta({
  title: 'About – DevBit Tech',
  description: 'Learn about the team and mission behind DevBit Tech.'
})
</script>
