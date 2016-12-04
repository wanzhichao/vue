<template>
  <div>
    <div class="quant-header white ta-c">
      <h1 class="size32">第二届量化大赛</h1>
      <h4 class="size12 mt10">时间：2016年9月1日-9月31日</h4>
      <div class="enter-btn"><span>报名中</span></div>
    </div>
    <div class="quant-box flex">
      <div class="flex-item">
        <div class="info-box">
          <p class="quant-num size24">{{ homeInfo.rank }}</p>
          <p class="quant-info">竞赛排名</p>
        </div>
      </div>
      <div class="flex-item">
        <router-link :to="{ path: '/simulate' }">
          <div class="info-box">
            <p class="quant-num size24">{{ homeInfo.modify }}</p>
            <p class="quant-info">模拟消息</p>
          </div>
        </router-link>
      </div>
      <div class="flex-item">
        <div class="info-box">
          <p class="quant-num size24">{{ homeInfo.repeat }}</p>
          <p class="quant-info">新评论回复</p>
        </div>
      </div>
      <div class="flex-item">
        <div class="info-box">
          <p class="quant-num size24">{{ homeInfo.comment }}</p>
          <p class="quant-info">新主题评论</p>
        </div>
      </div>
    </div>
    <div class="mt5 pb50">
      <lh-error mt-class="mt40" error-txt="暂无策略进行实盘模拟" v-if="homeInfo.strategies.length == 0"></lh-error>
      <div v-else>
        <p class="quant-title">实盘模拟中</p>
        <div class="simulation size16">
          <template v-for="value in homeInfo.strategies">
            <router-link :to="{ path: '/myStrategy' }">
              <div class="simulation-list pr">
                <span>{{ value.name }}</span>
                <i class="icon-right"></i>
              </div>
            </router-link>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import lhError from '../components/Error.vue'
export default {
  name: 'firstpage',
  components: {
    lhError
  },
  computed: {
    ...mapGetters([
      'homeInfo'
    ])
  },
  mounted () {
    this.$store.dispatch('getHomeData')
  }
}

</script>
