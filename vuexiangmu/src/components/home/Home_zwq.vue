<template>
  <!--根标签-->
<div class=".container-fluid">
  <!--头部-->
  <div class="nav">
    <van-row>
      <van-col span="18">
        <router-link :to="{path:'/one_zwq'}" class="color1">ele.me</router-link>
      </van-col>
      <div  v-if="isdl">
        <van-col span="6">
          <router-link :to="{path:'/denglu'}" class="color1" >登录</router-link>
          <router-link :to="{path:'/denglu'}" class="color1">注册</router-link>
        </van-col>
      </div>

      <div v-if="!isdl" class="icon">
          <router-link :to="{path:'/one/four',query:{name3: this.user}}" class="color1" >
            <van-icon name="contact" class="abc" />
          </router-link>

      </div>

    </van-row>
  </div>
<!--定位城市文字-->
  <div>
    <van-row class="guesstext">
      <van-col span="8" class="left_guesstext">当前定位城市</van-col>
      <van-col span="16" class="right_guesstext ">定位不准时，请在城市列表中选择</van-col>
    </van-row>
  </div>
  <!--定位城市请求-->
  <div class="guesstext guess" >
      <van-row >
        <van-col span="22"><span class="guess_yes">
          <router-link :to="{path:'/suosou',query:{name:arrguess.name,name1:arrguess.id }}">{{arrguess.name}}</router-link></span></van-col>
        <van-col span="2" >
          <span class=" glyphicon glyphicon-menu-right"></span>
        </van-col>
      </van-row>
  </div>

  <!--热门城市文字-->
  <div class="main_hot">
    <van-row class="hot_text">
      <van-col span="24"><span>热门城市</span></van-col>
    </van-row>
<!--循环获取热门城市-->
    <ul>
      <li  class="hot_cs" v-for="(n ,index) in arrHot " :key="index"><router-link :to="{path:'/suosou',query:{name:n.name,name1:n.id}}"  class="color"><span>{{n.name}}</span></router-link></li>
    </ul>
  </div>

<!--获取所有的数据-->
  <div>
    <div v-for="(value,key,index ) in arrgroup" :key="index">

      <p class="allp">{{key}}</p>
      <ul>
        <li v-for="(n,index) in value" class="alllist":key="index ">
         <router-link :to="{path:'/suosou',query:{name:n.name,name1:n.id}}" class="alla">{{n.name}}</router-link>
        </li>
      </ul>
    </div>

  </div>


</div>
</template>

<script>
  import Vue from "vue"
    export default {
        name: "Home_zwq",
      data() {
        return{
        //定位城市
        arrguess:[],
        //热门城市
        arrHot:[],
        //所有城市
        arrgroup:[],
        isdl:false,
          user:'',
      }
      },
      methods:{
        sortByKey(obj) {
          const newkey = Object.keys(obj).sort();
          let newObj = {};
          for (let i = 0; i < newkey.length; i++) {
            newObj[newkey[i]]=obj[newkey[i]];
          }
          return newObj;
        }
      },
      mounted(){
        this.isdl=localStorage.getItem("ages");
        console.log(this.isdl)
        //请求定位地址
        Vue.axios.get("/v1/cities",{params:{type:"guess"}})
          .then((relust)=>{
            this.arrguess=relust.data;
            // console.log("定位数据"+this.arrguess)
          }).catch(function (error) {
          console.log(error);
        });
        //请求热门城市
        Vue.axios.get("/v1/cities",{params:{type:"hot"}})
          .then((relust)=>{
            this.arrHot=relust.data;
            // console.log("热门城市数据"+this.arrHot)

          }).catch(function (error) {
          console.log(error);
        });
        //请求所有城市
        Vue.axios.get("/v1/cities",{params:{type:"group"}})
          .then((relust)=>{
            this.arrgroup=relust.data;
            this.arrgroup=this.sortByKey(this.arrgroup)
            // console.log(this.arrgroup)
          }).catch(function (error) {
          console.log(error);
        });
     this.isdl=this.$route.query.names
        console.log(this.isdl);
        this.user=this.$route.query.name1
       localStorage.setItem("ages",this.isdl);
      },
    }
</script>

<style scoped>
  .abc{
    transform: scale(1.5,1.5);
  }
  .icon{
    text-align: right;
    margin-right: 5%;
  }
 .alla{
   color: #666;
 }
  .alllist{
    width: 25%;
    background: white;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-bottom: 1px solid #e4e4e4;
    border-right: 1px solid #e4e4e4;
    text-align: center;
  }
  .allp{
    background: white;
    line-height: 0.4rem;
    border-bottom: 2px solid #e4e4e4;
    border-top: 2px solid #e4e4e4;
    padding-left: 5%;
  }
.nav{
  background: #3190e8;
  line-height: 0.5rem;
}
  .router-link-exact-active {
    margin-left: 5%;
  }
  /*定位城市*/
  .guesstext{
    background: white;
    height: 0.5rem;
    border-bottom: 1px solid #e4e4e4;
  }
  .left_guesstext{
    font-size: 0.13rem;
   padding-left: 4%;
    margin-top: 6%;


  }
  .right_guesstext{
    font-size: 0.12rem;
    font-weight: 900;
    text-align: right;
    color: #9f9f9f;
    padding-right: 3%;
    margin-top: 6%;
  }
  .guess{
    line-height:0.5rem;
  }
  .guess_yes{
    margin-left: 5%;
    color: #3190e8;
  }
  .glyphicon{
    font-size: 0.13rem;
    color: #999;
  }
  /*热门城市*/
  .main_hot{
    margin-top: 2%;
    border-top: 1px solid #e4e4e4;
  }
  .hot_text{
    background: white;
    line-height: 0.4rem;
    border-bottom: 1px solid #e4e4e4;

  }
  .hot_text span{
    font-weight: 400;
  font-size: 0.14rem;
    margin-left: 4%;

  }
  .hot_cs{
    text-align: center;
    background: white;
    width: 25%;
   border-bottom: 1px solid #e4e4e4;
    border-right: 1px solid #e4e4e4;
  }
  li{
    display: inline-block;
    line-height: 0.4rem;
  }
  .color{
    color: #3190e8;
  }
  /*所有城市*/
.alldata{
  border-top: 2px solid #e4e4e4;
  background: white;
  margin-top: 3%;
}
.alldataA{
 display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
p {
  margin-top: 5%;
}
  .alldatazs{
    width: 25%;
    border-top: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    border-right: 1px solid #e4e4e4;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
  }
  .color1{
    color: white;
  }
</style>
