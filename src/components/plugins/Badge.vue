<template>
  <div id="ttbage">
      <slot name="title">

      </slot>
      <i class="right-top" v-if="info && type === 'text'">
          {{info}}
      </i>
      <i class="right-top-close iconfont" v-if="type === 'close'" @click="close">
          &#xe62c;
      </i>
  </div>
</template>

<script>
export default {
  name: 'ttbage',
  props: {
    info: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'close'
    }
  },
  data () {
    return {
    }
  },
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus">
    #ttbage
        position relative
        .right-top
            display block
            position absolute
            top -8px
            right 2px
            height 14px
            line-height 14px
            border-radius 14px
            background #f00
            font-size 10px
            color #fff
            transform: scale(0.9);
        .right-top-close
            display block
            position absolute
            top -8px
            right 2px
            height 14px
            line-height 14px
            border-radius 14px
</style>
