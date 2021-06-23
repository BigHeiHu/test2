<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav"></detail-nav-bar>
    <!-- <div class="wrapper"> -->
    <scroll class="content" ref="scroll" :probe-type=3 @scroll="contentScroll">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-param-info ref="params" :param-info="paramInfo"></detail-param-info>
      <detail-comment-info ref="comment" :comment-info="commentInfo"></detail-comment-info>
      <detail-recommend-info ref="recommend" :recommend-info="recommendInfo"></detail-recommend-info>
    </scroll>
    <!-- </div> -->
    <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>

    <!-- <toast :message="message" :show="show"></toast> -->
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar.vue'
import DetailSwiper from './childComps/DetailSwiper.vue'
import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
import DetailShopInfo from './childComps/DetailShopInfo.vue'
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
import DetailParamInfo from './childComps/DetailParamInfo.vue'
import DetailCommentInfo from './childComps/DetailCommentInfo.vue'
import DetailRecommendInfo from './childComps/DetailRecommendInfo.vue'
import DetailBottomBar from './childComps/DetailBottomBar.vue';
import BackTop from 'components/common/backTop/BackTop';

// import Toast from 'components/common/toast/Toast'


import {getDetail,Goods,Shop,GoodsParam,getRecommend} from 'network/detail'
import Swiper from 'components/common/swiper/Swiper.vue'
import Scroll from 'components/common/scroll/Scroll.vue'

import {debounce} from 'common/utils'
export default {
  name:"Detail",

  data(){
    return {
      iid:null,
      topImages:[],
      goods:{},
      shop:{},
      detailInfo:{},
      paramInfo:{},
      commentInfo:[],
			recommendInfo:[],
      themeTopYs:[],
      getThemeTopY:null,
      currentIndex:0,
      isShowBackTop:false,
      // goodsInfo:{}
      message:'',
      show:false
    }
  },
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    Swiper,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailRecommendInfo,
    DetailBottomBar,
    BackTop,
    // Toast
  },
  created() {
    this.iid = this.$route.params.iid
    getDetail(this.iid).then(res => {
      // console.log(res);
      const data = res.result
      console.log(data);
      this.topImages = data.itemInfo.topImages
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
      this.shop = new Shop(data.shopInfo)
      this.detailInfo = data.detailInfo
      this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)
      // this.goodsInfo = data.itemInfo.desc
      if(data.rate.cRate !== 0){
        this.commentInfo = data.rate.list
      }
      // this.$nextTick(() => {
      // this.themeTopYs = []
      // this.themeTopYs.push(0)
      // this.themeTopYs.push(this.$refs.params.$el.offsetTop)
      // this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      // this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
      // console.log(this.themeTopYs);
    // })
    })
    
    getRecommend().then(res => {
      // console.log(res);
			this.recommendInfo = res.data.list 
		})
    this.getThemeTopY = debounce(() => {
      this.themeTopYs = []
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.params.$el.offsetTop)
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
      // console.log(this.themeTopYs);
    })
  },
  methods: {
    imageLoad(){
    //   const refresh = debounce(this.$refs.scroll.refresh,0) 
        
    //   this.$refs.scroll.refresh()
    // }
      this.$refs.scroll.refresh()
      // console.log(1);
      // console.log(1);.
      this.getThemeTopY()
    },
    addToCart(){
      // console.log(123);
      const product = {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.iid = this.iid

      this.$store.dispatch('addCart',product).then(res => {
        console.log(res);
      //   this.show = true
      //   this.message = res
      //   setTimeout(() => {
      //     this.show = false;
      //     this.message = ''
      //   },1000)
        this.$toast.show(res,1000)
      })
    },
    backClick(){
     this.$refs.scroll.scrollTo(0,0,500)
    },
    titleClick(index){
      this.$refs.scroll.scrollTo(0,-this.themeTopYs[index]+44,200)
    },
    contentScroll(position){
      // console.log(position);
      const positionY = -position.y 
      let length = this.themeTopYs.length
      this.isShowBackTop = (-position.y) > 1000
      for(let i = 0;i < length; i++){
        if(this.currentIndex !== i &&((i<length - 1 && positionY >= this.themeTopYs[i]-44 && positionY < this.themeTopYs[i+1]-44) ||
         (i === length-1 && positionY >= this.themeTopYs[i]-44))){
          this.currentIndex = i
          console.log(this.currentIndex);
          this.$refs.nav.currentIndex = this.currentIndex
        }
      }

    }
  },
  mounted() {
    
  },
}
</script>

<style scoped>
#detail{
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
  /* padding-top: 44px; */
}
.detail-nav{
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content{
  height: calc(100% - 93px);
  overflow: hidden;
}
/* .wrapper{
  height: calc(100% - 44px);
} */
</style>