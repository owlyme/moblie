/* eslint-disable */
<template>
<div @click="click(item)">
  <div v-for="item in 150" :key="item">
      <span class="click(item)"  :data-item="item">
          {{item}}
      </span>
  </div>
</div>
</template>

<script>
let timer = Date.now()
console.log(0, timer)
export default {
  name: 'commit',

  data () {
    return {

    }
  },
  beforeCreate () {
    console.log(1, Date.now() - timer)
  },
  created () {
    console.log(2, Date.now() - timer)
  },
  mounted () {
    console.log(3, Date.now() - timer)
  },
  methods: {
    click (item) {
      console.log(item)
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
