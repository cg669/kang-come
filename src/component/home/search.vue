<template>
  <div class="search">
      <div class="layout">
          <h1>
              <img src="../../image/logo.png" alt="康come">
          </h1>
          <div class="search-box">
              <div class="search-input left">
                  <input v-model="value" placeholder="在此输入你想要的商品" style="width: 406px;height:48px;border:0" />
              </div>
              <div class="search-btn left">
                  <button>搜索</button>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
export default {
    data(){
        return {
            value: ''
        }
    }
}
</script>
<style lang="scss" scoped>
 @import '../../style/common.scss';
.search{
    padding: 16px;
    .layout{
        height:68px;
        vertical-align: middle;
        .search-box{
            position: absolute;
            left: 50%;top: 8px;
            margin-left: -225px;
            border: 2px solid #abcd12;
            font-size: 16px;
            border-radius: 6px;
            font-weight: 500;
            overflow: hidden;
            .search-input{
                padding: 0 20px;
            }
            .search-btn{
                button{
                    width: 88px;
                    height: 48px;
                    line-height: 48px;
                    text-align: center;
                    background-color: #abcd12;
                    color: #fff;
                }
            }
        }
    }
}
</style>

