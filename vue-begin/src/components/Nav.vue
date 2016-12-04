<template>
  <div class="flex fix-lb nav">
    <div class="flex-item">
      <router-link :to="{ path: '/home/firstpage'}" active-class="nav1-clicked blue">
        <div>
          <div class="icon icon1"></div>
          <span class="nav-title">首页</span>
        </div>
      </router-link>
    </div>
    <div class="flex-item">
      <router-link :to="{ path: '/home/strategy'}"  active-class="nav2-clicked blue">
        <div>
          <div class="icon icon2"></div>
          <span class="nav-title">策略</span>
        </div>
      </router-link>
    </div>
    <div class="flex-item">
      <router-link :to="{ path: '/home/community'}"  active-class="nav3-clicked blue">
        <div>
          <div class="icon icon3"></div>
          <span class="nav-title">社区</span>
        </div>
      </router-link>
    </div>
    <div class="flex-item">
      <router-link :to="{ path: '/home/info'}"  active-class="nav4-clicked blue">
        <div>
          <div class="icon icon4"></div>
          <span class="nav-title">个人</span>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
    export default{
      name: 'nav'
    }
</script>
