<template>
  <ul id="actions">
      <li class="love" @click="action(1)">
          <i class="iconfont">&#xe6ab;</i>
          <span class="num">22</span>
      </li>
      <li @click="action(2)">
          <i class="iconfont">&#xe640;</i>
      </li>
      <li>|</li>
      <li @click="action(3)">
          <i class="iconfont">&#xe6ff;</i>
      </li>
      <li>|</li>
      <li @click="action(4)">
          <i class="iconfont">&#xe6e4;</i>
          <span class="num">98</span>
      </li>
  </ul>
</template>

<script>
export default {
  name: 'actions',
  porps: ['info'],
  data () {
    return {

    }
  },
  created () {

  },
  methods: {
    action (param) {
      this.$BUS.$emit('cardAction', param)
    }
  }
}
</script>

<style lang="stylus">
@import '~@/assets/stylus/index';
#actions
    mtb(15px)
    padding 0 10px
    display flex
    flex-wrap wrap
    justify-content space-between
    align-items center
    li
        display flex
        align-items: center;
    .love
        flex-basis 40%
    .num
        ml(10px)
</style>
