<template>
  <div class="tab-control">
    <div  v-for="(item,index) in titles" :key="item"
    :class="{active:(index === currentIndex)}" @click="choose(index)"
    class="tab-control-item">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:"TabControl",
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      currentIndex:0
    }
  },
  methods: {
    choose(index){
      this.currentIndex = index
      this.$emit('choose',index)
    }
  }
}
</script>

<style scoped>
  .tab-control{
    display: flex;
    text-align: center;
    height: 40px;
    line-height:40px;
    font-size: 15px;
    background-color: #fff;
    z-index: 9;
  }
  .tab-control-item{
    flex: 1;
  }
  .tab-control-item span{
    padding: 4px;
  }
  .active{
    color:var(--color-high-text);
    
  }
  .active span{
    border-bottom: 3px var(--color-high-text) solid;   
  }
</style>