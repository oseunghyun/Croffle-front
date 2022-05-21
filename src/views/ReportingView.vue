<template>
  <div>
    <main-header></main-header>
    <header class="page-title">
      {{ header }}
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue';
export default {
  components: { MainHeader },
  data() {
    return {
      header: '메뉴 추가 제보하기'
    }
  },
}
</script>

<style>

</style>