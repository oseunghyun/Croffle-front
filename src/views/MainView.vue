<template>
  <div>
    <main-header></main-header>
    <searchbar-component></searchbar-component>
    <div class="cafe-view">
      <router-view></router-view>
      <cafe-menu-component></cafe-menu-component>
      <button @click="isModalActive = true" class="btn--primary">제보하기 +</button>
      <button class="btn--border">리뷰 작성하기 +</button>
      <modal-component v-if="isModalActive">
        <modal-content @close-modal="isModalActive = false" />
      </modal-component>
    </div>
    
  </div>
    

</template>

<script>
import MainHeader from '@/components/MainHeader.vue';
import SearchbarComponent from '../components/Main/SearchbarComponent.vue';
import CafeMenuComponent from '../components/Cafe/CafeMenuComponent.vue';
import ModalComponent from '../components/Modal/ModalComponent.vue';
import ModalContent from '../components/Modal/ModalContent.vue';


export default {
  components: { MainHeader, SearchbarComponent, CafeMenuComponent, ModalComponent, ModalContent },
  data() {
    return {
      page: 'main',
      isModalActive: false,
    }
  },
}
</script>

<style>

</style>