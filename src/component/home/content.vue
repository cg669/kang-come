<template>
  <div class="content">
      <div class="layout">
          <SpecialGoods />
          <SpecialGoods />
      </div>
  </div>
</template>
<script>
import SpecialGoods from '../../common/specialGoods'
export default {
    components:{
        SpecialGoods
    }
}
</script>
<style lang="scss" scoped>
 @import '../../style/common.scss';
.content{
    padding: 40px 0 0;
    background-color: #f7f7f7;
}
</style>

