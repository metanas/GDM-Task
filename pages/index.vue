<template>
  <div class="home-page pt-12">
    <client-only>
      <GdmTable
        :header="header"
        :items="items"
        :order-by="orderBy"
        @order="setOrder"
      ></GdmTable>
    </client-only>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { groq } from '@nuxtjs/sanity'

export default Vue.extend({
  name: 'IndexPage',
  data: () => {
    return {
      items: [],
      header: [
        { key: 'name', value: 'Name' },
        { key: 'rating', value: 'OVR' },
        { key: 'position', value: 'POS' },
        { key: 'position', value: 'Type' },
        { key: 'statistics.pace.average', value: 'PAC' },
        { key: 'statistics.shooting.average', value: 'SHO' },
        { key: 'statistics.passing.average', value: 'PAS' },
        { key: 'statistics.dribbling.average', value: 'DRI' },
        { key: 'statistics.defense.average', value: 'DEF' },
        { key: 'statistics.physical.average', value: 'PHY' },
        { key: 'workRatesAttacking', value: 'WR' },
      ],
      orderBy: {},
    }
  },
  async fetch() {
    const order = Object.entries(this.orderBy)
      .map(([key, value]) => (value ? `order(${key} ${value})` : undefined))
      .filter((ord) => !!ord)
      .join(' | ')
    let query = groq`*[_type == "fifaCard"]`
    if (order) query += ' | ' + order
    this.items = await this.$sanity.fetch(query)
  },
  methods: {
    setOrder(order: Record<string, string>) {
      this.orderBy = order
      this.$fetch()
    },
  },
})
</script>
