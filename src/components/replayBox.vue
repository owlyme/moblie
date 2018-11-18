<template>
  <div id="replaybox">
      <div class="flex-item inputbox">
          <input v-model="message" @keyup.enter="send" placeholder="写评论..." type="text">
      </div>
      <div class="flex-item unread-msg">
          <Badge :info="info">
          <i slot="title" class="iconfont icon">&#xe6e4;</i>
          </Badge>
      </div>
      <div class="flex-item attetion">
          <i class="iconfont icon">&#xe640;</i>
      </div>
      <div class="flex-item share">
          <i class="iconfont icon">&#xe6ff;</i>
      </div>
  </div>
</template>

<script>
export default {
  name: 'replaybox',
  props: ['info'],
  data () {
    return {
      message: '',
      initInfo: this.info
    }
  },
  watch: {
    info (nv) {
      this.initInfo = nv
    }
  },
  methods: {
    send () {
      this.$emit('sendmsg', this.message)
    }
  }
}
</script>

<style lang="stylus">
@import '~@/assets/stylus/index';

#replaybox
    position fixed
    width 100%
    height 60px
    bottom 0
    left 0
    display flex
    flex-direction row
    align-items center
    background color4
    .flex-item
        flex-grow 0
        flex-shrink 0
        flex-basis 40px
        .icon
            color color255
            font-size 30px

    .inputbox
        flex-grow 1
        padding 0 10px
        input
            height 40px
            radius(40px)
            color color3
            padding 0 10px
            width 100%
</style>
