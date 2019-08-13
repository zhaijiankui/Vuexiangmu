<template>
    <div>
      <van-nav-bar
        title="订单"
        left-arrow
        @click-left="onClickLeft"
      />
      <!--<One></One>-->
    </div>
</template>

<script>
    // import one from "../shopping/One"
    export default {
        name: "Order_zwq",
      // components: {One},
      methods:{
        onClickLeft(){
          this.$router.go(-1)
        },
        topayment(){
          this.$router.push({path:"/payment"})
        },
        created(){
          this.$store.commit('changeTab',2);
        },
      }
    }
</script>

<style scoped>
  
  .van-nav-bar__title{
    color: white;
    font-weight:700;
    font-size: 0.18rem;
  }
  .van-nav-bar{
    background: #3190e8;

  }
  .van-icon {
    color: white;
    font-size: 0.25rem;
    margin-left: -100%;
  }
</style>
