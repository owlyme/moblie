<template>
    <!-- <van-swipe class="main-header"
        :loop="false"
        :show-indicators="false"
        :width="itemWidth"
        :height="itemHeight">
        <van-swipe-item class="tt-swipe-item tt-search"
            :style="{'line-height': itemHeight+'px'}"
            @click.native="search"
            >
            search
        </van-swipe-item>

        <van-swipe-item class="tt-swipe-item"
            :style="{'line-height': itemHeight+'px'}"
            v-for="(item, index) in navList"
            :key="index">
            <div @click="currentNew(item)">
                {{item.title}}
            </div>
        </van-swipe-item>
        <van-swipe-item class="tt-swipe-item tt-addCategory"
            :style="{'line-height': itemHeight+'px'}"
            @click.native="addCategory"
            >
            <i class="iconfont">&#xe61f;</i>
        </van-swipe-item>
    </van-swipe> -->

    <van-tabs v-model="active" class="main-header"
    :swipe-threshold='9'
    :line-width='0.01'
    @click="tabclick"
        >
        <van-tab>
          <div slot="title" >
            <i class="iconfont color">&#xe613;</i>
          </div>
        </van-tab>

        <van-tab
        v-for="(item, index) in navList"
        :title="item.title"
        :key="index"
        >
        </van-tab>

        <van-tab>
        <i slot="title" class="iconfont color">&#xe61f;</i>
        </van-tab>
    </van-tabs>
</template>

<script>
export default {
  name: 'mainheader',
  data () {
    return {
      active: 2,
      itemWidth: 60,
      itemHeight: 40,
      navList: [
        {
          value: 1,
          title: '关注'
        },
        {
          value: 2,
          title: '推荐'
        },
        {
          value: 3,
          title: '娱乐'
        },
        {
          value: 4,
          title: '杭州'
        },
        {
          value: 5,
          title: '社会'
        },
        {
          value: 6,
          title: '科技'
        },
        {
          value: 7,
          title: '军事'
        }
      ]
    }
  },
  created () {
  },
  methods: {
    currentNew (item) {
      this.$BUS.$emit('mainHeader', {
        ...item,
        type: 'mainPage'
      })
    },
    search () {
      this.$BUS.$emit('openSearchPage')
    },
    addCategory () {
      this.$BUS.$emit('openCategory')
    },
    tabclick (index) {
      console.log(index)
      if (index === 0) {
        this.search()
      } else if (index === this.navList.length + 1) {
        this.addCategory()
      }
    }
  }
}
</script>

<style lang="stylus">
@import '~@/assets/stylus/index';
item-width = 60px
.main-header
    .color
      color color255
    .van-tabs__nav
      gradientLine(#ff0, #f00) !important
    .van-tab
      background none !important
      .van-ellipsis
        color color255
</style>
