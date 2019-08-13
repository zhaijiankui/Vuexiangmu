<template>
    <div class="addAddress">
      <div class="Orderheader">
        <span class="iconfont orderspan1" @click="fanhui">&#xe6f3;</span>
        <span class="orderspan2">选择地址</span>
      </div>
      <div class="add" v-for="(value,index) in arrayss" :key="index">
      </div>
      <div class="address">
        <div class="address1" @click="selectAddress">
        <span class="iconfont span1">&#xe654;</span>
        <span class="span2">新增收货地址</span>
        </div>
      </div>
    </div>
</template>

<script>
  import Vue from "vue";
    export default {
        name: "addAddress",
      data(){
        return {
          arrayss:[],
        }
      },
      mounted(){
          let _this=this
        Vue.axios.get("https://elm.cangdu.org/v1/users/1/addresses",).then(function (reslut) {
          console.log(reslut.data)
          _this.arrayss=reslut.data.splice(0,4);
        })
      },
      methods:{
        selectAddress(){
          this.$router.push({path:"/slect"})
        },
        fanhui(){
          this.$router.go(-1)
        }
      }
    }
</script>

<style scoped>
  .span1{
    font-size: 0.25rem;
    color:dodgerblue;
    line-height: 0.5859rem;
  }
  .span2{
    font-size: 0.2rem;
    color:dodgerblue;
    line-height: 0.5859rem;
  }
  .address1{
    width: 100%;
    height:0.5859rem;
    text-align: center;
    position: fixed;
    left:0;
    bottom:0;
  }
  .address{
    width: 100%;
    height:8.67rem;
    background: #fff;
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
