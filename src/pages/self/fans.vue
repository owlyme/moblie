<template>
    <div id="fans">
        <ul>
            <li class="fan" v-for="(fan, index) in fansList" :key="index">
                <div class="img"><img :src="fan.avatar" alt=""></div>
                <div class="nickname">{{fan.nickName}}</div>
                <div class="status"><span @click="click(fan.status)" :class="classes[fan.status]"></span></div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'fans',
  data () {
    return {
      fansList: [
        {
          avatar: 'http://xingke100.com/logo.png',
          nickName: 'jinwan da lao hu',
          status: 1
        },
        {
          avatar: 'http://xingke100.com/logo.png',
          nickName: 'jinwan lixiaojie',
          status: 0
        }
      ],
      classes: {
        1: ['guanzhu'],
        0: ['quxiao']
      }
    }
  },
  methods: {
      click() {
          this.$dialog.confirm({
            message: '弹窗内容'
        }).then(() => {
        // on confirm
        }).catch(() => {
        // on cancel
        });
      }
  }
}
</script>

<style lang="stylus">
@import '~@/assets/stylus/index';
fan-size = 40px
#fans
    background bg-color1
    .fan
        display flex
        align-items center
        mtb(10px)
        background color255
        padding 10px 20px
        .img
            padding-right 20px
            img
                width fan-size
                height fan-size
                radius(fan-size)
        .nickname
            flex-grow: 1
        .guanzhu, .quxiao
            display inline-block
            linecenter(30px)
            radius(15px)
            padding 0 15px
            border 1px solid color4
        .guanzhu:after
            content: "关注"
            color color4
        .quxiao
            border 1px solid color3
        .quxiao:after
            content: "取消"
            color color3
</style>
