<template>
  <div class="default">
    <div class="h-16 bg-black">
      <div class="container h-full mx-auto flex justify-between items-center">
        <div class="hamburger h-100">
          <img :src="menu" alt="menu icon" />
        </div>
        <img :src="logo" alt="RS-Logo" class="h-6 block" />
      </div>
    </div>
    <Nuxt></Nuxt>
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

<style lang="scss"></style>
