<template>
  <div>
    <div>
      <van-sticky>
        <van-nav-bar
          title="兑换红包"
          left-arrow
          @click-left="onClickLeft"
        />
      </van-sticky>
    </div>
    <div class="input1">
      <input type="text" v-model="exchange_code" placeholder="请输入兑换码" >
    </div>
    <div class="input2">
      <input type="text" v-model="captcha_code" placeholder="验证码" oninput="if(value.length > 4)value = value.slice(0,4)">
      <div class="code clearfix">
        <img :src="arrcon"  >
        <div class="div1">
          <p class="p1">看不清</p>
          <p class="p2" @click="changea">换一张</p>
        </div>
        <van-dialog
          v-model="show"
          title="标题"
          show-cancel-button
        >
          <img src="https://img.yzcdn.cn/vant/apple-3.jpg">
        </van-dialog>
      </div>
      <div class="btns">
        <button :style="{backgroundColor: color}" class="btn btn-success" @click="addMaps">兑换</button>
      </div>
    </div>
    <div class="border" v-if="abc">
      <!--图片-->
      <img src="../../assets/img/jiao.png" alt="" class="imga">
      <div class="message">请输入正确用户名</div>
      <button @click="yc" class="buttom123">确定</button>
    </div>
  </div>

</template>

<script>
  import Vue from "vue";
  export default {
    name: "Conversion_zwq",
    data(){
      return{
        arrcon:"",
        exchange_code:'',
        captcha_code:'',
         show:false,
        color:'grey',
      }
    },
    methods:{
      onClickLeft(){
        this.$router.go(-1)
      },
      changea(){

        this.$http({
          url:"https://elm.cangdu.org/v1/captchas",
          method:"post",
          withCredentials:true,
        }).then((res)=>{
          console.log(res.data)
          this.arrcon=res.data.code
        }).catch((err)=>{
          console.log(err)
        })

      },
      addMaps(){
        let _this=this
        if(_this.exchange_code.length>0&&_this.captcha_code.length>3){
          this.$http({
            url:"https://elm.cangdu.org/v1/users/:user_id/hongbao/exchange",
            method:"post",
            data:{
              user_id:36467,
              exchange_code:this.exchange_code,
              captcha_code:this.captcha_code,
            },
            withCredentials:true
          }).then(function (resluts) {
            console.log(resluts.data);
            _this.$dialog.alert({
              message: resluts.data.message
            });
          })
        }
      }
    },
    watch:{
      exchange_code(){
        console.log(this.exchange_code.length);
        if(this.exchange_code.length>0&&this.captcha_code.length>3){
          this.color="green";
        }else{
          this.color="gray";
        }
      },
      captcha_code(){
        if(this.exchange_code.length>0&&this.captcha_code.length>3){
          this.color="green";
        }else{
          this.color="gray";
        }
      }
    },
    mounted(){
      this.changea();



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
  .input1{
    width: 100%;
    line-height: 0.5rem;
    text-align: center;
    margin-top: 5%;
  }
  .input1 input{
    width: 95%;
    padding-left: 0.1rem;
  }
  .input2{
    width: 100%;
    line-height: 0.5rem;
    margin-top: 5%;

  }
  .input2 input{
    width: 53%;
    margin-left: 3%;
    padding-left: 0.1rem;
  }
  .code{
    width: 40%;
    background: white;
    height: 100%;
    display: inline-block;
    /*margin-left: 7%;*/
  }
  .btns{
    width: 100%;
    text-align: center;
    margin-top: 3%;
    height: 0.42rem;
  }
  .btns button{
    width: 93%;
    height: 100%;
  }
  .code img{
    display: inline-block;
    transform: translate(0.1rem,0.1rem);
  }
  .div1 {
    display: inline-block;
    vertical-align:-10px;
    margin-left: 0.10rem;
  }

  .p1{
    line-height: 0.16rem ;
    font-size: 0.1289rem;
    transform: translate(0rem,-0.03rem);
  }
  .p2{
    font-size: 0.1289rem;
    line-height:0.16rem ;
    color: #3b95e9;
    transform: translate(0rem,0.03rem);


  }

</style>
