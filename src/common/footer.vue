<template>
  <div class="footer">
    <ul class="layout content">
        <li v-for="(item,key) in footerData" :key="key">
            <router-link :to="item.link">
                {{item.name}}
            </router-link>
        </li>
    </ul>
  </div>
</template>
<script>
export default {
    data() {
        return {
            footerData:[
                {link: '/', name: '关于我们'},
                {link: '/', name: '联系我们'},
                {link: '/', name: '友情链接'},
                {link: '/', name: '手机客服端'},
                {link: '/', name: '人才招聘'},
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
 @import '../style/common.scss';
.footer{
    .content{
        display: flex;
        height: 214px;
        align-items: center;
        li{
            flex: 1;
            text-align: center;
            font-size: 20px;
            color:#23272a;
        }
    }
}
</style>

