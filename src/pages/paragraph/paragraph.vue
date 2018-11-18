<template>
  <div id="paragraph">
      <van-tabs v-model="active" :line-width="20" color="#ff7e28" :swipe-threshold='5'>
        <van-tab title="排行">内容 1</van-tab>
        <van-tab title="视频">内容 2</van-tab>
        <van-tab title="图文">内容 3</van-tab>
        <van-tab title="全部">内容 4</van-tab>
        <van-tab title="关注">内容 4</van-tab>
        </van-tabs>
      <share-bar></share-bar>
  </div>
</template>

<script>
import ShareBar from '@/components/shareBar'
import articleInfo from '@/components/simpleInfo.vue'
export default {
  name: 'paragraph',
  components: {
      ShareBar,
      articleInfo
  },
  data () {
    return {

    }
  },
  created () {

  }
}
</script>

<style lang="stylus">
@import '~@/assets/stylus/index';
#paragraph
    .van-tab--active
        font-size: 16px;
        font-weight: 700;
</style>