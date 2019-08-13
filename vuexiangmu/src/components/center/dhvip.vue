<template>
  <div class="dhvip">
    <div class="restheader">
      <van-icon name="arrow-left"  class="van_icon" @click="abcd"/>
      <span class="restpass">{{dhuan1}}</span>
    </div>
    <p class="dhvp">成功兑换后将关联到当前账号:<span class="dhspan">{{dhuan}}</span></p>
    <div class="dhinput">
      <input type="text" placeholder="请输入10位卡号" v-model="ss" oninput="if(value.length > 10)value = value.slice(0,10)">
      <input type="text" placeholder="请输入6位密码" v-model="ll" oninput="if(value.length > 6)value = value.slice(0,6)">
    </div>
    <button class="dhbuttom" :style="{backgroundColor:color11}" @click="xs">兑换</button>
    <span class="span1">----温馨提示----</span>
    <p class="p1">新兑换的会员，权益以（会员说明）为准</p>
    <p class="p1">月卡：免配送费31次</p>
    <p class="p1">季卡：免配送费100次</p>
    <p class="p1">年卡：免配送费400次</p>
    <p class="p1">*仅蜂鸟专送，每日最多免单3次，免配送费4元</p>
    <p class="p1">（一月按31天算）</p>
    <div class="border" v-if="abc">
      <!--图片-->
      <img src="../../assets/img/jiao.png" alt="" class="imga">
      <div class="message">无效的卡号</div>
      <button @click="yc" class="buttom123">确定</button>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
    export default {
        name: "dhvip",
      data(){
          return{
            color11:'#ccc',
            abc: false,
              ss:"",
              ll:"",
            dhuan:'',
            dhuan1:'',
          }
      } ,
      watch:{
          ss(){
            if(this.ss.length==10 && this.ll.length==6){
              this.color11='#4cd964'
            }else{
              this.color11='#ccc'
            }
          },
        ll(){
          if(this.ss.length==10&&this.ll.length==6){
            this.color11='#4cd964'
          }
          else{
            this.color11='#ccc'
          }
        },
      },
      mounted(){
        this.dhuan=this.$route.query.name;
        this.dhuan1=this.$route.query.name1;
      },
      methods:{
          abcd(){
            this.$router.go(-1);
          },
        yc(){
          this.abc=false;
        },
          xs(){
          if(this.ss.length==10&&this.ll.length==6){
            this.abc=true
          }else{
            this.color='#ccc'
          }
        },
          fanhui(){
            this.$router.go(-1)
          }
      }
    }
</script>

<style scoped>
  .buttom123{
    border:none;
    text-align: center;
    display:block;
    line-height: 0.6rem;
    width: 100%;
    font-size: 0.25rem;
    height:0.6rem;
    color:#fff;
    font-family: "微软雅黑";
    border-radius: 0 0 0.08rem 0.08rem;
    font-weight: bold;
    background:#4cd964;
  }
  .message{
    display: block;
    text-align: center;
    height: 0.3rem;
    width: 100%;
    font-size: 0.2rem;
    font-family: "微软雅黑";
    color:rgba(0,0,0,0.5);
    font-weight: bold;
  }
  .imga{
    height: 1rem;
    border-radius: 0.08rem 0.08rem 0 0;
    display: block;
    margin: 0 auto;
  }
  .border{
    text-align: center;
    background-color: white;
    border-radius: 0.2rem;
    width:3.2rem;
    height:1.8rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
  .span1{
    display:block;
    margin: 0.25rem auto;
    width: 100%;
    height:0.16rem;
    text-align: center;
    line-height: 0.16rem;
    color:rgba(0,0,0,0.4);
    font-size: 0.16rem;
    font-family: "微软雅黑";
    font-weight: bold;
  }
  .p1{
    font-family: "微软雅黑";
    font-weight: bold;
    margin-bottom:0.05rem;
    width: 100%;
    height:0.12rem;
    display: block;
   padding-left: 0.48rem;
    line-height: 0.12rem;
    color:rgba(0,0,0,0.4);
    font-size: 0.12rem;
  }
  .dhbuttom{
    color:#fff;
    border: none;
    width: 90%;
    display: inline-block;
    text-align: center;
    line-height: 0.46rem;
    font-size: 0.18rem;
   font-family: "微软雅黑";
    font-weight: bold;
    border-radius: 0.05rem;
    margin-left: 0.2rem;
  }
  .dhinput input{
    width: 100%;
    height: 0.5175rem;
    padding-left: 0.183rem;
  }
  .dhinput{
    width:100%;
    height:1.04rem;
    background: #fff;
    margin-bottom:0.3rem;
  }
  .dhvp{

    padding-left: 0.183rem;
    line-height: 0.5175rem;
    font-size:0.14rem;
    color:rgba(0,0,0,0.6);
    margin-bottom: 0;
  }
  .dhspan{
    display: inline-block;
    margin-left: 0.1rem;
    color:rgba(0,0,0,1)

  }
  .restheader{
    width: 100%;
    height:0.5rem;
    background:dodgerblue;
  }
  .van_icon{
    display: inline-block;
    font-size: 0.25rem;
    color:#fff;
    margin-top: 0.1rem;
  }
  .restpass{
    font-size: 0.22rem;
    text-align: center;
    color:#fff;
    font-family:"微软雅黑";
    margin: -0.2rem 1rem 0.12rem 1.2rem;
  }
  .buttom123{
    border:none;
    text-align: center;
    display:block;
    line-height: 0.6rem;
    width: 100%;
    font-size: 0.25rem;
    height:0.6rem;
    color:#fff;
    font-family: "微软雅黑";
    border-radius: 0 0 0.08rem 0.08rem;
    font-weight: bold;
    background: springgreen;
  }
  .message{
    display: block;
    text-align: center;
    height: 0.3rem;
    width: 100%;
    font-size: 0.2rem;
    font-family: "微软雅黑";
    color:rgba(0,0,0,0.5);
    font-weight: bold;
  }
  .imga{
    height: 1rem;
    border-radius: 0.08rem 0.08rem 0 0;
    display: block;
    margin: 0 auto;
  }
  .border{
    text-align: center;
    background-color: white;
    border-radius: 0.2rem;
    width:3.2rem;
    height:1.8rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
  .imga{
    width: 75%;
  }
</style>
