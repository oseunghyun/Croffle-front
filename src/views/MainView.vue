<template>
  <div>
    <main-header></main-header>
    <searchbar-component></searchbar-component>
    <div class="cafe-view">
      <router-view></router-view>
      <cafe-menu-component></cafe-menu-component>
      <button class="btn--primary">제보하기 +</button>
      <button class="btn--border">리뷰 작성하기 +</button>
    </div>
  </div>
    

</template>

<script>
import MainHeader from '@/components/MainHeader.vue';
import SearchbarComponent from '../components/Main/SearchbarComponent.vue';
import CafeMenuComponent from '../components/Cafe/CafeMenuComponent.vue';


export default {
  components: { MainHeader, SearchbarComponent, CafeMenuComponent },
  data() {
    return {
      page: 'main'
    }
  },
}
</script>

<style>

</style>