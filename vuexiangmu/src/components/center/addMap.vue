<template>
  <div class="addMap">
    <div class="restheader">
      <van-icon name="arrow-left" class="van_icon"/>
      <span class="restpass">新增地址</span>
    </div>
    <ul>
      <li><input type="text" v-model="name" placeholder="请填写您的姓名">
        <br>
        <p v-if="show">请输入你的姓名</p>
      </li>
      <li><input type="text" v-model="dizhi" placeholder="学校/写字楼/小区等">
        <br>
      <p v-if="show1">请输入地址</p>
      </li>
      <li><input type="text" v-model="address_detail" placeholder="详细送餐地址">
        <br>
        <p v-if="show2">请输入送餐地址</p>
      </li>
      <li><input type="text"  placeholder="请填写能联系到您的电话" v-model="phone">
      <p  v-if="show3">请输入正确的手机号码</p>
      </li>
      <li>
        <input type="text" placeholder="备用联系电话（选填）" v-model="phone_bk">
        <p v-if="show4">请输入正确的备用手机号号码</p>
        <br>
      </li>
    </ul>
    <button @click="addressDetail" :style="{color:color1}">新增地址</button>
  </div>
</template>

<script>
  import Vue from "vue"
    export default {
        name: "addMap",
      data(){
          return {
            dizhi:'',
            address_detail:'',
            name:"",
            phone:"",
            phone_bk:'',
            show:false,
            show1:false,
            show2:false,
            show3:false,
            show4:false,
            color1:"rgba(255,255,255,0.3)",
          }
      },
      mounted(){
         this.name;this.dizhi();this.address_detail();
         this.phone();this.phone_bk();
      },
      watch:{
        name(){
          if(this.name.length>=2&&this.name.length<5){
            this.show=false;
          }
          else{
            this.show=true;
          }
        },
        dizhi(){
          if(this.dizhi.length<7){
            this.show1=true;
          }
          else{
            this.show1=false;
          }
        },
        address_detail(){
          if(this.address_detail.length<7){
            this.show2=true;
          }
          else{
            this.show2=false;
          }
        },
        phone(){
          if(this.phone.length==11){
            this.show3=false;
          }
          else{
            this.show3=true;
          }
        },
        phone_bk(){
          if(this.phone_bk.length==11){
            this.show4=false;
          }
          else{
            this.show4=true;
          }
        },
       show(){
          if(this.name.length>=2&&this.name.length<5&&this.dizhi.length<7&&this.address_detail.length<7&&this.phone.length==11&&this.phone_bk.length==11){
            this.color1="white"
          }
          else{
            this.color1="rgba(255,255,255,0.3)"
          }
       }
      },
      methods:{
        addressDetail(){
             Vue.axios.post(`https://elm.cangdu.org/v1/users/${1}/address`,{params:{address :this.dizhi,address_detail:this.address_detail,geohash:'34.751132'+","+ '113.68174',name:this.name,phone:this.phone,tag:'家',sex:'男',phone_bk :this.phone_bk,tag_type:"公司"}}).then(function (reslut) {
               console.log(reslut.data);
             }).catch(function (error) {
               console.log(error);
             })
        }
      },
      mounted(){

      }
    }
</script>

<style scoped>
  ul p{
    position: relative;
    font-size: 0.16rem;
    color: red;
    left: 5%;
    text-align: -moz-right;
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
    width: 100%;
    font-size: 0.18rem;
    height: 0.6rem;
    display: inline-block;

  }
  button {
    display: block;
    margin: 0.2rem auto;
    background: limegreen;
    border: none;
    line-height: 0.5rem;
    width: 90%;
    border-radius: 0.05rem;
    font-size: 0.18rem;
  }
  input{
   height: 0.4rem;
    width: 90%;
    display: inline-block;
    margin: 0.1rem 0.2rem;
    background:rgba(0,0,0,0.1);
    border:0.005rem solid rgba(0,0,0,0.1);
    border-radius: 0.05rem;
  }



</style>
