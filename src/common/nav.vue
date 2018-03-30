<template>
  <div class="nav">
        <div class="left"><a href="/" class="home">康come首页</a></div>
        <ul class="right nav-right">
            <li>
                <router-link to="/">请登录</router-link>
            </li>
            <li>
                <router-link to="/">免费注册</router-link>
            </li>
            <li>
                <router-link to="/">
                    <img src="../image/car.png" alt="购物车">
                    <i>我的订单</i>
                </router-link>
            </li>
            <li>
                <router-link to="/">我的消息</router-link>
            </li>
            <li>
                <router-link to="/">客服电话</router-link>
            </li>
        </ul>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
    @import '../style/common.scss';
    .nav{
        padding: 0 50px;
        overflow: hidden;
        line-height: 36px;
        color: #818181;
        font-size: 12px;
        background-color:#f8f8f8;
        .home{
            color: #818181;
            font-size: 12px;
        }
        .nav-right{
            overflow: hidden;
            li{
                vertical-align: middle;
                float: left;
                margin-right: 20px;
                &:last-child{
                    margin: 0;
                }
                a{
                    color: #818181;
                    vertical-align: middle;
                }
                img{
                    vertical-align: middle;
                }
                i{
                    font-style: normal;
                }
            }
        }
    }
</style>
