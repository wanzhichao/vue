<template>
  <div class="pr bg-white">
    <div class="record-nav">
      <div @click="leftHandler" :class="isFirst ? 'cur-nav' : ''">{{ leftTxt }}
      </div>
      <div @click="rightHandler" :class="isFirst ? '' : 'cur-nav'">{{ rightTxt }}
      </div>
    </div>
    <div class="cur-line pr">
      <div :class="['cur-index', isFirst ?  '': 'index-move']">
      </div>
    </div>
  </div>
</template>
<script>
export default{
  data () {
    return {
      isFirst: true
    }
  },
  props: {
    'leftTxt': String,
    'rightTxt': String,
    'leftFn': Function,
    'rightFn': Function
  },
  methods: {
    leftHandler () {
      this.isFirst = true
      this.leftFn()
    },
    rightHandler () {
      this.isFirst = false
      this.rightFn()
    }
  }
}
</script>
