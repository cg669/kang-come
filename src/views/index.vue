<template>
    <div class="index">
        <commonNav />
        <searchBox />
    </div>
</template>
<script>
import commonNav from '../common/nav.vue'
import searchBox from '../component/home/search.vue'
export default {
    components:{
        commonNav,
        searchBox
    },
    methods: {
        handleStart() {
            
        }
    }
};
</script>