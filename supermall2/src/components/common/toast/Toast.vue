<template>
  <div v-show="isShow" class="toast">
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  name:"Toast",

  // props:{
  //   message:{
  //     type:String,
  //     default:""
  //   },
  //   show:{
  //     type:Boolean,
  //     default:false
  //   },
  data() {
    return {
      message:'',
      isShow:false
    }
  },
    methods: {
      show(message,duration=5000){
        this.isShow =true;
        this.message = message
        setTimeout(() => {
          this.isShow = false
          this.message = ''
        }, duration);
      }
    },
    
  }

</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* background-color: red; */
  color: #fff;
  padding: 8px 10px;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
}
</style>