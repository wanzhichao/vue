<template>
  <div>
    <lh-slide
      left-txt="Java策略"
      right-txt="Python策略"
      :left-fn="leftFn"
      :right-fn="rightFn"></lh-slide>
    <div class="strategy-cont">
      <div class="double-box flex">
        {{ showJava }}
        <div class="flex-item">
          <lh-error v-if="showJava" mt-class="mt40" error-txt="暂无策略进行实盘模拟"></lh-error>
          <template v-else>
            <div>
              <p class="strategy-title size12">以下策略需在PC端完成回测才能实盘模拟</p>
              <div class="strategy-box size16 gray">
                <div class="strategy-list">
                  <span class="">MACD策略选股</span>
                </div>
              </div>
            </div>
          </template>
        </div>
        <div class="flex-item">
          <div class="strategy-box size16 black">
            <div class="strategy-list">
              <span>MACD策略选股</span>
              <div class="strategy-btn">模拟中</div>
            </div>
            <div class="strategy-list">
              <span class="">MACD策略选股</span>
              <div class="strategy-btn runing">实盘模拟</div>
            </div>
            <div class="strategy-list">
              <span>MACD策略选股</span>
              <div class="strategy-btn">模拟中</div>
            </div>
            <div class="strategy-list">
              <span class="">MACD策略选股</span>
              <div class="strategy-btn runing">实盘模拟</div>
            </div>
            <div class="strategy-list">
              <span>MACD策略选股</span>
              <div class="strategy-btn">模拟中</div>
            </div>
            <div class="strategy-list">
              <span class="">MACD策略选股</span>
              <div class="strategy-btn runing">实盘模拟</div>
            </div>
          </div>
          <p class="strategy-title size12">以下策略需在PC端完成回测才能实盘模拟</p>
          <div class="strategy-box size16 gray">
            <div class="strategy-list">
              <span class="">MACD策略选股</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import lhSlide from '../components/Slide.vue'
import { mapGetters } from 'vuex'
import lhError from '../components/Error.vue'
export default{
  components: {
    lhSlide,
    lhError
  },
  computed: {
    ...mapGetters([
      'strategiesList'
    ]),
    showJava () {
      return this.strategiesList.java.normalStrategy.length === 0 && this.strategiesList.java.needPc.length === 0
    },
    showPython () {
      return this.strategiesList.python.normalStrategy.length === 0 && this.strategiesList.python.needPc.length === 0
    }
  },
  methods: {
    leftFn () {
      this.$store.dispatch('getStrategies')
    },
    rightFn () {
      console.log(2)
    }
  }
}
</script>
