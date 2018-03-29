<template>
  <div class="nav">
        <div class="left"><a href="/" class="home">康come首页</a></div>
        <ul class="right nav-right">
            <li>
                <a href="">请登录</a>
            </li>
            <li>
                <a href="">免费注册</a>
            </li>
            <li>
                <img src="../image/car.png" alt="购物车">
                <a href="">我的订单</a>
            </li>
            <li>
                <a href="">我的消息</a>
            </li>
            <li>
                <a href="">客服电话</a>
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
            }
        }
    }
</style>
