<template>
  <div class="header">
    <div class="header-content">
      <van-row type="flex" justify="center">
        <van-col span="4">
          <router-link :to="{path:'/info'}" name="arrow-left" class="logo"><</router-link>
        </van-col>
        <van-col span="20" class="AccountInfor">修改用户名</van-col>
      </van-row>
    </div>
    <div class="content">
      <form action="">
        <input type="text" :class="{'b-red': isRed}" placeholder="输入用户名" class="username" v-model="abc">
      </form>
      <span class="wz" :style="{color: color1}" v-show="wenzi">用户名只能修改一次(5-24之间的字符)</span>
      <span class="wz" style="color: red"  v-show="!wenzi">用户名长度5-24之间的字符</span>
    </div>
    <van-button type="primary" size="large" class="login" @click="addressed">确认修改</van-button>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: "SetUsername",
    data(){
      return{
        wenzi:true,
        user:"",
        color1:"black",
        abc:'',
        red:'black',
        isRed: false,
      }
    },
    methods:{
      addressed(){
        Vue.axios.get("https://elm.cangdu.org/v2/changeusername",{params:{username:this.abc}}).then(function (reslut) {
          console.log(reslut.data);
        })
      }
    },
    watch:{
      abc(){
        if(this.abc.length<5){
          this.wenzi=false
          this.red="red";
          this.isRed = true;
          console.log(this.red)
        }
        else{
          this.wenzi=true;
          this.isRed = false;
          this.red="black"
        }
      }
    },
    created(){

    }
  }
</script>

<style scoped>
  body,html{
    width: 100%;
    height: 1000px;
    font-size: 20px;
    background-color:#F2F2F2 ;
  }
  .header-content{
    width: 100%;
    height: 0.4rem;
    background-color: #3190e8;
  }
  .logo{
    font-size: 0.3rem;
    color: white;
    margin-top: 10%;
    margin-left: -30%;
  }
  .AccountInfor{
    display: block;
    text-align: center;
    color: white;
    margin-top: 2%;
    font-size: 0.2rem;
    margin-left: -11.9%;
    font-weight: bold;
  }
  .content{
    background: #F2F2F2;
  }
  .iu{
    margin-top: 5%;
    margin-left: 2%;
    height: 50%;
    width: 98%;
  }
  .wz{
    font-size: 0.1rem;
    margin-left: 2%;
  }
  .login{
    width: 94%;
    margin-left: 3%;
    margin-top: 5%;
    color: #fff;
    background: #3190e8;
  }
  .b-red{
    border: 1px solid red;
  }
  .username{
    width: 95%;
    height: 0.4rem;
    margin-left: 2%;
    margin-top: 2%;
    font-size: 0.1rem;
    background: #F2F2F2;
  }
</style>
