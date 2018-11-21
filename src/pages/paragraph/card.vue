<template>
  <div id="card">
    <simpleinfo :info="cardInfo"></simpleinfo>
    <div>
        <h2>wobuguan , wo jiuyao </h2>
        <videoPlayer></videoPlayer>
    </div>
    <actions></actions>
  </div>
</template>

<script>
import simpleinfo from '@/components/simpleInfo.vue'
import videoPlayer from '@/components/videoPlayer.vue'
import actions from './action.vue'
export default {
  name: 'card',
  components: {
    simpleinfo,
    actions,
    videoPlayer
  },
  data () {
    return {
      cardInfo: {
        id: 123,
        title: '乘客抢方向盘',
        name: 'tiantian dashi jian ',
        time: '9-26 10:10',
        avatar: 'http://news.cnr.cn/gjxw/tpjj/20150813/W020150813413260424627.jpg',
        content: '<p>今天下午一大傻逼，坐公交抢司机的方向盘，被其他乘客按在地上使劲的摩擦，<img src="http://news.cnr.cn/gjxw/tpjj/20150813/W020150813413260424627.jpg" style="max-width: 100%;"></p><p>就是他，</p>',
        source: 'xinlang'
      }
    }
  },
  created () {

  },
  methods: {
  }
}
</script>

<style lang="stylus">
@import '~@/assets/stylus/index';
    #card
        background color255
        border-radius: 5px;
        margin: 10px;
        padding: 5px
</style>
