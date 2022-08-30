<template>
  <div id="default">
    <div class="h-16 bg-black">
      <div class="container h-full mx-auto flex justify-between items-center">
        <div class="hamburger">
          <img :src="menu" alt="menu icon" />
        </div>
        <img :src="logo" alt="RS-Logo" class="h-6 block mr-3" />
      </div>
    </div>
    <div class="container mx-auto bg-black wrapper">
      <Nuxt></Nuxt>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import logo from '@/assets/img/RS-logo.png'
import menu from '@/assets/img/menu.svg'

export default Vue.extend({
  name: 'DefaultLayout',
  data: () => {
    return {
      logo,
      menu,
    }
  },
})
</script>

<style lang="scss">
#default {
  @apply h-full;

  .hamburger {
    @apply w-16 h-16 flex justify-center items-center;
    background-color: #161616;
  }

  .wrapper {
    height: calc(100% - 64px);
    padding-bottom: 30px;
  }
}
</style>
