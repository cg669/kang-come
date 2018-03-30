<template>
  <div class="content">
      <div class="layout">
          <SpecialGoods />
          <SpecialGoodsRow :specialGoodsRow='specialGoodsRow' :titleColor='titleColor' :titleName='titleName' />
      </div>
  </div>
</template>
<script>
import SpecialGoods from '../../common/specialGoods'
import SpecialGoodsRow from '../../common/specialGoodsRow'
import imgmid from '../../image/imgmid.png'
export default {
    components:{
        SpecialGoods,
        SpecialGoodsRow
    },
    data(){
        return {
            specialGoodsRow:[
                {id:0,imgSrc: imgmid, info: '长寿花  非转基因  食用油  金杯玉米油4L',link:'/',price:'59.90',num:'30'},
                {id:1,imgSrc: imgmid, info: '长寿花  非转基因  食用油  金杯玉米油4L',link:'/',price:'59.90',num:'30'},
                {id:2,imgSrc: imgmid, info: '长寿花  非转基因  食用油  金杯玉米油4L',link:'/',price:'59.90',num:'30'},
                {id:3,imgSrc: imgmid, info: '长寿花  非转基因  食用油  金杯玉米油4L',link:'/',price:'59.90',num:'30'}
            ],
            titleName:'精品购',
            titleColor:'#1dbfe9'
        }
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

