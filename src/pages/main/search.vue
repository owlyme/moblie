<template>
  <div id="search-page" class="pagePadding">
    <div class="search-box">
        <div class="flex-item inputbox">
            <input v-model="keyword" @keyup.enter="search" placeholder="请输入关键字" type="text">
        </div>
        <div class="flex-item cancle" @click="cancle">
            取消
        </div>
    </div>
    <h1 class="fn18 spacing" >
        搜索热词
    </h1>
    <div class="history fn18 spacing" v-if="!keyword">
        <div v-for="(item, index) in history" :key="index">{{item}}</div>
    </div>
    <div v-else>
                       
    </div>
  </div>
</template>

<script>
export default {
  name: 'search',
  props: ['info'],
  data () {
    return {
      keyword: '',
      history: [
        '李小杰',
        '李小杰',
        '李小杰',
        '李小杰',
        '李小姐'
      ]
    }
  },
  created () {
    let list = JSON.parse(localStorage.getItem('searchHistory')) || []
    this.history = list
  },
  methods: {
    search () {
      if (!this.keyword.trim()) return
      let list = JSON.parse(localStorage.getItem('searchHistory')) || []

      list.unshift(this.keyword)
      this.history = list.splice(0, 20)
      this.keyword = ''
      localStorage.setItem('searchHistory', JSON.stringify(this.history))
      // 异步加载
      // 触发搜索功能
      this.$BUS.$emit('search', this.keyword)
    },
    cancle () {
      this.$BUS.$emit('cancleSearch', this.keyword)
    }
  }
}
</script>

<style lang="stylus">
@import '~@/assets/stylus/index';
search-height = 40px
history-height = 40px
#search-page
    height 100vh
    padding 5px 10px
    .spacing
        mtb(20px)
        palr(10px)
    .search-box
        display flex
        flex-direction row
        align-items center
        .flex-item
            flex-grow 0
            flex-shrink 0
        .inputbox
            flex-grow 1
            input
                linecenter(search-height)
                radius(search-height)
                background color5
                color color3
                width 100%
                palr(15px)
        .cancle
            width 60px
            textcenter()
    .history
        display flex
        justify-content space-between
        flex-wrap wrap
        & > div
            width 50%
            linecenter(history-height)
            color color3
</style>
