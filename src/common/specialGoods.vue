<template>
  <div>
      <GoodTit color="#d61a1a" tit="今日优选" linkUrl=“/” />
      <div class="special-goods">
          <ul class="left xiao-tu">
              <li v-for="(el,key) in specialGoods.left" :key="key" @mouseenter="activeGood=el.id" :class="{ 'active': ( activeGood === el.id)}">
                  <router-link :to="el.link">
                     <div class="pic">
                         <img :src="el.imgSrc" alt="">
                     </div>
                     <div class="info">{{el.info}}</div>
                     <div class="price">
                         <span class="left">{{el.num}}万购买</span>
                         <span class="right">￥{{el.price}}</span>
                     </div>
                  </router-link>
              </li>
          </ul>
          <ul class="right da-tu">
              <li  v-for="(el,key) in specialGoods.right" :key="key" @mouseenter="activeGood=el.id" :class="{ 'active': ( activeGood === el.id)}">
                  <router-link :to="el.link">
                     <div class="pic">
                         <img :src="el.imgSrc" alt="">
                     </div>
                     <div class="info">{{el.info}}</div>
                     <div class="price">
                         <span class="left">{{el.num}}万购买</span>
                         <span class="right">￥{{el.price}}</span>
                     </div>
                  </router-link>
              </li>
          </ul>
      </div>
  </div>
</template>
<script>
import imgbig from '../image/imgbig.png'
import imgmid from '../image/imgmid.png'
import imgsmall from '../image/imgsmall.png'
import GoodTit from './goodTit'
export default {
   data(){
       return {
           activeGood: 0,
           specialGoods:{
               left:[
                    {id:0,imgSrc: imgsmall, info: '长寿花  非转基因  食用油  金杯玉米油4L',link:'/',price:'59.90',num:'30'},
                    {id:1,imgSrc: imgsmall, info: '长寿花  非转基因  食用油  金杯玉米油4L',link:'/',price:'59.90',num:'30'},
                    {id:2,imgSrc: imgsmall, info: '长寿花  非转基因  食用油  金杯玉米油4L',link:'/',price:'59.90',num:'30'},
                    {id:3,imgSrc: imgsmall, info: '长寿花  非转基因  食用油  金杯玉米油4L',link:'/',price:'59.90',num:'30'}
                ],
                right:[
                    {id:4,imgSrc: imgbig, info: '长寿花  非转基因  食用油  金杯玉米油4L',link:'/',price:'59.90',num:'30'},
                    {id:5,imgSrc: imgbig, info: '长寿花  非转基因  食用油  金杯玉米油4L',link:'/',price:'59.90',num:'30'},
                ]
           }
       }
   },
   components:{
       GoodTit
   }
}
</script>
<style lang="scss" scoped>
@import '../style/common.scss';
.special-goods{
    overflow: hidden;
    .xiao-tu{
        width: 420px;
        li{
            float: left;
            width: 190px;
            height: 210px;
            margin-right: 20px;
            background-color: #fff;
            &:first-child{
                margin-bottom: 20px;
            }
            &:nth-child(2){
                margin-bottom: 20px;
            }
            .pic{
                text-align: center;
                height: 133px;
                width: 100%;
                padding-top: 20px;
                img{
                    width: 60px;
                }
            }
            .info{
                padding: 0 10px;
                font-size: 12px;
                color: #31332a;
                font-weight: bold;
            }
            .price{
                padding: 10px 10px;
                height: 50px;
                vertical-align: middle;
                .left{
                    vertical-align: middle;
                    font-size: 12px;
                    color: #a3a4a0;
                }
                .right{
                    position: relative;
                    top: -10px;
                    vertical-align: middle;
                    font-size: 18px;
                    color: #ff5d3b;
                    font-weight: bold;
                }
            }
        }
    }
    .da-tu{
        width: 680px;
        height: 440px;
        overflow: hidden;
        li{
            float: left;
            background: #fff;
            width: 330px;
            height: 440px;
            &:first-child{
                margin-right: 20px;
            }
            .pic{
                text-align: center;
                height: 279px;
                width: 100%;
                padding-top: 20px;
                img{
                    width: 120px;
                }
            }
            .info{
                padding: 0 20px;
                font-size: 24px;
                color: #31332a;
                font-weight: bold;
            }
            .price{
                padding: 10px 20px;
                height: 100px;
                vertical-align: middle;
                .left{
                    vertical-align: middle;
                    font-size: 24px;
                    color: #a3a4a0;
                    font-weight: bold;
                }
                .right{
                    position: relative;
                    top: -10px;
                    vertical-align: middle;
                    font-size: 38px;
                    color: #ff5d3b;
                    font-weight: bold;
                }
            }
        }
    }
}   
.active{
    box-shadow: 0 10px 38px 0 rgba(200,0,50,.09);
}
</style>

