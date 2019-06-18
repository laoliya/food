<template>
  <div class="home">
    <navTop></navTop>
    <!-- 轮播图 -->
    <banner></banner>
    <indexMeals></indexMeals>
    <indexFire></indexFire>
    <indexDiary></indexDiary>
    <indexStar></indexStar>
    <indexClass></indexClass>
    <bottom></bottom>
  </div>
</template>

<script>
//引入需要使用的子组件
import banner from '@/components/home/banner.vue'
import indexClass from '@/components/home/indexClass.vue'
import indexStar from '@/components/home/indexStar.vue'
import indexFire from '@/components/home/indexFire.vue'
import navTop from '@/components/navTop.vue'
import indexMeals from '@/components/home/indexMeals.vue'
import indexDiary from '@/components/home/indexDiary.vue'
import bottom from '@/components/bottom.vue'


export default {
  name: 'home',
  components: {banner,indexClass,indexStar,indexFire,navTop,indexMeals,indexDiary,bottom}
}
</script>

