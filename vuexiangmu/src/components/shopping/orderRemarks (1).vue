<template>
  <div class="orderRemarks">
    <!--头部-->
    <div class="Orderheader">
      <span class="iconfont orderspan1" @click="fanhui">&#xe6f3;</span>
      <span class="orderspan2">订单备注</span>
    </div>
    <div class="remarks">
      <p class="elseremarks">快速备注</p>
     <ul class="ul1">
       <li class="li1">
         <div class="div1" @click="son(item,index)" v-for="(item,index) in lala" :key="index">{{item}}</div>
       </li>
       <li class="li2" :class="{noo:!isshow,blue:isshow}" @click="isshow=!isshow">不要香菜</li>
       <li class="li3" :class="{noo:!isshow1,blue:isshow1}" @click="isshow1=!isshow1">不要洋葱</li>
       <li class="li5" :class="{noo:!isshow2,blue:isshow2}" @click="isshow2=!isshow2">多点醋</li>
       <li class="li6" :class="{noo:!isshow3,blue:isshow3}" @click="isshow3=!isshow3">多点葱</li>
       <li class="li4">
         <span>
         <div class="li7">加冰</div>
         <div class="li8">不加冰</div>
           </span>
       </li>
     </ul>
    </div>
    <div class="remarks1">
      <p class="elseremarks">其他备注</p>
      <textarea name="" id="" cols="50" rows="5" class="textarea" placeholder="请输入备注内容（可不填）"></textarea>
    </div>
    <button class="qqbutton" @click="fanhui">确定</button>
  </div>
</template>

<script>
  export default {
    name: "orderRemarks",
    data () {
      return {
        lala:['微辣','中辣','麻辣'],
        isshow: true,
        isshow1: true,
        isshow2: true,
        isshow3: true,
        add:["加冰","不加冰"],
      }
    },
    methods:{
      fanhui(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  /*单选*/
  .blue{
    background-color:#fff;
    border:0.01rem #3190e8 solid;
    color:#000;
  }
  .noo{
    color:#fff;
    background-color:dodgerblue;
    border:0.01rem #3190e8 solid;
  }
  .li11,.li22,.li33{
    width: 0.7rem;
    height: 0.32rem;
    display: inline-block;
    font-size: 0.14rem;
    line-height: 0.32rem;
    float: left;
    text-align: center;
    border:0.01rem #3190e8 solid;
  }
  .li8{
    width: 0.52rem;
    height: 0.32rem;
    display: inline-block;
    font-size: 0.14rem;
    line-height: 0.32rem;
    float: left;
    text-align: center;
    border:0.01rem #3190e8 solid;
  }
  .li7{
    width: 0.615rem;
    height: 0.32rem;
    display: inline-block;
    font-size: 0.14rem;
    line-height: 0.32rem;
    float: right;
    text-align: center;
    border:0.01rem #3190e8 solid;
  }
  .li4{
    width: 1.14rem;
    height: 0.32rem;
    display: inline-block;
    font-size: 0.14rem;
    line-height: 0.32rem;
    float: left;
    text-align: center;
    border:0.001rem #3190e8 solid;
    border-radius: 0.03rem;

    margin-top: 0.2rem;
  }
  .li5,.li6{
    width: 0.7rem;
    height: 0.32rem;
    display: inline-block;
    font-size: 0.14rem;
    line-height: 0.32rem;
    float: left;
    text-align: center;
    border:0.01rem #3190e8 solid;
    border-radius: 0.03rem;
    margin-left: 0.2rem;
    margin-top: 0.2rem;
  }
  .li3{
    width: 0.85rem;
    height: 0.32rem;
    display: inline-block;
    font-size: 0.14rem;
    line-height: 0.32rem;
    float: left;
    text-align: center;
    border:0.01rem #3190e8 solid;
    border-radius: 0.03rem;
    margin-top: 0.2rem;
  }
  .li2{
    width: 0.7rem;
    height: 0.32rem;
    display: inline-block;
    font-size: 0.14rem;
    line-height: 0.32rem;
    float: left;
    text-align: center;
    border:0.01rem #3190e8 solid;
    border-radius: 0.03rem;
    margin-left: 0.2rem;
  }
  .div1{
    width: 0.7rem;
    height: 0.32rem;
    display: inline-block;
    font-size: 0.14rem;
    line-height: 0.32rem;
    float: left;
    text-align: center;
    border:0.01rem #3190e8 solid;

  }
  .li1{
    float: left;
    width: 2.2rem;
    height: 0.32rem;

  }
  .li4 div:nth-child(2){
    border-radius: 0.04rem 0 0 0.04rem;
  }
  .li4 div:nth-child(1){
    border-radius:0 0.04rem 0.04rem 0;
  }
  .li1 div:nth-child(1){
    border-radius: 0.04rem 0 0 0.04rem;
  }
  .li1 div:nth-child(3){
    border-radius:0 0.04rem 0.04rem 0;
  }
 .div1:hover{
    background-color:dodgerblue;
    border:0.01rem #3190e8 solid;
  }
  .ul1{
    width: 3.45875rem;
    height: 1.352rem;
  }
  .textarea{
    width: 90%;
    height: 1.05rem;
    display: inline-block;
    margin: 0 0.19rem;
    background:rgba(0,0,0,0.03);
    border:0.001rem solid rgba(0,0,0,0.5);
    border-radius: 0.05rem;
    padding: 0.11rem;
  }
  .elseremarks{
    width: 100%;
    height: 0.46rem;
    padding-left: 0.16rem;
    line-height: 0.46rem;
  }
  .qqbutton {
    display: block;
    margin: 0rem auto;
    background:#4cd964;
    border: none;
    line-height: 0.5rem;
    width: 90%;
    color:#fff;
    border-radius: 0.05rem;
    font-size: 0.18rem;
  }
  .remarks1{
    width: 100%;
    height: 1.81rem;
    background: #fff;


  }
  .remarks{
    width: 100%;
    height: 2.046rem;
    background: #fff;
    margin:0.15rem 0;
    padding: 0 0.146rem 0.23438rem;

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
