<template>
  <div class="tit">
      <div class="left">
          <span class="bar" v-bind:style="{ backgroundColor: color }"></span>
          <span>{{tit}}</span>
      </div>
      <div class="right">
          <router-link :to="linkUrl">
            <span class="more">
                    查看全部
            </span>
            <span>></span>
           </router-link>
      </div>
  </div>
</template>
<script>
export default {
    props:{
        color:{
            type:String,
            default: '#000'
        },
        tit:{
            type:String,
            default: '今日优选'
        },
        linkUrl: {
            type:String,
            default: '/'
        }
    }
}
</script>
<style lang="scss" scoped>
 @import '../style/common.scss';
.tit{
    overflow: hidden;
    padding-left:20px;
    line-height: 80px;
    font-size: 24px;
    color: #31332a;
    .bar{
        height: 24px;
        width: 6px;
    }
    .more{
        cursor: pointer;
        padding-right: 6px;
    }
}
</style>

