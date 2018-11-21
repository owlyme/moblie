<template>
    <div id="rili">
        <div class="label">
            <span @click="preMonth"><i class="iconfont">&#xe614;</i></span>  
            <span>{{yearMonth}}</span>
            <span @click="nextMonth"><i class="iconfont">&#xed61;</i></span>
        </div>
        <ul class="month">
            <li class="week" v-for="(item, index) in week" :key="'week'+index">
                {{item}}
            </li>
            <li class="day" v-for="(item, index) in oneMonthList" :key="index" @click="select(item)">
                <span 
                    :class="{
                            'not-curr-month': item.type !== 1,
                            sigined: item.sigin,
                            sigin: item.sigin && item.date == currDay.getDate()
                            }"
                    >{{item.date}}</span> 
            </li>
        </ul>
        <div class="info">
            <div class="img">
                <img src="http://xingke100.com/logo.png" alt="">
            </div>
            <span>你已经连续签到</span>
            <span>365天</span>
        </div>
    </div>
</template>
<script>
export default {
  name: 'rili',
  data () {
    return {
      currDay: new Date(),
      oneDayMs: 1 * 24 * 60 * 60 * 1000,
      // 一天的毫秒数值
      week: ['日','一','二','三','四','五','六'],
      oneMonthList: [],
      monthIndex: 0
    }
  },
  created () {
    this.currMonth()
  },
  computed: {
      yearMonth() {
          return `${this.currDay.getFullYear()}年${this.currDay.getMonth() + 1}月` 
      }
  },
  methods: {
    currMonth (dateString) {
      this.oneMonthList = []
      let now = this.currDay
      let currTime = now.getTime()
      let date = now.getDate()
      let month = now.getMonth()

      let tempMonth = month
      let count = 0
      // 本月
      while (tempMonth === month && count <= 35) {
        count++
        date--
        let time = currTime - this.oneDayMs * date
        let newDate = new Date(time)
        tempMonth = newDate.getMonth()
        if (tempMonth !== month) {
          break
        }
        this.oneMonthList.push({
          time: newDate.getTime(),
          date: newDate.getDate(),
          day: newDate.getDay(),
          month: newDate.getMonth(),
          type: 1
        })
      }
      // 上一月
      let firstDate = this.oneMonthList[0]
      let firstDay = firstDate.day
      count = 0
      while (count < firstDay) {
        count++
        let time = firstDate.time - this.oneDayMs * count
        let newDate = new Date(time)
        this.oneMonthList.unshift({
          time: newDate.getTime(),
          date: newDate.getDate(),
          day: newDate.getDay(),
          month: newDate.getMonth(),
          type: 0
        })
      }
      // 下一个月的天数
      let lastDate = this.oneMonthList[this.oneMonthList.length - 1]
      let lastDay = lastDate.day
      count = 0
      while (lastDay + count < 6) {
        count++
        let time = lastDate.time + this.oneDayMs * count
        let newDate = new Date(time)
        this.oneMonthList.push({
          time: newDate.getTime(),
          date: newDate.getDate(),
          day: newDate.getDay(),
          month: newDate.getMonth(),
          type: 2
        })
      }
      console.log(0, this.currDay.toJSON())
    },
    preMonth () {
      let today = this.currDay
      let month = today.getMonth()
      let year = today.getFullYear()
      let dateStr = this.currDay.toJSON().split('-')
      //  注意today.getMonth 的值 小于 dateStr的month 1 个
      let preMonth = month
      if (preMonth > 0) {
        dateStr[1] = preMonth > 9 ? `${preMonth}` : `0${preMonth}`
      } else {
        dateStr[1] = '11'
        dateStr[0] = --year > 1970 ? year : 1970
      }
      this.currDay = new Date(dateStr.join('-'))
      this.currMonth()
    },
    nextMonth () {
      let today = this.currDay
      let month = today.getMonth()
      let year = today.getFullYear()
      let dateStr = this.currDay.toJSON().split('-')
        //  注意today.getMonth 的值 小于 dateStr的month 1个
      let nextMonth = month + 2
      if (nextMonth <= 12) {
        dateStr[1] = nextMonth > 9 ? `${nextMonth}` : `0${nextMonth}`
      } else {
        dateStr[1] = '01'
        dateStr[0] = ++year
      }
      this.currDay = new Date(dateStr.join('-'))
      this.currMonth()
    },
    select(param) {
        if (param.type === 1) {
            this.$set(param, 'sigin', true)
        }
    }
  }
}
</script>
<style lang="stylus">
@import '~@/assets/stylus/index';
label-size = 100px
sigin-size = 20px
info-size = 30px
#rili
    fn(14px)
    .label
        display: flex
        justify-content: space-between
        align-items: center
        color color255
        height label-size
        background color6
    .month
        display: flex
        flex-wrap: wrap
        text-align: center
        color color0
    .week, .day
        flex-basis: 14.28%
        align-self center
        linecenter(sigin-size)
        mt(10px)
    .sigined
        display inline-block
        width sigin-size
        radius(50%)
        background color4
    .sigin
        display inline-block
        width sigin-size
        radius(50%)
        color color255
        background color6
    .not-curr-month
        color color3
    .info
        display flex
        justify-content space-between
        height info-size
        linecenter(info-size)
        color color255
        background color6
        radius(info-size)
        padding-right 30px
        .img
            width info-size            
            radius(50%)
            img 
                max-width info-size
                max-height info-size
</style>
