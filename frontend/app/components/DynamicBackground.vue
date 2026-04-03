<template>
  <canvas ref="canvasRef" class="dynamic-bg" aria-hidden="true" />
</template>

<script setup lang="ts">
const canvasRef = ref<HTMLCanvasElement | null>(null)

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  alpha: number
  alphaDir: number
  color: string
}

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  if (!ctx) return

  let animId: number
  const particles: Particle[] = []
  const PARTICLE_COUNT = 80
  const PRIMARY = '99, 102, 241'   // --color-primary in RGB
  const SECONDARY = '148, 163, 184' // --color-text-muted in RGB

  function resize() {
    canvas!.width = canvas!.offsetWidth
    canvas!.height = canvas!.offsetHeight
  }

  function createParticle(): Particle {
    return {
      x: Math.random() * canvas!.width,
      y: Math.random() * canvas!.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.8 + 0.4,
      alpha: Math.random() * 0.5 + 0.1,
      alphaDir: Math.random() > 0.5 ? 1 : -1,
      color: Math.random() > 0.85 ? PRIMARY : SECONDARY
    }
  }

  function initParticles() {
    particles.length = 0
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(createParticle())
    }
  }

  function drawConnections() {
    const MAX_DIST = 130
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x
        const dy = particles[i].y - particles[j].y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < MAX_DIST) {
          const opacity = (1 - dist / MAX_DIST) * 0.15
          ctx!.beginPath()
          ctx!.moveTo(particles[i].x, particles[i].y)
          ctx!.lineTo(particles[j].x, particles[j].y)
          ctx!.strokeStyle = `rgba(${PRIMARY}, ${opacity})`
          ctx!.lineWidth = 0.8
          ctx!.stroke()
        }
      }
    }
  }

  function tick() {
    ctx!.clearRect(0, 0, canvas!.width, canvas!.height)

    drawConnections()

    for (const p of particles) {
      // update
      p.x += p.vx
      p.y += p.vy
      p.alpha += p.alphaDir * 0.003
      if (p.alpha >= 0.6) p.alphaDir = -1
      if (p.alpha <= 0.05) p.alphaDir = 1

      // wrap edges
      if (p.x < -5) p.x = canvas!.width + 5
      if (p.x > canvas!.width + 5) p.x = -5
      if (p.y < -5) p.y = canvas!.height + 5
      if (p.y > canvas!.height + 5) p.y = -5

      // draw
      ctx!.beginPath()
      ctx!.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
      ctx!.fillStyle = `rgba(${p.color}, ${p.alpha})`
      ctx!.fill()
    }

    animId = requestAnimationFrame(tick)
  }

  resize()
  initParticles()
  tick()

  const ro = new ResizeObserver(() => {
    resize()
    initParticles()
  })
  ro.observe(canvas)

  onUnmounted(() => {
    cancelAnimationFrame(animId)
    ro.disconnect()
  })
})
</script>

<style scoped>
.dynamic-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}
</style>
