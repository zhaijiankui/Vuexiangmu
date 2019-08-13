<template>
  <div class="main">
    <div class="root clearfix" v-if="issee">
      <div class="yc" >
        <div class="header">
          <span>购物车</span>
          <span class="right" @click="addData">清空</span>
        </div>
        <div class="content">
          <ul v-for="value in address" v-if="value.count>0">
            <li>
              <span class="product">{{value.product.name}}</span>
              <span class="money">￥</span><span class="money">{{value.product.specfoods[0].price}}</span>
              <div class="right count">
                <div class="box" v-if="value.count>0" @click="jian(value)"><span class="sub"></span></div>
                <span class="num" v-if="value.count>0">{{value.count}}</span>
                <div class="box box1" @click="jia(value)"><span class="sub add"></span> <span class="add1"></span></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  <div class="bottom-bar">
    <div class="cart_icon_container">
      <div class="little-circle" @click="shichu">
        <i class="iconfont shop-car">&#xe611;</i>
        <i class="total_select_count">{{num}}</i>
      </div>
    </div>
    <div class="cart_num">
      <span class="total-money">¥ {{allprice}}元</span>
      <span class="drive-money">配送费¥{{fee}}元</span>
    </div>
    <div class="submit-button" @click="button">去结算</div>

  </div>
  </div>
</template>

<script>
import Vue1 from '../js';
import Vue from "vue";
  export default {
    props: {},
    name: 'bottom-bar',
    data(){
      return {
        price:0,
        fee:5,
        number:0,
        arr:[],
        array:{},
        addaa:{},
        address:[],
        issee:false,
        a:0,
      }
    },
    created(){
      Vue1.$on("chi",this.getInput);

    },
    computed:{
      num(){
        let numb=0;
        this.address.forEach((item)=>{
          numb+=item.count
        })
        return numb;
      },
      allprice(){
        let allp=0;
        this.address.forEach((item)=>{
          allp+=item.count*item.product.specfoods[0].price;
        })
        return allp;
      }
    },
    methods:{
      addData(){
        this.address=[];
        this.issee=false;
      },
      jia(value){
        value.count++;
        Vue1.$emit("chis",this.address);
      },
      jian(value){
        value.count--;
        Vue1.$emit("chis",this.address);
      },
      getInput(v){
       this.address=v;
      },
      shichu(){
        console.log(this.address);
        this.issee=!this.issee;
      },
      button(){
        this.$router.push({path:'/confirm',query:{name:this.allprice,name3:JSON.stringify(this.address)}});
        this.address.forEach((pro)=>{
          Vue.axios.post("https://elm.cangdu.org/v1/carts/checkout",{restaurant_id:pro.product.id,geohash:pro}).then(function (reslut) {
            console.log(reslut.data);
          }).catch(function (error) {
            console.log(error);
          })
        })

      },
    },
  };
</script>
<style scoped lang="less">
  @import "../bottom-bar/_bottom-bar";
  .bottom-bar{
    width: 100%;
    left: 0;
  }
  .header{
    padding: 0.1rem;
    line-height: 0.3473rem;
    background-color: #eceff1;
    width: 100%;

  }
  li{
    line-height: 0.3473rem;
    padding: 0.1rem;
    background: white;
  }
  .product{
    width: 60%;
    //background: red;
    display: inline-block;
  }
  .money{
    font-weight:700;
    color: #f60;
  }
  .add{
    transform: translate(0px,0.06rem);
  }
  .color{
    //background: red;
  }
  .box{
    display: inline-block;
    border: 1px solid #3190e8;
    border-radius: 50%;
    width: 0.2rem;
    height: 0.2rem;
    transform: translate(10px,8px);
  }
  .sub{
    display: inline-block;
    width: 0.1rem;
    height: 0.02rem;
    transform: translate(0.045rem,-0.13rem);
    background: #3190e8;
  }
  .num{
    display: inline-block;
    transform: translateX(0.1rem);
  }
  .count{
    margin-right: 0.1rem;
    position: relative;
    .box1{
      background: #3190e8;
    }
    .add{
      background: white;
    }
    .add1{
      display: inline-block;
      width: 0.02rem;
      height: 0.12rem;
      background: white;
      position: absolute;
      transform: translate(-0.013rem,0.035rem);
    }
  }
  .content{
    //height: 100px;
    overflow: auto;
  }
  .root{
    position: fixed;
    background: rgba(0,0,0,0.4);
    top:0;
    width: 100%;
    height: 100%;
  }
  .yc{
    position: fixed;
    width: 100%;
    bottom: 7%;

  }
</style>
