<template>

  <div class="content" v-html="renderedMarkdown"></div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref, watch } from 'vue';
const route = useRoute();
const id = route.query.id;

// 现在开始请求指定id的文章
import axios from 'axios';
const in_use_base_url = import.meta.env.VITE_IN_USE_BASE_URL;
let blogData = ref('## hello');

// watch(id, (newValue, oldValue) => {
// 获取指定 id 的内容
axios
  .get(`http://${in_use_base_url}:8080/blog/${id}`)
  .then((res) => {
    console.log(res.data);
    blogData.value = res.data;
    console.log(blogData.value.id);
  })
  .catch((err) => {
    console.log(err);
  });
// });

// 开始渲染博客内容
// import { marked } from 'https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js';
const renderedMarkdown = ref(null);

watch(blogData, (newValue, oldValue) => {
  // console.log(`from ${oldValue} to ${newValue}`);
  console.log('curr:', blogData.value.blogContent);
  // let htmlContent = marked(blogData.value.blogContent);
  // console.log(htmlContent);
  // let htmlContent = marked(
  //   '## 1. 使用`对象字面量`创建的所有对象都有相同的原型对象\n\n什么是**对象字面量**呢? '
  // );
  // let htmlContent = marked(
  //   "## 1. 使用`对象字面量`创建的所有对象都有相同的原型对象\n\n什么是**对象字面量**呢? 他是一种形式, 用于创建对象。如:\n\n```js\nlet obj1 = { name: 'jiang' } // 使用对象字面量形式创建的对象:obj1\n```\n\nJS 中,几乎每一个对象都会有一个与他相关联的对象, 这个对象叫做**原型 (prototype) **。\n\n那么上方定义的 obj1 的原型是什么呢？\n\n```js\nconsole.log(Object.getPrototypeOf(obj1))\n// {__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}\n```"
  // );
  // console.log(htmlContent);
  renderedMarkdown.value = blogData.value.blogContent;
  // 等待值更新之后，开始渲染markdown
});
// 注意，数据库中的日志数据必须是html格式才可以。也就是在存入数据库之前就要进行转换

// renderedMarkdown.value = '<h1>new<h1>';
</script>

<style scoped>
.content {
  padding: 0.5em;
  /* 内容溢出才显示滚动条 */
  overflow: auto;
  /* word-wrap: break-word; */
}

/* 基于WebKit内核浏览器（如Chrome和Safari）美化滚动条 */
</style>