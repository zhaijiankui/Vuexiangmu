<template>
  <div class="a abc" ref="modality">
    <div class="abc">
      <router-view></router-view>
    </div>
    <div class="Nearbymerchants">
        <span class="iconfont bymerchants">&#xe62e;</span>
        <span class="bymerchants1">附近商家</span>
      </div>
      <!--商品列表项-->
      <div class="splieb" @click="addAttr(value)" v-for="value in alled">
        <div class="spliebleft">
          <!--照片-->
          <img :src="'http://elm.cangdu.org/img/'+value.image_path" alt="">
        </div>
        <div class="spliebright">
          <ul>
            <li>
              <div class="span12">
                <span class="goodsspan1">品牌</span>
                <span class="goodsspan2">{{value.name
}}</span>
              </div>
              <span class="goodsspan3">票</span>
              <span class="goodsspan3">准</span>
              <span class="goodsspan3">保</span>
            </li>
            <li>
              <div class="xxspan">
                <span class="iconfont spanxx">&#xe600;</span>
                <span class="iconfont spanxx">&#xe600;</span>
                <span class="iconfont spanxx">&#xe600;</span>
                <span class="iconfont spanxx">&#xe600;</span>
                <span class="iconfont spanxx">&#xe600;</span>
              </div>
              <div class="goodsspan89">
                <span class="goodsspan8">{{value.rating}}</span>
                <span  class="goodsspan9">月销{{value.recent_order_num}}笔</span>
              </div>
              <span class="spanbutton2">准时达</span>
              <span class="spanbutton1">20元</span>
            </li>
            <li>
              <span class="goodsspan5">满{{value.float_minimum_order_amount}}起送/配送费约{{value.float_delivery_fee}}元</span>
              <span class="goodsspan7">{{value.order_lead_time}}</span>
              <span class="goodsspan6">{{value.distance
}}</span>
            </li>
          </ul>
        </div>
      </div>

    </div>
</template>

<script>
  import Vue from "vue";
  import { Rate } from 'vant';
  import Vue1 from "../js";
  // import
  Vue.use(Rate);
  export default {
    name: "Child2",
    data(){
      return {
        value:'',
        img:[],
        one:[],
        data:[],
        longitude:'',
        latitude:'',
        index:4,
        index:'',
        show:false,
        dated:{},
        alled:{},
      }
    },
    mounted(){
      this.value=this.$route.query.name;

      this.dated={name:this.value,name1:this.longitude,name2:this.latitude};
      console.log(this.dated)
      Vue1.$emit("children",this.dated);
      console.log(this.data);
      if(this.$route.query.name){
        localStorage.setItem("name",this.$route.query.name);
      }
      else{
        this.value=localStorage.getItem("name");
      }
      if(this.$route.query.name2){
        localStorage.setItem("name1",this.$route.query.name2);
      }
      else{
        this.longitude=localStorage.getItem("name1");
      }
      if(this.$route.query.name1){
        localStorage.setItem("name2",this.$route.query.name1);
      }
      else{
        this.latitude=localStorage.getItem("name2");
      }
      let _this=this
      Vue.axios.get("https://elm.cangdu.org/v2/index_entry",{}).then(function (reslut) {
        console.log(reslut.data);
        _this.img=reslut.data.splice(0,8);
        _this.one=reslut.data;
      }).catch(function (error) {
        console.log(error);
      })
      Vue.axios.get("https://elm.cangdu.org/shopping/restaurants",{params:{latitude:_this.latitude,longitude:this.longitude}}).then(function(resluts) {
        _this.data=resluts.data;
          _this.alled=resluts.data;
        Vue1.$emit('child1',_this.data);
      }).catch(function (error) {
        console.log(error);
      })
      Vue1.$on('ch',this.getting)
      Vue1.$on("checked",this.getter);
    },
    methods:{
      getting(v){
        console.log(v)
        this.alled=v;
      },
      getter(v){
        this.alled=v;
      },
      onClickLeft(){
        this.$router.go(-1)
      },
      addAttr(value){
        this.index=value;
        console.log(this.index)
        this.$router.push({path:'/super/bottom',query:{names:this.index.image_path,name1:this.index.name,name2:this.index.float_delivery_fee,name3:this.index.order_lead_time,name4:this.index.id,name5:this.index.activities}})
      }
    }
  }
</script>

