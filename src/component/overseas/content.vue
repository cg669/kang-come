<template>
  <div class="content">
      <div class="layout">
          <SpecialGoodsRow :specialGoodsRow='specialGoodsRow' :titleColor='titleColor' :titleName='titleName' />
      </div>
  </div>
</template>
<script>
import SpecialGoodsRow from '../../common/specialGoodsRow'
import imgmid from '../../image/over.png'
export default {
    components:{
        SpecialGoodsRow
    },
    data(){
        return {
            specialGoodsRow:[
                {id:0,imgSrc: imgmid, info: '长寿花  非转基因  食用油  金杯玉米油4L',link:'/',price:'59.90',num:'30'},
                {id:1,imgSrc: imgmid, info: '长寿花  非转基因  食用油  金杯玉米油4L',link:'/',price:'59.90',num:'30'},
                {id:2,imgSrc: imgmid, info: '长寿花  非转基因  食用油  金杯玉米油4L',link:'/',price:'59.90',num:'30'},
                {id:3,imgSrc: imgmid, info: '长寿花  非转基因  食用油  金杯玉米油4L',link:'/',price:'59.90',num:'30'},
                {id:4,imgSrc: imgmid, info: '长寿花  非转基因  食用油  金杯玉米油4L',link:'/',price:'59.90',num:'30'},
                {id:5,imgSrc: imgmid, info: '长寿花  非转基因  食用油  金杯玉米油4L',link:'/',price:'59.90',num:'30'},
                {id:6,imgSrc: imgmid, info: '长寿花  非转基因  食用油  金杯玉米油4L',link:'/',price:'59.90',num:'30'},
                {id:7,imgSrc: imgmid, info: '长寿花  非转基因  食用油  金杯玉米油4L',link:'/',price:'59.90',num:'30'},
                {id:8,imgSrc: imgmid, info: '长寿花  非转基因  食用油  金杯玉米油4L',link:'/',price:'59.90',num:'30'},
                {id:9,imgSrc: imgmid, info: '长寿花  非转基因  食用油  金杯玉米油4L',link:'/',price:'59.90',num:'30'},
                {id:10,imgSrc: imgmid, info: '长寿花  非转基因  食用油  金杯玉米油4L',link:'/',price:'59.90',num:'30'},
                {id:11,imgSrc: imgmid, info: '长寿花  非转基因  食用油  金杯玉米油4L',link:'/',price:'59.90',num:'30'},
                {id:12,imgSrc: imgmid, info: '长寿花  非转基因  食用油  金杯玉米油4L',link:'/',price:'59.90',num:'30'},
                {id:13,imgSrc: imgmid, info: '长寿花  非转基因  食用油  金杯玉米油4L',link:'/',price:'59.90',num:'30'},
                {id:14,imgSrc: imgmid, info: '长寿花  非转基因  食用油  金杯玉米油4L',link:'/',price:'59.90',num:'30'},
                {id:15,imgSrc: imgmid, info: '长寿花  非转基因  食用油  金杯玉米油4L',link:'/',price:'59.90',num:'30'},
                {id:16,imgSrc: imgmid, info: '长寿花  非转基因  食用油  金杯玉米油4L',link:'/',price:'59.90',num:'30'},
                {id:17,imgSrc: imgmid, info: '长寿花  非转基因  食用油  金杯玉米油4L',link:'/',price:'59.90',num:'30'},
                {id:20,imgSrc: imgmid, info: '长寿花  非转基因  食用油  金杯玉米油4L',link:'/',price:'59.90',num:'30'},
                {id:21,imgSrc: imgmid, info: '长寿花  非转基因  食用油  金杯玉米油4L',link:'/',price:'59.90',num:'30'}
            ],
            titleName:'海外购',
            titleColor:'#1dbfe9'
        }
    }
}
</script>
<style lang="scss" scoped>
 @import '../../style/common.scss';
.content{
    padding: 40px 0 30px;
    background-color: #f7f7f7;
}
</style>

