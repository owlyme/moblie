<template>
  <div id="newInformation" class="pagePadding">
      <div v-if="!loaded" class="fixed-center">
        <van-loading type="spinner" />
      </div>
      <div v-else>
        <NewsArticle :article="article" ></NewsArticle>
        <commit></commit>
      </div>
  </div>
</template>

<script>
import NewsArticle from './article'
import commit from './commit'
export default {
  name: 'newInformation',
  components: {
    NewsArticle,
    commit
  },
  data () {
    return {
      loaded: false,
      article: {},
      pageDate: {}
    }
  },
  mounted () {
    setTimeout(() => {
      let article = {
        id: 123,
        title: '乘客抢方向盘',
        name: 'tiantian dashi jian ',
        time: '9-26 10:10',
        avatar: 'http://news.cnr.cn/gjxw/tpjj/20150813/W020150813413260424627.jpg',
        content: '<p>今天下午一大傻逼，坐公交抢司机的方向盘，被其他乘客按在地上使劲的摩擦，<img src="http://news.cnr.cn/gjxw/tpjj/20150813/W020150813413260424627.jpg" style="max-width: 100%;"></p><p>就是他，</p>',
        source: 'xinlang'
      }
      this.$set(this, 'article', article)
      this.loaded = true
    }, 1000)
  },
  activated () {
    this.pageDate = this.PAGEDATE('infoPage')
    console.log('infoPage', this.pageDate)
  }
}
</script>

<style lang="stylus">
@import '~@/assets/stylus/index';
avatar-size = 60px

</style>
