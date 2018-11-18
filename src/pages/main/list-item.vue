<template>
  <div class="news-item">
      <!-- 没有图片的新闻 -->
      <div class="new-container no-img" v-if="newsData.imgs && !newsData.imgs.length">
          <div class="fn24">{{newsData.title}}</div>
          <div class="fn12">
              <van-tag color="#f2826a" plain>{{newsData.tag}}</van-tag>
              <span class="color-text">{{newsData.source}}</span>
              <span class="color-text">评论 {{newsData.commentNum}}</span>
              <span class="color-text">{{newsData.releaseTime}}</span>
          </div>
      </div>
      <!-- 有一张图片的新闻 -->
      <div class="one-img" v-if="newsData.imgs && newsData.imgs.length === 1">
          <van-row gutter="20">
                <van-col span="16">
                    <div class="fn20">
                        {{newsData.title}}
                    </div>
                    <div class="fn12">
                        <van-tag color="#f2826a" plain>{{newsData.tag}}</van-tag>
                        <span class="color-text">{{newsData.source}}</span>
                        <span class="color-text">评论 {{newsData.commentNum}}</span>
                        <span class="color-text">{{newsData.releaseTime}}</span>
                    </div>
                </van-col>
                <van-col span="8" class="img-container">
                    <img :src="newsData.imgs[0]" alt="">
                </van-col>
            </van-row>
      </div>
      <!-- 有三张图片的新闻 -->
      <div class="three-imgs" v-if="newsData.imgs && newsData.imgs.length === 3">
          <div class="fn20">
            {{newsData.title}}
          </div>
          <van-row gutter="20">
            <van-col span="8"
                class="img-container"
                v-for="(item, index) in newsData.imgs"
                :key="index">
                <img :src="item" alt="">
                </van-col>
           </van-row>
           <div class="fn12">
                <van-tag color="#f2826a" plain>{{newsData.tag}}</van-tag>
                <span class="color-text">{{newsData.source}}</span>
                <span class="color-text">评论 {{newsData.commentNum}}</span>
                <span class="color-text">{{newsData.releaseTime}}</span>
            </div>
      </div>
      <!-- 一张大图或者视屏 -->
      <div class="no-text" v-if="newsData.type === 'media'">
          <div class="only-media">
              img
          </div>
          <div class="fn12">
                <van-tag color="#f2826a" plain>{{newsData.tag}}</van-tag>
                <span class="color-text">{{newsData.source}}</span>
                <span class="color-text">评论 {{newsData.commentNum}}</span>
                <span class="color-text">{{newsData.releaseTime}}</span>
            </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'listItem',
  components: {
  },
  props: {
    news: {
      type: Object,
      default () { return {} }
    }
  },
  data () {
    return {
      // newsData: {
      //     imgs: [
      //         "http://news.cnr.cn/gjxw/tpjj/20150813/W020150813413260424627.jpg",
      //         "http://news.cnr.cn/gjxw/tpjj/20150813/W020150813413260424627.jpg",
      //         "http://news.cnr.cn/gjxw/tpjj/20150813/W020150813413260424627.jpg"
      //     ], // 新闻简略照片
      //     tag: "zhiding", // 标签
      //     source: "renminwagn", //新闻来源
      //     commentNum: 123, // 被评论次数
      //     releaseTime: '2018-09-10', // 新闻发布时间
      //     title: '12xiaoshide xing cheng' // 新闻标题
      // },
      newsData: this.news
    }
  },
  created () {
  }
}
</script>

<style lang="stylus">
@import '~@/assets/stylus/index';
news-item-height = 100px
news-img-height = 80px
.news-item
    margin 10px 0
    .img-container
        text-align center
        height news-img-height
        img
            height 100%
    .color-text
        color color3
</style>
