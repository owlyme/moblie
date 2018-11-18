<template>
    <van-pull-refresh v-model="pullDownFresh" @refresh="onRefresh">

        <van-list
            v-model="loading"
            :finished="finished"
            @load="onLoad"
            @click.native="viewNews($event)"
            >
                <van-cell
                    v-for="(item, index) in list"
                    :key="index"
                >
                    <ListItem class="target-node" :news="item" :data-id="item.id" ></ListItem>
                </van-cell>
        </van-list>

    </van-pull-refresh>
</template>

<script>
import ListItem from './list-item.vue'
export default {
  name: 'mainlist',
  components: {
    ListItem
  },
  data () {
    return {
      pullDownFresh: false,
      newsPart: this.$BUS.newsPart,
      loading: false,
      finished: false,

      list: [
        {
          id: 1,
          imgs: [
            'http://news.cnr.cn/gjxw/tpjj/20150813/W020150813413260424627.jpg',
            'http://news.cnr.cn/gjxw/tpjj/20150813/W020150813413260424627.jpg',
            'http://news.cnr.cn/gjxw/tpjj/20150813/W020150813413260424627.jpg'
          ], // 新闻简略照片
          tag: '置顶', // 标签
          source: '人民网', // 新闻来源
          commentNum: 123, // 被评论次数
          releaseTime: '2018-09-10', // 新闻发布时间
          title: '12xiaoshide xing cheng' // 新闻标题
        },
        {
          id: 2,
          imgs: [
            'http://news.cnr.cn/gjxw/tpjj/20150813/W020150813413260424627.jpg'
          ], // 新闻简略照片
          tag: '置顶', // 标签
          source: '人民网', // 新闻来源
          commentNum: 123, // 被评论次数
          releaseTime: '2018-09-10', // 新闻发布时间
          title: '12xiaoshide xing cheng' // 新闻标题
        }
      ]
    }
  },
  created () {
    this.$BUS.$on('mainHeader', (param) => {
      this.newsPart = param.value
    })
  },
  wach: {
    newsPart (nv) {
      console.log(nv)
    }
  },
  methods: {
    onRefresh () {
      setTimeout(() => {
        this.$toast('刷新成功')
        this.pullDownFresh = false
      }, 500)
    },
    getNews (param) {

    },
    onLoad () {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push({
            id: this.list.length + 1,
            imgs: [
              'http://news.cnr.cn/gjxw/tpjj/20150813/W020150813413260424627.jpg'
            ], // 新闻简略照片
            tag: 'zhiding', // 标签
            source: 'renminwagn', // 新闻来源
            commentNum: 123, // 被评论次数
            releaseTime: '2018-09-10', // 新闻发布时间
            title: '12xiaoshide xing cheng' // 新闻标题
          })
        }
        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 500)
    },
    viewNews (event) {
      console.log(event)
      let targetNode = event.path.find((item, index) => {
        return item.className.includes('target-node')
      })
      console.log(targetNode.dataset.id)
      // 去往 新闻详情页面
      this.PAGEDATE('infoPage', targetNode.dataset.id)
      this.$router.push({name: 'newsinfo'})
    }
  }
}
</script>

<style lang="stylus">
@import '~@/assets/stylus/index';
</style>
