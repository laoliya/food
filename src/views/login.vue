<template>
    <div class="login">
      <log :centerDialogVisible="centerDialogVisible" v-if="isShow==1" @receive="receive"></log>
      <reg :centerDialogVisible="centerDialogVisible" v-if="isShow==2"></reg>
  </div>
</template>
<script>
import log from '@/components/home/log.vue'
import reg from '@/components/home/reg.vue'
  export default {
    components:{log,reg},
    props:{centerDialogVisible: false,},
    data() {
        return{
          isShow:1
        }
    },
methods: {
     show(){
        this.isShow=1;
      },
      myclose2(){
          this.$parent.myclose();
          this.isShow=1;
      }, 
      receive(data){
        this.isShow=data;
      }
    }
  }

   
</script>
<style>
</style>
