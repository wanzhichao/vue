<template>
  <div>
    <router-view></router-view>
    <lh-nav></lh-nav>
  </div>
</template>
<script>
import lhNav from '../components/Nav.vue'
export default {
  name: 'home',
  components: {
    lhNav
  }
}
</script>
