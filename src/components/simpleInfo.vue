<template>
    <div class="simple-info">
        <div class="editor-avatar">
            <img :src="info.avatar" alt="">
        </div>
        <div class="editor-base">
            <div class="editor-name">
                {{info.name}}
            </div>
            <div class="editor-time">
                <span>{{info.time}}</span>
            </div>
        </div>
        <div class="editor-attion">
            <van-tag class="tt-tag fn20" round size="large">已关注</van-tag>
        </div>
    </div>
</template>

<script>
export default {
  name: 'simpleinfo',
  props: ['info'],
  data () {
    return {
        initinfo: this.info
    }
  },
  created () {

  },
  methods: {
      share(param) {
      }
  }
}
</script>

<style lang="stylus">
@import '~@/assets/stylus/index';
avatar-size = 60px
.simple-info
    mtb(30px)
    display flex
    flex-direction row
    .editor-avatar
      width avatar-size
      height avatar-size
      img
        display block
        radius(100%)
        width 100%
        height 100%
    .editor-base
      flex-grow 1
      display flex
      flex-direction column
      .editor-name
        height: 66%;
        line-height: 40px
        font-size: 20px;
        font-weight: 700;
    .editor-attion
      line-height 60px
</style>