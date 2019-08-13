<template>
  <div class="resetPassword">
    <div class="restheader">
      <van-icon name="arrow-left" @click="Returnlastpage" class="van_icon"/>
      <span class="restpass">密码登录</span>
    </div>
    <ul>
      <li><input type="text" placeholder="账号" v-model="username"></li>
      <li><input type="password"  placeholder="密码" v-model="password" ref="input">
        <van-switch
          v-model="checked"
          size="0.15rem"
          active-color="gray"
          inactive-color="white"
          :change="addreff"
        />
      </li>
      <li>
        <input type="text" placeholder="验证码" v-model="input"  oninput="if(value.length > 4)value = value.slice(0,4)">
        <img :src="imgArr" alt="">
        <div class="changeimg" @click="changeimage">
          <span>看不清</span>
          <span>换一张</span>
        </div>
      </li>
      <br>
      <li><p>温馨提示：未注册过的账号，登录时将自动注册</p></li>
      <br>

      <li><p>注册过的用户可凭账号密码登录</p></li>
    </ul>
    <button  @click="add">登录</button>
    <div class="tannn">
      <div class="border" v-if="abcd">
        <!--图片-->
        <img src="../../assets/img/jiao.png" alt="" class="imga">
        <div class="message">{{arrays.message}}</div>
        <button @click="yc" class="buttom123">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from "vue"
  export default {
    name: "resetPassword",
    data(){
      return {
        imgArr:[],
        input:'',
        username: "",
        password:'',
        checked:true,
        arrays:[],
        show:false,
        abc:0,
        abcd:false
      }
    },
    created(){
      this.changeimage();
    },
    methods:{
      Returnlastpage(){
        this.$router.go(-1);
      },
      yc(){
        this.abcd=false
      },
      addreff(){
        this.abc++;
        if(this.abc%2==0){
          this.$refs.input.type="password";
        }else {
          this.$refs.input.type="text";
        }
      },
      changeimage(){
        let _this=this
        this.$http({
          url:"https://elm.cangdu.org/v1/captchas",
          method:"post",
          withCredentials:true
        }).then(function (res) {
          console.log(res.data)
          _this.imgArr=res.data.code;
        })
      },
      add(){
        let _this=this

       this.$http({
         url:"https://elm.cangdu.org/v2/login",
         method:"post",
         data:{
           username:this.username,
           password:this.password,
           captcha_code:this.input,
         },
         withCredentials:true
       }).then(function (res) {
         console.log(res.data)
         _this.arrays=res.data;
             if(res.data.status!=0){
               _this.$router.push({path:'/home',query:{names:_this.show,name1:res.data.username}});
             }
             else{
              _this.abcd=true
             }
       })
      }
    },
  }
</script>

<style scoped>
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
    display: inline-block;
    font-size: 0.22rem;
    color:#fff;
    font-family:"微软雅黑";
    margin: 0.1rem 1rem 0.12rem 1.3rem;
  }
  ul{
    display: block;
    margin-top: 0.15rem;
    background:#fff;
    width: 100%;
  }
  li{
    width: 100%;
    font-size: 0.18rem;
    border-bottom: 0.005rem solid rgba(0,0,0,0.1);
  }
  button {
    display: block;
    margin: 0.2rem auto;
    background: limegreen;
    border: none;
    line-height: 0.5rem;
    width: 90%;
    color:#fff;
    border-radius: 0.05rem;
    font-size: 0.18rem;
  }
  input{
    line-height: 0.5rem;
    width: 50%;
    border:none;
    margin-left: 0.2rem;
    border-bottom: 0.005rem solid rgba(0,0,0,0.03);
  }
  span{
    display:inline-block;
  }
  img{
    width: 20%;
    height: 0.5rem;
    /*float: right;*/
    display: inline-block;
  }
  .changeimg{
    width: 20%;
    height: 0.5rem;
    float: right;
  }
  li p{
    color: red;
    text-align: left;
    font-size: 0.1rem;
  }
  .van-switch{
    right: -25%;
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
    width: 70%;
  }
</style>
