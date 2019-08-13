<template>
    <div class="jifei" @click="addr">
       <p>请重新进入</p>
      <p class="abc">请返回后重新进入积分商城</p>
      <img src="../../assets/img/5.jpg" alt="">
    </div>
</template>

<script>
    export default {
        name: "jifei",
      methods:{
        addr(){
          this.$router.go(-1);
        }
      }
    }
</script>

<style scoped>
.jifei{
  width: 100%;
  height: 100%;
}
.abc{
  color: black;
  font-size: 0.1rem;
  margin-top: 0.1rem;
}
  .jifei{
    color:blue;
    font-size: 0.3rem;
    text-align: center;
   margin-top: 2rem;
  }
img{
  width: 50%;
  height: 30%;
  margin-top: 0.1rem;
}
</style>
