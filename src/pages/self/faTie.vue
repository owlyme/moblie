<template>
    <div id="fa-tie">
        <div>
            <input class="title placeholder" v-model="title" type="text" placeholder="帖子标题">
            <div class='min-line'></div>
            <textarea class="placeholder" v-model="content" cols="30" rows="5" placeholder="有什么好玩的内容快分享给大家"></textarea>
            <!-- 图片展示 -->
            <div>
                <img v-for="(blob, index) in blobs" :key="index" :src="blob" alt="">
            </div>

            <div class="upload-btns">
                <div class="border picture">
                    <van-uploader :after-read="uploadPpic" accept="image/*" multiple>
                        <i class="iconfont">&#xeef8;</i>
                    </van-uploader>
                </div>

                <uploadEle class="border video">
                    <div slot="palceholder">
                        <i class="iconfont">&#xe646;</i>
                    </div>
                </uploadEle>

            </div>

        </div>
        <van-button size="large" round class="btn">确定</van-button>
    </div>
</template>
<script>
import uploadEle from '@/components/uploadEle.vue'
export default {
  name: 'fatie',
  components: {
    uploadEle
  },
  data () {
    return {
      title: '',
      content: '',
      picInputEle: null,
      vidoeInputEle: null,
      files: [],
      blobs: []
    }
  },
  mounted () {
    // this.picInputEle = this.$refs.pic
    this.vidoeInputEle = this.$refs.video
  },
  methods: {
    // uploadPpic () {
    //   this.picInputEle.click()
    // },
    uploadVideo () {
      this.vidoeInputEle.click()
    },
    uploadPpic (file) {
      console.log(file)
      if (Array.isArray(file)) {
        file.forEach(item => {
          this.blobs.push(item.content)
        })
      } else {
        this.blobs.push(file.content)
      }
    },
    saveVideo () {

    }
  }
}
</script>
<style lang="stylus">
@import '~@/assets/stylus/index';
title-height = 40px
media-size = 40px
avatar-size = 40px
#fa-tie
    height 100vh
    display flex
    flex-direction column
    justify-content space-between
    .title
        height title-height
    .min-line
        mtb(12px)
    img
        max-width 60px
        max-height 60px
    .upload-btns
        display flex
        .border
            padding 10px
            border 1px dashed color3
            mr(20px)
            raduis(5px)
            i
                font-size 40px
    .inputfile

    .btn
        color color255
        background color4 !important
</style>
