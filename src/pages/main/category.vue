<template>
  <div id="category-page" class="pagePadding">
    <div class="close" @click="close">
      <i class="iconfont">&#xe612;</i>
    </div>
    <h2 class="title">我的频道 <span class="small-title fn12">选中不放可有拖拽排序</span> </h2>

    <SlickList class="recommend-category" 
    axis="xy"
    v-model="recommendList"
    :pressDelay='300'
    :distance="5"
    @input="newlist">
      <SlickItem class="slick-item" v-for="(item, index) in recommendList" :index="index" :key="index">
        <Badge class="inner"
        type="close"
        @close="removeCategory(index)">          
          <div slot="title"> {{item.label}} </div>
          </Badge>
      </SlickItem>
    </SlickList>

    <h2 class="title">其他频道 <span class="small-title fn12">点击添加频道</span></h2>
    <ul class="more-category">
      <li v-for="(item, index) in moreCategoryList" :key="index">
        <div class="inner" @click="addCategory(index)"><span class="fn20">+</span> {{item.label}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import { SlickList, SlickItem } from 'vue-slicksort';
export default {
  name: 'category',
  props: ['info'],
  components: {
    SlickItem,
    SlickList
  },
  data () {
    return {
      keyword: '',
      recommendList: [
          {id:1, label: '科技1'},
          {id:1, label: '科技2'},
          {id:1, label: '科技3'},
          {id:1, label: '科技4'},
          {id:1, label: '科技5'},
      ],
      moreCategoryList: [
          {id:1, label: '科技'},
          {id:1, label: '科技'},
          {id:1, label: '科技'},
          {id:1, label: '科技'},
          {id:1, label: '科技'},
      ]
    }
  },
  created () {
  },
  methods: {
    addCategory (index) {
      let category = this.moreCategoryList[index]
      this.recommendList.push(category)
      // 异步加载
      this.$BUS.$emit('addCategory', )
    },
    removeCategory(index){
      this.recommendList.splice(index, 1)
    },
    close () {
      this.$BUS.$emit('categoryClose', this.keyword)
    },
    newlist(newlist){
      console.log(newlist)
    } 
  }
}
</script>

<style lang="stylus">
@import '~@/assets/stylus/index';
#category-page
  .close
    linecenter(50px)
  .samll-title
    color color3
  ul, .recommend-category
    display flex
    flex-wrap wrap
    li, .slick-item
      flex-basis 25%
      .inner
        radius(3px)
        margin 5px
        linecenter(40px)
        text-align center
        background color3
.slick-item
      flex-basis 25%
      .inner
        radius(3px)
        margin 5px
        linecenter(40px)
        text-align center
        background color3
</style>
