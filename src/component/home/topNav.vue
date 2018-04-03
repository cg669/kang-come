<template>
  <div class="top-nav">
      <ul class="layout">
          <li v-for="(el,index) in topnav" :key="index" v-bind:style="{ width: 1200/topnav.length+'px' }" @click="handleToNav(el.link)" class="left">
              <router-link :to="el.link">
                  <span :class="{ 'active': ( activeNav === el.link)}">
                      {{el.name}}
                  </span>
              </router-link>
          </li>
      </ul>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            topnav:[
                {link: '/',name:'首页'},
                {link: '/overseas',name:'海外购'},
                {link: '/timebuy',name:'限促购'},
                {link: '/manage',name:'健康管家'},
                {link: '/smallapp',name:'小程序'},
                {link: '/app',name:'APP'},
                {link: '/partner',name:'商家入驻'}
            ]
        }
    },
    methods:{
        handleToNav(link){
            this.$store.dispatch('SetActiveNav',link)
        }
    },
    computed: {
        ...mapGetters([
            'activeNav'
        ]) 
    },
    mounted() {
        const path = this.$route.path
        this.$store.dispatch('SetActiveNav', path)
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
