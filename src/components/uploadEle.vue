<template>
    <div class="upload-file-block">
        <input type="file" name="file">
        <div class="placeholder">
            <span v-if="!$slots.palceholder">上传文件</span>
            <slot name="palceholder"></slot>
        </div>
    </div>
</template>

<script>
export default {
  name: 'uploadfile',
  props: {},
  data () {
    return {

    }
  },
  methods: {
    change (event) {

    }
  }
}
</script>

<style lang="stylus" scoped>
    .upload-file-block
        min-width 60px
        min-height 40px
        position relative
        input, .placeholder
            display block
            top 0
            left 0
            width 100%
            height 100%
            z-index 2
        input
            position absolute
            opacity 0
        .placeholder
            z-index 1

</style>
