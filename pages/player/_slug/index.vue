<template>
  <div class="pt-12">
    <client-only>
      <div class="card grid lg:grid-cols-4 grid-cols-1">
        <div class="flex justify-center">
          <img
            class="player-card flex-grow-1"
            :src="playerImage"
            :alt="player.name"
          />
        </div>
        <div class="col-span-3 grid lg:grid-cols-6 grid-cols-3">
          <div
            v-for="([state, stateValues], i) in Object.entries(
              player.statistics
            )"
            :key="i"
            class="flex justify-center"
          >
            <div class="statistic">
              <div
                class="statistic-row statistic-row-head statistic-row__bordered"
              >
                <div class="statistic-title">
                  {{ state.slice(0, 3).toUpperCase() }}
                </div>
                <div class="statistic-avg">{{ stateValues.average }}</div>
              </div>
              <template
                v-for="([key, value], j) in Object.entries(stateValues)"
              >
                <div
                  v-if="key !== 'average'"
                  :key="`${key}-${j}`"
                  class="statistic-row"
                >
                  <div class="statistic-title">{{ key | startCase }}</div>
                  <div class="avg">{{ value }}</div>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </client-only>
    <div class="player-info">
      <div class="flex items-end">
        <h1 class="player-name">{{ player.name }}</h1>
        <nuxt-link to="/" class="view-all">View all cards</nuxt-link>
      </div>
      <div class="flex lg:flex-row flex-col justify-between flex-wrap mt-6">
        <div class="info-title">
          Club
          <div class="info-value">{{ player.club }}</div>
        </div>
        <div class="info-title">
          League
          <div class="info-value">{{ player.league }}</div>
        </div>
        <div class="info-title">
          Nation
          <div class="info-value">{{ player.nation }}</div>
        </div>
        <div class="info-title">
          Strong Foot
          <div class="info-value">{{ player.strongFoot }}</div>
        </div>
        <div class="info-title">
          Age
          <div class="info-value">{{ player.age }}</div>
        </div>
        <div class="info-title">
          Height
          <div class="info-value">{{ player.height }}</div>
        </div>
        <div class="info-title">
          Workrates
          <div class="info-value">
            {{ player.workRatesAttacking }} / {{ player.workRatesDefensive }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { groq } from '@nuxtjs/sanity'
import imageUrlBuilder from '@sanity/image-url'
import startCase from 'lodash.startcase'

export default Vue.extend({
  name: 'PlayerSlug',
  filters: {
    startCase,
  },
  // methods: {
  //   urlFor(source) {
  //     if (this.builder.image) {
  //       console.log(this.builder)
  //       return this.builder.image(source).width(182).url()
  //     }
  //     else
  //       return ""
  //   }
  // },
  async asyncData({ $sanity, params }) {
    const query = groq`*[slug.current == "${params.slug}"][0]`
    const player = await $sanity.fetch(query)
    return { player }
  },
  data: () => {
    return {
      builder: null,
    }
  },
  computed: {
    playerImage() {
      const builder = imageUrlBuilder(this.$sanity.client)
      return builder.image(this.player.cardImage).width(182).url()
    },
  },
})
</script>
<style lang="scss">
.card {
  background: linear-gradient(180deg, #0a0a0a 0%, #161616 52.33%, #0d0d0d 100%);
  border-radius: 12px;
  padding: 34px 16px;
  margin-left: 25px;
  margin-right: 25px;
  margin-bottom: 45px;

  .player-card {
    width: 182px;
    @apply flex justify-center;
    margin-bottom: 12px;
  }

  .statistic {
    margin-top: 16px;
    width: 100px;

    .statistic-row {
      display: flex;
      justify-content: space-between;
      color: #ffffff;
      padding: 4px 0;
      font-size: 10px;

      &.statistic-row-head {
        font-family: 'Manrope-Bold';
        font-weight: 700;
        font-size: 14px;
        line-height: 110%;
        letter-spacing: 0.04em;
      }

      &.statistic-row__bordered {
        border-top: 1px solid white;
        border-bottom: 1px solid white;
      }
    }
  }
}

.player-info {
  margin: 0 46px;
  .player-name {
    font-weight: 700;
    font-size: 36px;
    line-height: 36px;
  }

  .info-title {
    @apply lg:block flex justify-between lg:border-r lg:border-b-0 border-b lg:mr-5 lg:pr-5;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #848282;
    border-color: #44444b;
    padding-bottom: 8px;
    margin-bottom: 17px;

    .info-value {
      @apply lg:mt-4;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: #ffffff;
    }
  }

  .info-title:last-child {
    border: none;
  }

  .view-all {
    @apply truncate;
    margin-left: 12px;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #848282;
    border-bottom: 0.5px dashed #848282;
  }
}
</style>
