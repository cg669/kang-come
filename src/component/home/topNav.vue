<template>
  <div class="top-nav">
      <ul class="layout">
          <li v-for="(el,index) in topnav" :key="index" v-bind:style="{ width: 1200/topnav.length+'px' }" @mouseenter="activeNav=el.name" class="left">
              <router-link :to="el.link">
                  <span :class="{ 'active': ( activeNav === el.name)}">
                      {{el.name}}
                  </span>
              </router-link>
          </li>
      </ul>
  </div>
</template>
<script>
export default {
    data() {
        return {
            topnav:[
                {link: '/',name:'首页'},
                {link: '/',name:'海外购'},
                {link: '/',name:'限促购'},
                {link: '/',name:'健康管家'},
                {link: '/',name:'小程序'},
                {link: '/',name:'APP'},
                {link: '/',name:'商家入驻'}
            ],
            activeNav: '首页'
        }
    }
}
</script>
<style lang="scss" scoped>
 @import '../../style/common.scss';
.top-nav{
    ul{
        overflow: hidden;
        li{
            font-size: 18px;
            color: #3c3e33;
            text-align: center;
            span{
                display: inline-block;
                padding-bottom: 6px;
                border-bottom: 2px solid #fff;
            }
            .active{
                transition: 0.03s;
                border-bottom: 2px solid #abcd12;
            }
        }
    }
}

</style>
