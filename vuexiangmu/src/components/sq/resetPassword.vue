<template>
    <div class="resetPassword">
            <div class="restheader">
             <van-icon name="arrow-left" @click="Returnlastpage" class="van_icon"/>
              <span class="restpass">重置密码</span>
            </div>
        <ul>
          <li><input type="text" placeholder="账号"></li>
          <li><input type="text" placeholder="旧密码"></li>
          <li><input type="text" placeholder="请输入新密码"></li>
          <li><input type="text" placeholder="请确认密码"></li>
          <li>
            <input type="text" placeholder="验证码" v-model="input">
            <img :src="imgArr" alt="">
            <div class="changeimg" @click="changeimage">
              <span>看不清</span>
              <span>换一张</span>
            </div>
          </li>
        </ul>
      <button @click="add">确认修改</button>
    </div>
</template>

<script>
  import Vue from "vue"
    export default {
        name: "resetPassword",
      data(){
        return {
          imgArr:[],
          input:''
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
          Vue.axios.post("/v1/captchas",{params:{type:"code"}}).then((data)=>{
            console.log(data.data);
            this.imgArr = data.data.code;
            console.log(this.imgArr)
          }).catch((err)=>{
            console.log(err);
          });
        },
        add(){
          console.log(this.imgArr.data);
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
    /*line-height: 0.5rem;*/
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
</style>
