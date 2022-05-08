<template>
  <div>
    <main-header></main-header>
    <searchbar-component></searchbar-component>
    <main-component></main-component>
  </div>

</template>

<script>
import MainHeader from '@/components/MainHeader.vue';
import SearchbarComponent from '../components/Main/SearchbarComponent.vue';
import MainComponent from '@/components/Main/MainComponent.vue';

export default {
  components: { MainHeader, SearchbarComponent, MainComponent },
}
</script>

<style>

</style>