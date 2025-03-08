<template>
  <div class="blog-container" :style="lightEffect">
    <div class="blog-content">
      <h1 class="blog-title">{{ blogData.blogTitle }}</h1>
      <p class="blog-meta">
        创建时间: {{ blogData.blogCreateTime }} | 更新时间: {{ blogData.blogUpdateTime }}
      </p>
      <div class="blog-body">{{ blogData.blogContent }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogData: JSON.parse(this.$route.params.row),
      mouseX: 0,
      mouseY: 0,
    };
  },
  computed: {
    lightEffect() {
      const lightX = (this.mouseX / window.innerWidth) * 100;
      const lightY = (this.mouseY / window.innerHeight) * 100;
      return {
        background: `radial-gradient(circle at ${lightX}% ${lightY}%, #ffecd2, #fcb69f)`,
      };
    },
  },
  mounted() {
    window.addEventListener('mousemove', this.updateMousePosition);
  },
  beforeDestroy() {
    window.removeEventListener('mousemove', this.updateMousePosition);
  },
  methods: {
    updateMousePosition(event) {
      this.mouseX = event.clientX;
      this.mouseY = event.clientY;
    },
  },
};
</script>

<style scoped>
.blog-container {
  min-height: 100vh;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.3s ease;
}

.blog-content {
  max-width: 800px;
  width: 100%;
  background: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.blog-content:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.blog-title {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 10px;
  text-align: center;
}

.blog-meta {
  font-size: 0.9rem;
  color: #666;
  text-align: center;
  margin-bottom: 20px;
}

.blog-body {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #444;
}

@media (max-width: 768px) {
  .blog-title {
    font-size: 2rem;
  }

  .blog-body {
    font-size: 1rem;
  }
}
</style>