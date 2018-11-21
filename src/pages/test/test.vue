/* eslint-disable */
<template>
<div>
  <rili></rili>
</div>
</template>

<script>
import rili from '@/components/rili.vue'
export default {
  name: 'commit',
  components: {
    rili
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus">
@import '~@/assets/stylus/index';
avatar-size = 60px
#newInformation
  .like-or-not
    center()
    span
      width 100px
      margin 0 10px
  .good
    color color4 !important
  .bad
    color color3 !important
</style>
