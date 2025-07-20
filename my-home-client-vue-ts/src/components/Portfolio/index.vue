<!-- PortfolioGrid.vue -->
<template>
  <section class="portfolio">
    <h1 class="title">My Works</h1>

    <div class="grid">
      <article
        v-for="(p, idx) in projects"
        :key="p.name"
        class="card"
        @mouseenter="startConfetti($event.target, idx)"
        @mouseleave="stopConfetti(idx)"
      >
        <!-- 卡片内容容器 -->
        <div class="card-content">
          <h2>{{ p.name }}</h2>
          <div class="techs">
            <span v-for="t in p.techs" :key="t" class="tech">{{ t }}</span>
          </div>
          <div class="links">
            <a :href="p.github" target="_blank" class="link">
              <svg viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.796 24 17.302 24 12 24 5.373 18.627 0 12 0z"/></svg>
              GitHub
            </a>
            <a :href="p.demo" target="_blank" class="link">
              <svg viewBox="0 0 24 24"><path d="M12 0L1.604 6v12L12 24l10.396-6V6L12 0zm0 2.178L20.822 7.5 12 12.822 3.178 7.5 12 2.178zM2.178 8.5L11 13.822v10.356L2.178 18.5V8.5zm21.644 0v10L13 24.178V13.822l8.822-5.322z"/></svg>
              Live Demo
            </a>
          </div>
        </div>

        <!-- 彩带画布 -->
        <canvas
          :ref="(el) => (canvases[idx] = el)"
          class="confetti"
        />
      </article>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref, onBeforeUnmount } from 'vue'

// 项目数据
const projects = reactive([
  {
    name: 'Vue3 Admin',
    techs: ['Vue3', 'Vite', 'Pinia', 'TypeScript'],
    github: 'https://github.com/you/vue3-admin',
    demo: 'https://you.github.io/vue3-admin'
  },
  {
    name: 'React Dashboard',
    techs: ['React', 'Tailwind', 'Recoil', 'Vercel'],
    github: 'https://github.com/you/react-dash',
    demo: 'https://react-dash.vercel.app'
  },
  {
    name: 'Node CLI',
    techs: ['Node', 'Commander', 'Chalk', 'Inquirer'],
    github: 'https://github.com/you/node-cli',
    demo: 'https://www.npmjs.com/package/you-cli'
  }
])

// 彩带粒子系统
const canvases = ref([])
const timers = ref([])

const colors = [
  '255, 99, 132',
  '54, 162, 235',
  '75, 192, 192',
  '255, 159, 64',
  '153, 102, 255',
  '255, 205, 86'
]

class Particle {
  constructor(canvas) {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d')
    this.reset()
  }
  
  reset() {
    const edge = Math.floor(Math.random() * 4) // 0: top, 1: right, 2: bottom, 3: left
    const spread = Math.random() * 0.6 + 0.2
    
    switch(edge) {
      case 0: // 上边缘
        this.x = this.canvas.width * spread
        this.y = 0
        this.vx = (Math.random() - 0.5) * 0.8
        this.vy = Math.random() * 0.5 + 0.3
        break
      case 1: // 右边缘
        this.x = this.canvas.width
        this.y = this.canvas.height * spread
        this.vx = -(Math.random() * 0.5 + 0.3)
        this.vy = (Math.random() - 0.5) * 0.8
        break
      case 2: // 下边缘
        this.x = this.canvas.width * spread
        this.y = this.canvas.height
        this.vx = (Math.random() - 0.5) * 0.8
        this.vy = -(Math.random() * 0.5 + 0.3)
        break
      case 3: // 左边缘
        this.x = 0
        this.y = this.canvas.height * spread
        this.vx = Math.random() * 0.5 + 0.3
        this.vy = (Math.random() - 0.5) * 0.8
        break
    }
    
    this.size = Math.random() * 2 + 1
    this.color = colors[Math.floor(Math.random() * colors.length)]
    this.opacity = 0
    this.fadeIn = Math.random() * 0.03 + 0.01
    this.fadeOut = Math.random() * 0.003 + 0.002
    this.life = 100 + Math.random() * 50
  }
  
  update() {
    this.x += this.vx
    this.y += this.vy
    
    if (this.opacity < 1 && this.life > 30) {
      this.opacity += this.fadeIn
    } else {
      this.opacity -= this.fadeOut
    }
    
    this.life--
    
    if (this.life <= 0 || 
        this.x < -20 || this.x > this.canvas.width + 20 || 
        this.y < -20 || this.y > this.canvas.height + 20) {
      this.reset()
    }
  }
  
  draw() {
    this.ctx.save()
    this.ctx.globalAlpha = this.opacity
    this.ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`
    this.ctx.beginPath()
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    this.ctx.fill()
    this.ctx.restore()
  }
}

function startConfetti(card, idx) {
  const canvas = canvases.value[idx]
  if (!canvas) return
  
  const rect = card.getBoundingClientRect()
  canvas.width = rect.width
  canvas.height = rect.height
  canvas.style.display = 'block'

  const particles = Array.from({ length: 20 }, () => new Particle(canvas))

  function animate() {
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
    
    particles.forEach(p => {
      p.update()
      p.draw()
    })
    timers.value[idx] = requestAnimationFrame(animate)
  }
  animate()
}

function stopConfetti(idx) {
  cancelAnimationFrame(timers.value[idx])
  const canvas = canvases.value[idx]
  if (canvas) {
    const fadeOut = () => {
      const ctx = canvas.getContext('2d')
      ctx.fillStyle = 'rgba(255, 255, 255, 0.2)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      if (ctx.getImageData(0, 0, 1, 1).data[3] > 10) {
        requestAnimationFrame(fadeOut)
      } else {
        canvas.style.display = 'none'
        ctx.clearRect(0, 0, canvas.width, canvas.height)
      }
    }
    fadeOut()
  }
}

onBeforeUnmount(() => {
  timers.value.forEach(clearTimeout)
})
</script>

<style scoped>
.portfolio {
  padding: 4rem 2rem;
  min-height: 100vh;
  font-family: 'Segoe UI', sans-serif;
}

.title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #333;
}

.grid {
  display: grid;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
}

.card {
  position: relative;
  height: 240px;
  cursor: pointer;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden; /* 确保内容不溢出 */
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
}

.card-content {
  position: relative;
  z-index: 2; /* 确保内容在彩带之上 */
  height: 100%;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card-content h2 {
  margin: 0 0 0.8rem;
  font-size: 1.6rem;
  color: #222;
  text-align: center;
}

.techs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.tech {
  background: rgba(245, 245, 220, 0.6);
  color: #333;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  font-size: 0.8rem;
}

.links {
  display: flex;
  gap: 1.5rem;
}

.link {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: #1976d2;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.2s, color 0.2s;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
}

.link:hover {
  transform: translateY(-2px);
  color: #0d47a1;
  background: rgba(25, 118, 210, 0.1);
}

.link svg {
  width: 18px;
  height: 18px;
  fill: currentColor;
}

.confetti {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  display: none;
  z-index: 1;
  border-radius: 12px;
}
</style>