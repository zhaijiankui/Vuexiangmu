<template>
  <div class="denglu">
    <div class="restheader">
      <van-icon name="arrow-left" @click="Returnlastpage" class="van_icon"/>
      <span class="restpass">密码登录</span>
    </div>
    <ul>
      <li><input type="text" placeholder="账号" v-model="username"></li>
      <li><input type="password"  placeholder="密码" v-model="password">
        <van-switch
          v-model="checked"
          size="0.15rem"
          active-color="gray"
          inactive-color="white"
        />
      </li>
      <li>
        <input type="text" placeholder="验证码" v-model="input"  oninput="if(value.length > 4)value = value.slice(0,4)">
        <img :src="imgArr" alt="">
      <li><p>注册过的用户可凭账号密码登录</p></li>
    </ul>
    <button @click="add">登录</button>
    <van-dialog
      v-model="show"
      title="标题"
      show-cancel-button
    >
      <img src="https://img.yzcdn.cn/vant/apple-3.jpg">
    </van-dialog>
  </div>
</template>

<script>
  import Vue from "vue"
  export default {
    name: "denglu",
    data(){
      return {
        imgArr:[],
        input:'',
        username: "",
        password:'',
        checked:true,
        arrays:[],
        show:false,
        user1:'',
          user_id:''
      }
    },
    created(){
      this.changeimage();
    },
    methods:{
      Returnlastpage(){
        this.$router.go(-1);
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
               _this.$router.push({path:'/denglu1',
                   query:{names1:res.data.user_id,names2:res.data.username}});
               console.log(res.data.user_id)
             }
             else{
               _this.$dialog.alert({
                 message: _this.arrays.message
               });
             }
       })
      }
    },
  }
</script>

<style scoped>
  .denglu{
    width: 100%;
    height: 100%;
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
    width: 50%;
    line-height: 0.5rem;
    font-size: 0.18rem;
    border-bottom: 0.005rem solid rgba(0,0,0,0.01);
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
    width: 100%;
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
</style>
