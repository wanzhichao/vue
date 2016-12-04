<template>
  <div :class="['error', mtClass]">
    <div class="err-img">
      <img src="../assets/images/error.png" alt=""/>
    </div>
    <p class="ta-c gray mt10 size14">{{ errorTxt }}</p>
  </div>
</template>
<script>
export default{
  name: 'error',
  props: {
    'mtClass': String,
    'errorTxt': String
  }
}
</script>
