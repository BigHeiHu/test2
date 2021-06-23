<template>
  <div class="heihu-wrapper">
  <div v-for="(item,index) in recommendInfo" :key="index" class="heihu clearfix"> 
      <img :src="item.image" alt="" >
      <div class="goods-info">
      <p>{{item.title}}</p>
      <span class="price">{{item.price}}</span>
      <span class="collect">{{item.cfav}}</span>
    </div> 
  </div>
  <!-- <h2>hahaha</h2> -->
  </div>
</template>

<script>
export default {
  name: "DetailRecommendInfo",
  props: {
    recommendInfo: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>

.heihu-wrapper{
overflow: hidden;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
background-color: #fff;
}
.heihu{
  width: 48%;
  /* height: 48%; */
  position: relative;
  padding-bottom: 44px;
  /* display: inline-block; */
/* 
  margin-left:4px;
  margin-top: 5px; */
}

.heihu img{
  width: 100%;
  border-radius: 5px;
}
.goods-info{
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
  
}
.goods-info p{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  
}
.goods-info .price{
  color:var(--color-high-text);
  margin-right: 20px; 
}
.goods-info .collect{
  position: relative;
}

.goods-info .collect::before{
  content: '';
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  /* height: 14px; */
  background:url('~assets/img/common/collect.svg') 0 0/14px 14px;
}
.clearfix:after {
content: ".";
display: block;
height: 0;
font-size: 0;
clear: both;
visibility: hidden;
}
  
.clearfix {
zoom: 1;
}
</style>