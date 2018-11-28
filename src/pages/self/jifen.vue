<template>
    <div id="jifen">
        <h2 class="title">积分任务</h2>
        <ul class="container">
            <li v-for="(score, index) in jifenList" :key="index">
                <div class="min-line" v-if="index"></div>
                <div class="score">
                <div class="label">{{score.label}}</div>
                <div class="score">+{{score.score}}积分</div>
                <div class="precent">{{score.getScore}}/{{score.totalScore}}</div>
                <div class="status"><span :class="classes[score.done]"></span></div>
                </div>
            </li>
        </ul>
        <h2 class="title">获取积分规则</h2>
        <ul class="container">
            <li class="rule" v-for="(rule, index) in rules" :key="index">
                {{index+1}}.{{rule}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'jifen',
  data () {
    return {
        rules: [
            '签到+1积分，每天一次；',
            '分享+10积分，每天30积分为上限；',
            '评论+1积分，每天10积分为上限；',
            '签到+1积分，每天20积分为上限；',
            '签到+10积分，每天100积分为上限。',
        ],
      jifenList: [
        {
          label: '签到',
          score: 1,
          totalScore: 3,
          getScore: 1,
          done: 1
        },
        {
          label: '分享',
          score: 1,
          totalScore: 3,
          getScore: 1,
          done: 0
        },
        {
          label: '浏览',
          score: 1,
          totalScore: 3,
          getScore: 1,
          done: 0
        },
        {
          label: '评论',
          score: 1,
          totalScore: 3,
          getScore: 1,
          done: 0
        },
        {
          label: '发帖',
          score: 1,
          totalScore: 3,
          getScore: 1,
          done: 0
        }
      ],
      classes: {
        1: ['done'],
        0: ['undone']
      }
    }
  }

}
</script>

<style lang="stylus">
@import '~@/assets/stylus/index';
score-size = 40px
#jifen
    min-height 100vh
    background url('http://xingke100.com/logo.png')
    .title
        color color255
    .container
        radius(20px)
        padding 10px 0
        margin 10px
        background color255

    .score
        display flex
        align-items center
        mtb(10px)
        padding 0 15px
        background color255
        .label
            font-weight 700
        .score
            flex-grow: 1
        .precent
            padding-right 20px
            color color3
        .done, .undone
            display inline-block
            linecenter(30px)
            radius(15px)
            padding 0 15px
            border 1px solid color3
        .done:after
            content: "已完成"
            color color3
        .undone
            border 1px solid color4
        .undone:after
            content: "去完成"
            color color4
    
    .rule
        padding 0 15px
        linecenter(30px)
</style>
