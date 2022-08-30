<template>
  <div class="overflow-x-auto">
    <table class="table">
      <thead>
        <tr>
          <th v-for="(head, i) in header" :key="`head-${i}`">
            <div class="header-name">
              {{ head.value
              }}<img
                class="ml-2"
                :src="sortWith(head.key)"
                @click="sort(head.key)"
              />
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in items" :key="`data-${i}`">
          <td>
            <nuxt-link
              class="whitespace-nowrap"
              :to="{ name: 'player-slug', params: { slug: item.slug.current } }"
              >{{ item.name }}</nuxt-link
            >
          </td>
          <td>
            <input
              class="table-input table-input__white"
              type="text"
              :value="item.rating"
              readonly
            />
          </td>
          <td>
            <input
              class="table-input table-input__black"
              type="text"
              :value="item.position"
              readonly
            />
          </td>
          <td>
            <input
              class="table-input table-input__black"
              type="text"
              :value="item.position"
              readonly
            />
          </td>
          <td>
            <input
              class="table-input table-input__black table-input__bordered"
              type="text"
              :value="item.statistics.pace.average"
              readonly
            />
          </td>
          <td>
            <input
              class="table-input table-input__black table-input__bordered"
              type="text"
              :value="item.statistics.shooting.average"
              readonly
            />
          </td>
          <td>
            <input
              class="table-input table-input__black table-input__bordered"
              type="text"
              :value="item.statistics.passing.average"
              readonly
            />
          </td>
          <td>
            <input
              class="table-input table-input__black table-input__bordered"
              type="text"
              :value="item.statistics.dribbling.average"
              readonly
            />
          </td>
          <td>
            <input
              class="table-input table-input__black table-input__bordered"
              type="text"
              :value="item.statistics.defense.average"
              readonly
            />
          </td>
          <td>
            <input
              class="table-input table-input__black table-input__bordered"
              type="text"
              :value="item.statistics.physical.average"
              readonly
            />
          </td>
          <td>
            <input
              class="table-input table-input__black"
              type="text"
              :value="`${item.workRatesAttacking.slice(
                0,
                1
              )} \\ ${item.workRatesDefensive.slice(0, 1)}`"
              readonly
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import sort from '@/assets/img/sort-icon.svg'
import down from '@/assets/img/down-arrow.svg'
import up from '@/assets/img/up-arrow.svg'

export default {
  name: 'GdmTable',
  props: {
    header: {
      type: Array,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    orderBy: {
      type: Object,
      required: true,
    },
  },
  methods: {
    sort(head) {
      const temp = { ...this.orderBy }
      temp[head] = !this.orderBy[head]
        ? 'asc'
        : this.orderBy[head] === 'asc'
        ? 'desc'
        : undefined
      this.$emit('order', temp)
    },
    sortWith(sorted) {
      switch (sorted) {
        case 'asc':
          return up
        case 'desc':
          return down
        default:
          return sort
      }
    },
  },
}
</script>

<style lang="scss">
.table {
  @apply text-white w-full;
  font-size: 12px;
  line-height: 16px;
  border-collapse: collapse;

  th:first-child {
    width: auto;
    font-family: 'Manrope-Light';
    text-align: center;

    .header-name {
      border-right: none;
    }
  }

  th {
    width: 63px;
    height: 44px;
    margin-left: 0.75rem;
  }

  th:last-child {
    .header-name {
      border-right: none;
    }
  }

  .header-name {
    @apply flex items-center justify-center;
    border-right: 1px solid #606060;
  }

  tbody {
    tr {
      background: #101010;
      font-family: Manrope-Bold;
      font-weight: 700;
      font-size: 10px;
      border-bottom: 1px solid #000000;
    }

    td {
      padding: 12px;
      @apply text-center;

      .table-input {
        border-radius: 4px;
        height: 31px;
        width: 46px;
        text-align: center;
        font-size: 12px;

        &.table-input__white {
          color: black;
        }

        &.table-input__black {
          color: white;
          background-color: black;
        }

        &.table-input__bordered {
          border: 1px solid #fff;
        }
      }
    }

    td:last-child {
      width: available;
    }
  }
}
</style>
