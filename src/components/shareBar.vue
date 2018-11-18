<template>
  <ul id="sharebar">
    <li @click="share">
        <i class="iconfont">&#xe669;</i>
    </li>
    <li @click="share">
        <i class="iconfont">&#xe652;</i>
    </li>
    <li @click="share('qq')">
        <i class="iconfont">&#xe65e;</i>
    </li>
    <li @click="share('qzone')">
        <i class="iconfont">&#xe6e5;</i>
    </li>
    <li @click="share('xinlang')">
        <i class="iconfont">&#xe6e6;</i>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'sharebar',
  data () {
    return {

    }
  },
  created () {

  },
  methods: {
      share(param) {
          
          if (param === 'xinlang') {
              location.href= `http://service.weibo.com/share/share.php?
              url=http://m.vickeynce.com&appkey = 来自于vickey新概念英语&title=新浪微博分享测试&pic=http://img.tiantianshangke.com/img/aq//h5_1470882133.jpg`

          } else if (param === 'qzone') {
              location.href= 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url =http://m.vickeynce.com&summary=我傻所以想要分享&site=来自于vickey新概念英语&pics=http://img.tiantianshangke.com/img/aq//h5_1470882133.jpg'

          } else if (param === 'qq') {
              window.open('http://connect.qq.com/widget/shareqq/index.html?url=http://www.sevenphp.com/test/test.html&desc=邀请详情&title=标题&summary=简介&pics=&flash=&site=邀请人或网站&callback="  title="QQ登')

          }
           
      }
  }
}
</script>

<style lang="stylus">
@import '~@/assets/stylus/index';
#sharebar
    display flex
    justify-content space-around
    li 
        font-size 20px
</style>