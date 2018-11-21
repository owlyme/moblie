<template>
  <div id="paragraph">
      <van-tabs v-model="active" :line-width="20" color="#ff7e28" :swipe-threshold='5'>
        <van-tab title="排行"><card></card></van-tab>
        <van-tab title="视频"><card></card></van-tab>
        <van-tab title="图文">内容 3</van-tab>
        <van-tab title="全部">内容 4</van-tab>
        <van-tab title="关注">内容 4</van-tab>
        </van-tabs>
      <van-popup v-model="popupShow" position="bottom" :overlay="false">
        <share-bar class="row"></share-bar>
        <div class="closePopup row" @click="popupShow = false">取消</div>
      </van-popup>
  </div>
</template>

<script>
import ShareBar from '@/components/shareBar'
import card from './card.vue'
export default {
  name: 'paragraph',
  components: {
    ShareBar,
    card
  },
  data () {
    return {
      active: 0,
      popupShow: false
    }
  },
  created () {
    this.$BUS.$on('cardAction', params => {
      this.actions(params)
    })
  },
  methods: {
    actions (param) {
      console.log(param)
      if (param === 3) {
        this.popupShow = !this.popupShow
      }
    }
  }
}
</script>

<style lang="stylus">
@import '~@/assets/stylus/index';
#paragraph
    min-height 100vh
    background color3
    .row
      linecenter(60px)
    .closePopup
      border-top 1px solid color3
      text-align center

    .van-tabs__nav
      background none
      .van-tab
        background none
    .van-hairline--top-bottom::after
      border-width 0

    .van-tab--active
        font-size: 16px;
        font-weight: 700;
</style>
