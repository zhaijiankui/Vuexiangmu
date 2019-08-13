<template>
  <div class="header">
    <div>
      <van-nav-bar
        title="会员中心"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
    <div class="content">
      <p class="cont-dl">为{{name}}购买会员</p >
    </div>
    <div>
      <van-cell title="会员特权" is-link url="//youzan.github.io/vant/mobile.html" class="van" value="会员说明"/>
      <div class="content-all">
        <div class="cont-img">
          <img src="../../assets/img/2.png" alt="" class="img">
        </div>
        <div class="cont-right">
          <h4>减免配送费</h4>
          <h6>每月减免30单，每日可减免3单，每单最少减免4元</h6>
          <h6>蜂鸟专送专享</h6>
        </div>
      </div>
      <van-divider class="fgx"/>
      <div class="content-all">
        <div class="cont-img">
          <img src="../../assets/img/3.png" alt="" class="img">
        </div>
        <div class="cont-right">
          <h4>减免配送费</h4>
          <h6>每月减免30单，每日可减免3单，每单最少减免4元</h6>
          <h6>蜂鸟专送专享</h6>
        </div>
      </div>
      <div class="content1">
        <van-cell :title="value" class="van1"/>
        <div class="content-footer">
          <p class="dl">一个月
            <span class="wz">￥20</span>
          </p >
        </div>
        <div class="con-btn">
          <van-button type="primary" size="mini" class="buy" @click="addAddress">购买</van-button>
        </div>
        <div class="employ"></div>
      </div>
    </div>
    <van-cell :title="value" is-link url="//youzan.github.io/vant/mobile.html" class="van" value="使用卡号卡密" @click="kaihao"/>
    <van-cell title="购买记录" is-link url="//youzan.github.io/vant/mobile.html" class="van2" value="开发票" @click="selectAddress"/>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        value:'兑换会员',
        name:'',
      }
    },
    mounted(){
     this.name=this.$route.query.names
    },
    methods: {
      selectAddress(){
        this.$router.push('/gho')
      },
      kaihao(){
        this.$router.push({path:'/divip',query:{name:this.name,name1:this.value}})
      },
      addAddress(){
        this.$router.push({path:'/pay'})
      },
      onClickLeft() {
        this.$router.go(-1)
      },
      onClickRight() {
        // Toast('返回');
      },
    }
  }
</script>

<style scoped>
  .account{
    position: absolute;
    left: 8%;
  }
  .header{
    width: 100%;
  }
  .content-all{
    height: 91.5px;
    background-color: white;
  }
  .content{
    width: 100%;
    height: 30%;
    margin-left: 5%;
    margin-top: 5%;
  }
  .account{
    width: 100%;
    height: 15%;
    background-color: #f5f5f5;
  }
  .img{
    width: 0.4rem;
    margin-left: 3%;
    margin-top: 5%;
  }
  div>h5{
    color: #333;
  }
  h6{
    margin-top: 0.07rem;
    color: #999999;
  }
  .cont-right{
    width: 10rem;
    display: block;
    padding-left: 0.7rem;
    margin-top: -0.6rem;
    margin-bottom: 0.2rem;
  }
  .van{
    border-bottom: 1px solid #f5f5f5;
    line-height: 24px;
  }
  .van2{
    margin-top: .1rem;
  }
  .van-divider{
    margin: 0;
  }
  .cont-img{
    margin-bottom: 0.1rem;
  }
  .con-btn{
    float: right;
  }
  .content-footer{
    float: left;
    height: .7rem;

  }
  .dl{
    margin-top: 0.2rem;
    margin-left: 0.2rem;
  }
  .content-footer>div{
    display: block;
    margin-top: 0.1rem;
  }
  .wz{
    color: red;
    font-weight: bold;
  }
  .content1{
    height: 1rem;
    margin-top: .1rem;
    background-color: white;
  }
  .buy{
    width: .6rem;
    height: .3rem;
    font-size: .15rem;
    display: inline-block;
    margin-top: 0.15rem;
    margin-left: 1rem;
    color: red;
    background-color: white;
    border: 1px solid red;
    border-radius: 0.05rem;
  }
  .con-btn{
    margin-right: .4rem;
  }
  .employ{
    clear: both;
  }
  .cont-dl{
    margin-top: .1rem;
    margin-bottom: .15rem;
  }
</style>
