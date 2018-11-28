<template>
    <div id="info">
        <div>
            <TTcell title="修改头像">
                <div slot="value">
                    <img src="http://xingke100.com/logo.png" alt="">
                </div>
            </TTcell>
            <TTcell title="修改昵称" value="tian"></TTcell>
            <TTcell title="性别" value="nan"></TTcell>
            <TTcell title="生日" value="2018-09-09"></TTcell>
            <TTcell title="手机" value="13156521718"></TTcell>
            <TTcell title="邮箱" value="114845277"></TTcell>
        </div>
        <van-button size="large" round class="btn">确定</van-button>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="stylus">
@import '~@/assets/stylus/index';
avatar-size = 40px
#info
    height 100vh
    display flex
    flex-direction column
    justify-content space-between
    .btn
        color color255
        background color4 !important
        width: 80%;
        margin: auto;
</style>
