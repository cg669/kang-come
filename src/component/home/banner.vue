<template>
  <div class="banner">
      <div class="layout">
          <div class="tit">
              商品分类
          </div>
          <ul class="goods-list">
              <li v-for="(el,index) in goodsList" :key="index">
                  <router-link :to="el.link">
                      <i><img :src="el.imgSrc" :alt="el.name" height="20px"></i>
                      <span>{{el.name}}</span>
                  </router-link>
              </li>
          </ul>
      </div>
  </div>
</template>
<script>
import baojian from '../../image/baojian.png'
import jingpin from '../../image/jingpin.png'
import liangyou from '../../image/liangyou.png'
import shengxian from '../../image/shengxian.png'
import yingyang from '../../image/yingyang.png'
export default {
    data() {
        return {
            goodsList:[
                {link: '/', name: '粮油',imgSrc:liangyou},
                {link: '/', name: '营养',imgSrc:yingyang},
                {link: '/', name: '保健',imgSrc:baojian},
                {link: '/', name: '生鲜',imgSrc:shengxian},
                {link: '/', name: '精品购',imgSrc:jingpin},
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
 @import '../../style/common.scss';
.banner{
    margin-top: 40px;
    height: 550px;
    width: 100%;
    background: url('../../image/banner.png') no-repeat center;
    background-size: contain;
    .tit{
        font-size: 24px;
        color: #abcd12;
        text-align: center;
        line-height: 70px;
        background-color: #fff;
        width: 255px;
    }
    .goods-list{
        height: 480px;
        padding-top: 20px;
        background-color: rgba($color: #fff, $alpha: .8);
        width: 255px;
        li{
            vertical-align: middle;
            font-size: 21px;
            color: #31332a;
            text-align: center;
            margin-bottom: 70px;
            i,span{
                vertical-align: middle;
            }
        }
    }
}
</style>

