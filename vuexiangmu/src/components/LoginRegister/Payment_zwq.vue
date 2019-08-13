<template>
    <div class="root_payment">
      <!--头部导航条-->
      <div>
        <van-nav-bar
          title="在线支付"
          left-arrow
          @click-left="onClickLeft"
        />
      </div>

      <div class="box1">
        <p class="p1">支付剩余时间</p>
        <div class="box2">
          <van-count-down :time="time" />
        </div>
      </div>
      <div class="box3">
        <p class="p2">选择支付方式</p>
      </div>

      <div class="box4">
        <!--<van-radio-group v-model="radio">-->
          <div class="box5">
            <img src="../shopping/zhifubao.png" alt="">
            <span class="s1">支付宝</span>
            <van-radio-group v-model="radio" class="pull-right radio1">
              <van-radio name="1" checked-color="#07c160"></van-radio>
            </van-radio-group>
          </div>
        <div class="box5">
          <img src="../shopping/weixin.png" alt="">
          <span class="s1">微信</span>
          <van-radio-group v-model="radio" class="pull-right radio1 ">
            <van-radio name="2" checked-color="#07c160"></van-radio>
          </van-radio-group>

        </div>
      </div>
      <div class="box_btn">
        <button class="btn btn-success" @click="btnconfirm">确认支付</button>
      </div>
      <transition name="fade">
        <div class="popup" v-if="reveal">
          <!--圆圈-->
          <div class="popup_box1">
            <span class="popup_s1"></span>
            <span class=" popup_s2"></span>
          </div>
          <p>当前环境无法支付，请打开官方APP进行付款</p>
          <div class="popup_box2" @click="close">
            确认
          </div>
        </div>
      </transition>

      <!--<main_one_zwq></main_one_zwq>-->
    </div>
</template>

<script>

    // import Main_one_zwq from "./One";
    export default {
        name: "Payment_zwq",
      // components: {Main_one_zwq},
      data(){
        return{
          time:  15 * 60 * 1000,
          radio:"1",
          reveal:false
        }
      },
      methods:{
        onClickLeft(){
          this.$router.go(-1)
        },
        close(){
          this.reveal=false
          this.$router.push({path:"/download"})
        },
        btnconfirm(){
          if(this.radio==1){
            console.log("当前是支付宝支付")
            this.reveal=true
            // this.$router.push({path:"/download"})
          }else {
            console.log("当前是微信支付")
            this.reveal=true

          }
        }
      },
      //下方跳转索引 通过vuex变换存储
      created(){
        // this.$store.commit('changeTab', 2);
      },

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
  .box1{
    background: white;
    width: 100%;
    height: 1.48rem;
   text-align: center ;
    overflow: hidden;
  }
 .van-count-down{
   font-size: 0.3552rem;
   margin-top: 5%;
 }
  .p1{
    margin-top: 10%;
    font-size: 0.14rem;
    color: #666;
  }
  .p2{
    line-height: 0.4rem ;
    padding-left: 5%;
  }
  .box4{
    background: white;
    width: 100%;
    height: 1.60rem;
    /*line-height: 1.6rem;*/
    overflow: hidden;
  }
  .box4 img{
    width: 0.4699rem;
    height: 0.4699rem;;
      margin-left: 5%;
      margin-top: 5%;
    /*vertical-align: middle;*/


  }
  .box5{
    height: 50%;
    border-bottom: 1px solid  #f5f5f5;

  }
  .s1{
    display: inline-block;
    vertical-align: 0.15rem;
    margin-left: 2%;
  }
  .van-radio{
    display: inline-block;
  }

  .radio1{

    margin-top: 0.3rem;
    margin-right: 0.2rem;
    transform: scale(1.3,1.3);
  }
  .btn{
    width: 95%;
    background: #4cd964;
    line-height: 0.3rem;
  }
  .box_btn{
    text-align: center;
    margin-top: 0.1rem;
    font-size: 0.14rem;

  }


  /*弹出*/
  .popup{
    top: 28%;
    left: 10%;
    width: 80%;
    background: white;
    /*height: 100px;*/
    overflow: hidden;
    position: absolute;

  }
  .popup p{
    text-align: center;
    margin-top: 5%;
    font-size: 0.16rem;
    color: #333;
  }
  .popup_box1{
    border: 3px solid #f8cb86;
    border-radius: 50%;
    width: 0.8rem;
    height: 0.8rem;
    margin: 0 auto;
    margin-top: 5%;
  }
  .popup_s1{
    display: inline-block;
    background: #f8cb86;
    width: 0.03rem;
    height: 0.4rem;
    margin-left: 48%;
    margin-top: 10%;
  }
  .popup_s2{
    display: inline-block;
    background: #f8cb86;
    width: 0.03rem;
    height: 0.05rem;
    margin-left: 48%;
    border-radius: 50%;
    margin-bottom: 4px;
  }
  .popup_box2{
    background: #4cd964;
    text-align: center;
    line-height: 0.42rem;
    color: white;
    margin-top: 5%  ;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  .fade-enter, .fade-leave-to{
    opacity: 0;
  }
  .fade-enter-active, .fade-leave-active{
    animation: one .4s ease-in-out forwards;

  }


  @keyframes one {
    0%{
      transform: scale(0.9,0.9);
    }
    50%{
      transform: scale(1.1,1.1);
    }
    75%{
      transform: scale(0.9,0.9);
    }
    100%{
      transform: scale(1.1,1.1);
    }
  }
</style>
