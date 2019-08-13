<template>
  <div class="searchmapSSS">
    <div class="Orderheader">
      <span class="iconfont orderspan1" @click="fanhui">&#xe6f3;</span>
      <span class="orderspan2">选择地址</span>
    </div>
    <div class="searchF">
      <div class="searchF1">
        <input type="text" placeholder="请输入家/学校/办公楼" class="inputShi" v-model="bb" >
        <van-icon name="cross" class="van_iconcha" @click="vaniconcli" v-if="cha"/>
      </div>
      <button @click="sousuodz">提交</button>
    </div>
    <div class="search">
      <div class="search11" v-if="dzz">
        <p>找不到地址？</p>
        <p>尝试输入小区/门牌号海景房股水电费</p>
        <p>详细地址可稍后再填收到房管局</p>
      </div>
      <ul class="searchul">
        <li v-for="(value,index) in bbarr" @click="tiao(value)">
          <fieldset>
            <legend>{{value.name}}</legend>
            {{value.address}}

          </fieldset>
        </li>
      </ul>
    </div>
  </div>


</template>

<script>
  import Vue from "vue"
  export default {
    name: "searchmapSSS",
    data(){
      return{
        bb:"",
        bbarr:[],
        cha:false,
        dzz:true
      }
    },
    watch:{
      bb(){

        if(this.bb.length>0){
          this.cha=true;

        }else{
          this.cha=false
        }
      }
    },
    mounted(){

    },
    methods: {
      tiao(value){
        this.$router.push({path:'/slect',query:{name:value.geohash,name1:value.name}});
      },
      sousuodz(){
        if(this.bb.length>0){
          this.dzz=false;
          Vue.axios.get("https://elm.cangdu.org/v1/pois?city_id=1",{params:{keyword:this.bb,type:"search"}}).then((data)=>{
            console.log(data.data);
            this.bbarr = data.data;

          }).catch((err)=>{
            console.log(err);
          });
        }
      },
      vaniconcli() {
        this.bb = "";
      },
      fanhui() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  .searchmapSSS{
    background: #fff;
  }
  fieldset{
    margin-left: 0.18rem;
    margin-top: 0.15rem;
    color:rgba(0,0,0,0.6);
    font-size: 0.15rem;
    font-family: "微软雅黑";
    border-bottom: 0.005rem solid rgba(0,0,0,0.15);
    padding-bottom: 0.15rem;
  }
  legend{
    border: none;
    font-size: 0.18rem;
    font-family: "微软雅黑";
    margin-bottom: 0;

  }
  .searchul{
    width: 100%;
    margin-top: 0.3rem;
    display: inline-block;
    background: #fff;
  }
  .search11 p{
    width: 100%;
    height: 0.14rem;
    text-align: center;
    color:rgba(0,0,0,0.3);
    font-size: 0.12rem;
    line-height: 0.12rem;
  }
  .search11{
    width: 100%;
    height: 0.54rem;
    position: absolute;
    top: 50%;
    left:0;
  }
  .inputShi{
    font-size: 0.12rem;
    padding-left: 0.1rem;
    background:rgba(0,0,0,0.02);
  }
  .van_iconcha{
    width: 0.33rem;
    float: right;
    line-height: 0.35rem;
    background: #ccc;
    text-align: center;
    color:blue;
    display: inline-block;
    background:rgba(0,0,0,0.03);
  }
  .searchF1 input{
    display:inline-block;
    width:2.41rem;
    line-height: 0.36rem;
    height:0.36rem;
    font-family: "微软雅黑";
    color:rgba(0,0,0,0.7);
  }
  .searchF button{
    width:0.7rem;
    height:0.36rem;
    background:deepskyblue;
    margin: 0rem 0 0rem 0;
    border-radius: 0.05rem;
    border:none;
    line-height: 0.36rem;
    font-size: 0.16rem;
  }
  .searchF1{
    width: 2.74rem;
    display: inline-block;
    border-radius: 0.04rem;
    margin: 0.15rem 0.025rem 0.1rem 0.15rem;
    background:rgba(0,0,0,0.07);
  }
  .searchF{
    width: 100%;
    height:0.6rem;
    background: #fff;

  }
  .search{
    width: 100%;
    height:6rem;
    background: #fff;
    /*padding: 0 0.16rem;*/

  }
  .Orderheader{
    width: 100%;
    height:0.457rem;
    background:#3190e8;
    text-align: center;
  }
  .orderspan1{
    display: inline-block;
    font-size: 0.42rem;
    line-height: 0.457rem;
    color:#fff;
    float: left;
  }
  .orderspan2{
    font-size: 0.22rem;
    color:#fff;
    line-height: 0.457rem;
    margin-left: -0.1rem;
  }
</style>
