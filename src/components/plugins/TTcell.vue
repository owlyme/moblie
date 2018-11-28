<template>
<div>
    <div class="tt-cell"
        :class="{touched: touch}"
        @touchstart="touch = true"
        @touchend="click" >
        <div class="left">
            <span v-if="!$slots.title">{{title}}</span>
            <slot v-else name="title"></slot>
        </div>
        <div class="right">
            <div>
                <span v-if="!$slots.value">{{value}}</span>
                <slot name="value"></slot>
            </div>
            <div>
                <span v-if="!$slots.icon" v-html="initIcon" class="iconfont"></span>
                <slot v-else name="icon"></slot>
            </div>
        </div>
    </div>
    <div class="min-line"></div>
</div>
</template>
<script>
export default {
  name: 'ttcell',
  props: ['title', 'value', 'icon'],
  data () {
    return {
      slots: [],
      touch: false
    }
  },
  computed: {
    initIcon () {
      return this.icon || '&#xed61;'
    }
  },
  methods: {
    click () {
      this.touch = false
      console.log(`click cell`)
    }

  }
}
</script>
<style lang="stylus">
@import '~@/assets/stylus/index';
cell-h = 40px
.touched
    background color3
.tt-cell
    width 100%
    display flex
    justify-content space-between
    height cell-h
    align-items center
    padding 0 12px
    .right
        color color5
        display flex
        justify-content space-between
        align-items center
        img
            max-width cell-h
            max-height cell-h
            radius(cell-h)
</style>
