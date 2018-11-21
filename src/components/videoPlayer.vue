<template>
    <div class="tt-palyer" @click="toggle">
        <i v-show="pauseStatue" class="iconfont play-btn" >&#xe63a;</i>
        <video ref="player" width="100%" preload="preload"
        class="player"
        :controls="controls"
        webkit-playsinline="" playsinline=""
        :src="options.video.url"
        :poster="options.video.pic"
        @ended="end"
        @play="play"
        @pause="pause"
        ></video>
    </div>
</template>
<script>
// import 'vue-dplayer/dist/vue-dplayer.css'
// import VueDPlayer from 'vue-dplayer'
export default {
  name: 'videopalyer',
  components: {
    // 'd-player': VueDPlayer
  },
  data () {
    return {
      pauseStatue: true,
      options: {
        video: {
          pic: 'https://i.imgur.com/5qQYmfc.png',
          url: 'http://static.smartisanos.cn/common/video/video-jgpro.mp4'
        },
        autoplay: false
      },
      player: null,
      controls: false
    }
  },
  mounted () {
    this.player = this.$refs.player
  },
  methods: {
    toggle () {
      console.log(123)
      if (this.pauseStatue) {
        this.player.play()
      } else {
        this.player.pause()
      }
    },
    toPlay () {
      this.player.play()
    },
    toPause () {
      this.player.pause()
    },
    play () {
      this.pauseStatue = false
      this.controls = true
    },
    pause () {
      this.pauseStatue = true
      this.controls = false
    },
    switchHandle () {
      this.player.switchVideo({
        url: 'http://static.smartisanos.cn/common/video/video-jgpro.mp4'
      })
    },
    end () {
      console.log('end')
      this.pauseStatue = true
      this.controls = false
    },
    progress (event) {
      console.log(event)
    }
  }
}
</script>
<style lang="stylus">
@import '~@/assets/stylus/index';
.tt-palyer
    position relative
    border 1px solid
    border-color color3
    br(2px)
    mtb(15px)
    .play-btn
        position: absolute;
        top: 50%;
        left: 50%;
        z-index 10
        text-align:center;
        color:#fff;
        font-size: 63px;
        transform: translate(-50%, -50%);
    .player
        border-radius 2px

</style>
