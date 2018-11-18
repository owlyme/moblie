<template>
  <div id="shang">
      <ul>
        <li class="jifen" v-for="(item, index) in jifen" :key="index" @click="dashang(item)">
           <div>{{item}}积分</div>
        </li>
      </ul>
      <div class="jifen-input" style="display: flex;">
          <!-- <div class="flex-item">
              <input class="input-box" type="text" v-model="inputjifen"
          placeholder="请大佬打赏">
          </div>
          <div class="flex-item submit">
          <button @click="dashang(inputjifen)">确定</button>
          </div> -->
          <div class="flex-item">
              <input class="flex-item input-box" type="text" v-model="inputjifen"
          placeholder="请大佬打赏">
          </div>
          <div class="flex-item submit" @click="dashang(inputjifen)">
              <div>确定</div>
            </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'dashang',
  data () {
    return {
      jifen: [
        1,
        10,
        20,
        50,
        100,
        200,
        500,
        1000,
        10000
      ],
      inputjifen: ''
    }
  },
  mounted () {

  },
  methods: {
    dashang (item) {
      this.$emit('sendjifen', item)
    }
  }
}
</script>

<style lang="stylus">
@import '~@/assets/stylus/index';
shang-height = 40px
shang-padding = 30px
#shang
    padding shang-padding
    ul
        display: flex
        flex-wrap: wrap
        justify-content space-around
    .jifen
        width 33.333%
        display flex
        justify-content center
        mtb(4px)
        transform scale(0.8)
        div
            width 100px
            linecenter(shang-height)
            radius(shang-height)
            textcenter()
            border 1px solid color3
    .jifen-input
        mtb(8px)
    .flex-item
        // flex-grow 1
        textcenter()
        font-weight 700
    .input-box
        height shang-height
        border 1px solid color3
    .submit
        linecenter(shang-height)
        flex-basis 60px
        color color255
        background color4
</style>
