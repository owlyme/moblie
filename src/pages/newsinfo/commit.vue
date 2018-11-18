<template>
<div>
  <div class="like-or-not">
    <van-tag plain class="tt-tag" round>
      <span class="good"> <i class="iconfont">&#xed5e;</i> 10001 </span>
      </van-tag>
    <van-tag plain class="tt-tag"  round>
      <span class="bad"><i class="iconfont">&#xed60;</i> 99 </span>
      </van-tag>
  </div>
  <div class="text-center shang">
    <i class="iconfont" @click="openDialog">&#xe611;</i>
  </div>
  <div class="commit">
    <!-- 评论的消息列表 -->
    <CommitItem :commitList="commitList"></CommitItem>
  </div>
  <replayBox :info="msgInfo" @sendmsg="sendmsg"></replayBox>

  <!-- 打赏的对话框 -->
  <van-dialog
        v-model="showDialog"
        :showConfirmButton="false"
      >
      <shang @sendjifen="closeDialog"></shang>
  </van-dialog>
</div>
</template>

<script>

import replayBox from '@/components/replayBox'
import CommitItem from './commit-item'
import shang from './shang'
export default {
  name: 'commit',
  props: ['commits'],
  components: {
    CommitItem,
    replayBox,
    shang
  },
  data () {
    return {
      msgInfo: '',
      showDialog: false,
      commitList: [
        {
          name: 'sb1',
          content: 'why are you so diao',
          zan: 123,
          time: '9-26 10:10',
          avatar: 'http://news.cnr.cn/gjxw/tpjj/20150813/W020150813413260424627.jpg'
        },
        {
          name: 'sb2',
          content: 'why are you so diao too',
          time: '9-26 10:10',
          zan: 123,
          avatar: 'http://news.cnr.cn/gjxw/tpjj/20150813/W020150813413260424627.jpg'
        },
        {
          name: 'sb3',
          content: 'why are you so diao three',
          time: '9-26 10:10',
          zan: 123,
          avatar: 'http://news.cnr.cn/gjxw/tpjj/20150813/W020150813413260424627.jpg'
        }
      ]
    }
  },
  created () {
    setTimeout(() => {
      this.msgInfo = 20
    }, 2000)
  },
  methods: {
    sendmsg (param) {
      console.log('sendmsg', param)
    },
    openDialog () {
      this.showDialog = true
    },
    closeDialog (param) {
      this.showDialog = false
    }
  }
}
</script>

<style lang="stylus">
@import '~@/assets/stylus/index';
avatar-size = 60px
#newInformation
  .like-or-not
    center()
    span
      width 100px
      margin 0 10px
  .good
    color color4 !important
  .bad
    color color3 !important
</style>
