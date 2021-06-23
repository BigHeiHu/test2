<template>
  <div class="bottom-bar">
    <div class="check-content">
    <check-button 
    :is-checked="isSelectAll" 
    class="check-button"
    @click.native="checkClick"
    ></check-button>
    <span>全选</span>
    </div>
    <div class="price">
      合计:{{totalPrice}} 
    </div>
    <div class="cacluate" @click="calcClick"> 
      去计算({{checkedLength}})
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton';

export default {
  name:"CartBottomBar",
  components:{
    CheckButton
  },
  computed:{
    totalPrice(){
      return '￥' + this.$store.state.cartList.filter(item => {
        return item.checked
      }).reduce((preValue,item) => {
        return preValue + item.price * item.count
      },0).toFixed(2)
    },
    checkedLength(){
      return this.$store.state.cartList.filter(item => item.checked).length
    },
    isSelectAll(){
      // return !(this.$store.state.cartList.filter(item => !item.checked).length)
      // return !this.$store.state.cartList.find(item => !item.checked)
      // return this.$store.state.cartList.filter(item => item.checked).length === this.$store.state.cartList.length
      if(this.$store.state.cartList.length === 0){return false}
      return !this.$store.state.cartList.find(item => !item.checked)     
    }
  },
  methods: {
    checkClick(){
      // console.log(1);
      if(this.isSelectAll){
        this.$store.state.cartList.forEach(item => item.checked = false)
      }else{
        this.$store.state.cartList.forEach(item => item.checked = true)
      }
    },
    calcClick(){
      if(!this.isSelectAll){
        this.$toast.show('请选择购买的商品',2000)
      }
    }
  },
}
</script>

<style scoped>
.bottom-bar{
  height: 40px;
  background-color: #eee;
  position: relative;
  display: flex;
  /* bottom: 40px; */
  line-height: 40px;
}
.check-content{
  display: flex;
  align-items: center;
  width:80px;
}
.check-button{
  width: 20px;
  height: 20px;
  line-height: 20px;
  margin-left: 10px;
  margin-right: 5px;
}
.price{
  margin-left: 30px;
  flex: 1;
}
.cacluate{
  width: 90px;
  background-color: red;
  color: #fff;
  text-align: center;
}
</style>