<template>
  <div>
    <van-nav-bar
      title="搜索"
      left-arrow
      @click-left="onClickLeft"
    />
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: "nav",
      methods:{
        onClickLeft(){
          this.$router.go(-1)
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
