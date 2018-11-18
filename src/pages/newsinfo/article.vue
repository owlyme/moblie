<template>
    <article>
    <h1>{{article.title}}</h1>
    <articleInfo :info="article"></articleInfo>
    <p class="news-content" v-html="article.content"></p>
    <div class="source fn18">
        <span style="font-weight: 700">来源：</span>{{article.source}}
    </div>
    </article>
</template>

<script>
import articleInfo from '@/components/simpleInfo.vue'
export default {
  name: 'newsArticle',
  components: { articleInfo },
  props: ['article'],
  data () {
    return {
    //   article: {
    //     id: 123,
    //     title: '乘客抢方向盘',
    //     name: "tiantian dashi jian ",
    //     time: '9-26 10:10',
    //     avatar: 'http://news.cnr.cn/gjxw/tpjj/20150813/W020150813413260424627.jpg',
    //     content: '<p>今天下午一大傻逼，坐公交抢司机的方向盘，被其他乘客按在地上使劲的摩擦，<img src="http://news.cnr.cn/gjxw/tpjj/20150813/W020150813413260424627.jpg" style="max-width: 100%;"></p><p>就是他，</p>'
    //   }
    }
  },
  created () {
  }
}
</script>

<style lang="stylus">
@import '~@/assets/stylus/index';

#newInformation
  .news-content
    line-height 1.4em
    img
      mtb(10px)
.source
    mtb(30px)
</style>
