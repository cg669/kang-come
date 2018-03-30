<template>
    <div>
        <GoodTit :color="titleColor" :tit="titleName" linkUrl=“/” />
        <div class="special-goods">
          <ul class="special-goods-row">
              <li v-for="(el,key) in specialGoodsRow" :key="key" :class="{ 'active': ( activeGood === el.id)}" @mouseover="mouseoverEvent(el.id)">
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
import GoodTit from './goodTit'
export default {
    components:{
        GoodTit
    },
    data(){
        return {
           activeGood:'' 
        }
    },
    props:{
        titleColor:{
            type:String,
            default: '#000'
        },
        titleName:{
            type:String,
            default: '今日优选'
        },
        linkUrl: {
            type:String,
            default: '/'
        },
        specialGoodsRow: {
            type:Array,
            default:[]
        },
    },
    methods:{
        mouseoverEvent(id){
            this.activeGood=id;
        }
    }
}
</script>

<style lang="scss" scoped>
.special-goods{
    // padding: 0 50px;
    overflow: hidden;
    .special-goods-row{
        display: flex;
        flex-direction: row;
        li{
            width: 309px;
            height: 341px;
            float: left;
            display: flex;
            flex-direction:column;
            background: #ffffff;
            margin-right: 10px;
            .pic{
                text-align: center;
                height: 211px;
                width: 100%;
                padding-top: 20px;
                img{
                    width: 96px;
                }
            }
            .info{
                padding: 0 10px;
                font-size: 18px;
                color: #31332a;
                font-weight: bold;
            }
            .price{
                padding: 0px 10px;
                height: 67px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                vertical-align: middle;
                .left{
                    vertical-align: middle;
                    font-size: 18px;
                    color: #a3a4a0;
                }
                .right{
                    vertical-align: middle;
                    font-size: 28px;
                    color: #ff5d3b;
                    font-weight: bold;
                }
            }
        }
        li:active{
            box-shadow: 0 10px 38px 0 rgba(200,0,50,.09);
        }
    }
}
.active{
    box-shadow: 0 10px 38px 0 rgba(200,0,50,.09);
}
</style>