<style scoped>
  .abc{
    z-index: 100;
  }
  .Nearbymerchants,.splieb{
    z-index: 0;
  }
  .span12{
    width: 2.2rem;
    height:0.17rem;
    display: inline-block;
  }
  .xxspan{
    display: inline-block;
    /*font-size: 0.05rem;*/
    margin-top: 0.05rem;
    color:#f6a907;
  }
  .spanaa{
    font-size: 0.01rem;
    display: inline-block;
    margin-right: -0.03rem;
  }
  .goodsspan89{
    display: inline-block;
    height: 0.17rem;
    /*line-height: 0.3rem;*/
  }
  .goodsspan8{
    font-size: 0.08rem;
    display: inline-block;
    color:orangered;
    font-weight: 400;
  }
  .goodsspan9{
    font-size: 0.08rem;
    display: inline-block;
    color:rgba(0,0,0,0.5);
    font-weight: 400;
  }

  .goodsspan5{
    display: inline-block;
    font-size: 0.12rem;
    font-family: "微软雅黑";
    color:rgba(0,0,0,0.45);
    font-weight: bold;
    margin-top: 0.08rem;
  }
  .goodsspan6{
    float: right;
    font-family: "微软雅黑";
    color:rgba(0,0,0,0.45);
    font-weight: bold;
    font-size: 0.12rem;
    margin-top: 0.08rem;
    display: inline-block;
  }
  .goodsspan7{
    color:dodgerblue;
    float: right;
    font-family: "微软雅黑";
    color:rgba(0,0,255,0.45);
    font-weight: bold;
    font-size: 0.12rem;
    margin-top: 0.08rem;
    display: inline-block;
    margin-right: 0.1rem;
  }
  .goodsspan3{
    display: inline-block;
    border: 0.01rem solid rgba(0,0,0,0.1);
    font-size: 0.08rem;
    height: 0.15rem;
    margin:0.04rem 0.007rem 0;
    padding: 0.008rem 0.01rem;
    float: right;
    color:rgba(0,0,0,0.8);
    border-radius: 0.02rem;
    font-weight: 300;
  }
  .spanbutton1{
    margin-top: 0.05rem;
    /*width: 0.37rem;*/
    height: 0.13rem;
    display: inline-block;
    float: right;
    font-size:0.01rem;
    background: deepskyblue;
    border-radius: 0.03rem;
    font-weight: 400;
    color:#fff;


  }
  .spanbutton2{
    margin-top: 0.05rem;
    display: inline-block;
    float: right;
    height:0.13rem;
    margin-left: 0.01rem;
    border:0.005rem solid deepskyblue;
    font-size:0.01rem;
    border-radius: 0.02rem;
    color:deepskyblue;
    font-weight: 400;
  }
  .goodsspan1{
    padding:0 0.05rem;
    width: 0.31rem;
    height: 0.15rem;
    background:#ffd930;
    text-align: center;
    font-size:0.12rem;
    border-radius: 0.04rem;
  }
  .goodsspan2{
    display: inline-block;
    margin-left: -0.05rem;
    height:0.17rem;
    font-family: "微软雅黑";
    font-size:0.15rem;
    padding:0 0.05rem;
    font-weight: bold;
    border-radius: 0.05rem;

  }
  ul{

  }
  li{
    /*border:1px solid #ccc;*/
    width: 98%;
    float: left;
    height:0.15rem;
    display: inline-block;
    margin-top:0.1rem;


  }
  .spliebright{
    width:2.8rem;
    height:0.7rem;
    float: left;
  }
  .spliebleft{
    width:0.7rem;
    height:0.7rem;
    float: left;
    margin-right:0.1rem;
  }
  .spliebleft img{
    display: inline-block;
    width: 90%;
    height:100%;
    margin:0.1rem;
  }
  .splieb{
    width: 100%;
    height:1.1456rem;
    background: #fff;
    border-bottom: 0.001rem solid rgba(0,0,0,0.1);
  }
  .Nearbymerchants{
    width: 100%;
    height:0.4rem;
    background: #fff;
  }
  .Nearbymerchants span{
    line-height: 0.4rem;
    display: inline-block;


  }
  .bymerchants{
    color:rgba(0,0,0,0.3);
    display: inline-block;
    margin-left: 0.2rem;
  }
  .bymerchants1{
    margin-left: 0.05rem;
    color:rgba(0,0,0,0.3);
    font-family: "微软雅黑";
  }
</style>
