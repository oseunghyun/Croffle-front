<template>
  <div>
    <main-header></main-header>
    <searchbar-component></searchbar-component>
    <router-view></router-view>
  </div>

</template>

<script>
import MainHeader from '@/components/MainHeader.vue';
import SearchbarComponent from '../components/Main/SearchbarComponent.vue';


export default {
  components: { MainHeader, SearchbarComponent },
  data() {
    return {
      page: 'main'
    }
  },
}
</script>

<style>

</style>