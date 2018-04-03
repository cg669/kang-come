<template>
    <div class="index">
        <CommonNav />
        <SearchBox />
        <TopNav />
        <Banner />
        <Content />
        <CommonFooter />
    </div>
</template>
<script>
import CommonNav from '../common/nav.vue'
import CommonFooter from '../common/footer.vue'
import SearchBox from '../component/home/search.vue'
import TopNav from '../component/home/topNav.vue'
import Banner from '../component/timebuy/banner.vue'
import Content from '../component/timebuy/content.vue'
export default {
    components:{
        CommonNav,
        SearchBox,
        TopNav,
        Banner,
        Content,
        CommonFooter
    },
    methods: {
        handleStart() {
            
        }
    }
};
</script>