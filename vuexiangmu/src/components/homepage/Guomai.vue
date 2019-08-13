<template>
    <div class="Guomai">
      <van-nav-bar
        title="购买记录"
        left-text="<"
        left-arrow
        @click-left="onClickLeft"
      />
            <div class="left">
              <img src="../../assets/img/4.png" alt="">
              <p>没有购买记录</p>
            </div>
    </div>
</template>

<script>
    export default {
        name: "Guomai",
      methods:{
        onClickLeft(){
          this.$router.go(-1);
        }
      }
    }
</script>

<style scoped>
  .Guomai{
    width: 100%;
    height: 100%;
  }
  .van-nav-bar{
    background-color: cornflowerblue;
    width: 100%;
    height: 8%;
    color: white;
    text-align: center;
  }
  .van-nav-bar__title{
    color: white;
    font-size: 0.2rem;
  }
  .left{
    position: absolute;
    top: 40%;
    padding: 0;
    width: 100%;
    height: 90%;
    text-align: center;
    display: table-cell;
    vertical-align:middle;
    font-size: 0.2rem;
  }
  img{
    width: 30%;
    height: 20%;
  }
  .van-nav-bar__text{
    color: white;
    font-size: 0.2rem;
  }
</style>
