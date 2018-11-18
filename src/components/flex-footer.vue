<template>
  <van-tabbar v-model="active" @change="tabbarChange">
    <van-tabbar-item icon="shop" :info="tabInfo.news">新闻</van-tabbar-item>
    <van-tabbar-item icon="chat" :info="tabInfo.paragraph">段子</van-tabbar-item>
    <van-tabbar-item icon="records" :info="tabInfo.joke">笑话</van-tabbar-item>
    <van-tabbar-item icon="gold-coin" :info="tabInfo.me">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: 'flexfooter',
  data () {
    return {
      active: 0,
      tabInfo: {
        news: '1',
        paragraph: '2',
        joke: '3',
        me: '4'
      }
    }
  },
  created () {

  },
  methods: {
    tabbarChange (index) {
      console.log('footer', index)
      this.$emit('toPage',index)
      let pageName = ''
      if (index === 0) {
        pageName = 'main'
      } else if (index === 1) {
        pageName = 'paragraph'
      } else if (index === 2) {
        pageName = 'joke'
      } else if (index === 3) {
        pageName = 'self'
      }

      this.$router.push({name: pageName})
    }
  }
}
</script>

<style lang="stylus">
@import '~@/assets/stylus/index';
</style>
