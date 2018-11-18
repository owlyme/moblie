<template>
<div>
    <van-list
        v-model="loading"
        :finished="finished"
        @load="onLoad"
        @click.native="callback($event)"
        >
            <van-cell
                v-for="(item, index) in commitList" :key="index"
            >
                <div class="commit flex">
                    <div class="commit-avatar">
                        <img :src="item.avatar" alt="">
                    </div>
                    <div class="flexgrow">
                        <div class="flex commit-info">
                            <div class="flexgrow commit-name">{{item.name}}</div>
                            <div style="align-self: flex-end"><i class="iconfont">&#xed5e;</i> {{item.zan}}</div>
                        </div>
                        <div>
                            <p>
                                {{item.content}}
                            </p>
                        </div>
                        <div class="commit-time">
                            <span>{{item.time}} </span> <span class="commit-response" :data-commit-name="item.name">回复</span>
                        </div>
                        <div class="total-commit">

                        </div>
                    </div>
                </div>
            </van-cell>
    </van-list>
</div>
</template>

<script>
/**
 * commitList : 评论列表
 *
 */
export default {
  name: 'commit',
  props: ['commitList'],
  data () {
    return {
    //   commitList: this.commitContent
      loading: false,
      finished: false
    }
  },
  created () {
    console.log(this.commitList)
  },
  methods: {
    callback (event) {
      let target = event.srcElement
      console.log('callback', target.className)
      if (target.className === 'commit-response') {
        console.log(1231, target.dataset.commitName)
      }
    }
  }
}
</script>

<style lang="stylus">
@import '~@/assets/stylus/index';
avatar-size = 40px

#newInformation
  .commit
      mtb(20px)
  .commit-info
    mb(10px)

  .commit-avatar
      width avatar-size
      height avatar-size
      img
        display block
        radius(100%)
        width 100%
        height 100%
  .commit-name
      color color2
  .commit-time
      color color3
</style>
