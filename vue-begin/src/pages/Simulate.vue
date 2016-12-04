<template>
  <div>
    <div class="simulate-box black" v-for="value in simulateLists">
      <div class="flex">
        <div class="simulate-time">
          <p>{{ value.time }}</p>
        </div>
        <div class="flex-item simulate-cont">
          <p class="size17 ellipsis">{{ value.name }}</p>
          <p class="mt15"><span class="light-gray">买入:</span><span class="ml5">{{ value.stockCode }}</span></p>
          <p class="mt10"><span class="light-gray">价格:</span><span class="ml5">{{ value.unitPrice }}</span></p>
          <p class="mt10"><span class="light-gray">股数:</span><span class="ml5">{{ value.stockNum }}</span></p>
          <p class="mt10"><span class="light-gray">交易金额:</span><span class="ml5">{{ value.dealPrice }}</span></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'simulate',
  computed: {
    ...mapGetters([
      'simulateLists'
    ])
  },
  mounted () {
    this.$store.dispatch('getSimulates')
  }
}

</script>
