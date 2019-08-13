<template>
    <div class="confirmOrder">
      <!--头部-->
      <div class="Orderheader">
        <span class="iconfont orderspan1" @click="button">&#xe6f3;</span>
        <span class="orderspan2">确认订单</span>
        <span class="iconfont orderspan3">&#xe766;</span>
      </div>
      <!--请添加一个收货地址-->
      <div class="a" @click="addaa">
      <span class="iconfont  iconfont1 aspan2">{{name1}}{{name2}}<span v-if="show1">请添加一个收货地址</span>
         <span class="addp">{{data.tag}}{{data.address_detail}}</span>
        </span>

        <span class="iconfont  iconfont1 aspan3">&#xe607;</span>
      </div>
      <div class="imgbuttom"></div>
      <!--送达时间-->
      <div class="sdtime">
          <div class="sdtimeright">
                <span class="sdspan1">送达时间</span>
            <div class="sdtimeleft">
                <span class="sdspan2">尽快送达 | 预计 10:20</span>
                <span class="sdspan3">蜂鸟专送</span>
            </div>
          </div>
      </div>
      <div class="zffs">
        <div class="zftop" @click="tanchucheng">
          <span class="zfspan1">支付方式</span>
          <span class="iconfont zfspan3">&#xe607;</span>
          <span class="zfspan2">在线支付</span>
        </div>
        <div class="zfbottom">
          <span class="zfspan4">红包</span>
          <span class="zfspan5">暂时只在饿了么APP中支付</span>
        </div>
      </div>
      <div class="yans">
        <div class="yanss">
          <img :src="'http://elm.cangdu.org/img/'+name" alt="">
          <span class="yansspan">{{name1}}</span>
        </div>
      </div>
      <ul class="moren">
        <li v-for="value in quanbu" v-if="value.count>0">{{value.product.name}}
          <div class="tuiaa">
          <span class="moren-li-1">x{{value.count}}</span>
          <span class="moren-li-2">￥{{value.product.specfoods[0].price}}</span>
          </div>
        </li>
        <li>餐盒
          <div class="tuiaa22">
            <span class="moren-li-3">￥{{can}}元</span>
          </div>
        </li>
        <li>配送费
          <div class="tuiaa">
            <span class="moren-li-2">￥{{pei}}元</span>
          </div>
        </li>
        <li class="lis">订单 ￥{{price}}元
          <div class="tuiaa">
            <span class="moren-li-11">待支付</span>
          </div>
        </li>
        <li>
          <div class="tuiaa">
            <span class="moren-li-12">￥{{price}}元</span>
          </div>
        </li>
      </ul>
      <div class="zffs">
        <div class="zftop" @click="okorder">
          <span class="zfspan1">订单备注</span>
          <span class="iconfont zfspan3">&#xe607;</span>
          <span class="zfspan2">口味偏好</span>
        </div>
        <div class="zfbottom">
          <span class="zfspan1">发票抬头</span>
          <span class="iconfont zfspan3">&#xe607;</span>
          <span class="zfspan2">不需要开发票</span>
        </div>
      </div>
     <div>
       <!--弹出窗-->
       <div class="tanchucheng" v-show="show">
         <div @click="yinchang" class="tanchucheng2"></div>
         <div class="tanchucheng1">
         <p class="ttp">
           支付方式
         </p>
         <p class="ttp1">
           <span class="ttp1span">货到付款（商家不支持货到付款)</span>
          <span class="ttp1span1">
             <van-radio name="1"></van-radio>
            </span>
         </p>
         <p class="ttp1">
           <span>在线支付</span>
           <span class="ttp1span1"><van-radio checked-color="#07c160"></van-radio></span>
         </p>
       </div>
       </div>

     </div>
        <div class="quer">
          <div class="quer1">待支付:{{price}}元</div>
          <!--点击确认下单，若未填写收货地址，则弹出窗口-->
          <div class="quer2" @click="queren">确认下单</div>
        </div>
      <!--警告弹窗-->
      <div class="border" v-if="abcc">
        <!--图片-->
        <img src="../../assets/img/jiao.png" alt="" class="imga">
        <div class="message">请输入收货地址</div>
        <button @click="yc" class="buttom123">确定</button>
      </div>
      <div class="q"></div>
    </div>
</template>

<script>
    export default {
        name: "confirmOrder",
      data(){
        return{
          show:false,
          abcc:false,
          name:'',
          name1:'',
          price:'',
          quanbu:'',
          abc:0.5,
          can:5,
          pei:1,
          data:{},
          show1:true,
          name1:'',
          name2:'',
        }
      },
      methods:{
          button(){
            this.$router.go(-1);
          },
          // 选择地址
        addaa(){
          this.$router.push({path:'/addAddress'})
        },
          // 确认弹窗
        queren(){
          this.abcc=true
        },
        yc() {
          this.abcc = false
        },
          yinchang(){
            this.show=false;
          },
        tanchucheng(){
          this.show=true;
        },
        okorder(){
          this.$router.push({path:'/orderRemarks'})
        },
      },
     mounted(){
            this.price=Number(this.$route.query.name)+Number(this.can)+Number(this.pei);
       this.quanbu=JSON.parse(this.$route.query.name3);
       console.log(this.data);
     // this.name1=this.$route.query.name1
     //   this.name2=this.$route.query.name2
       // this.$router.push({path:"/confirm",query:{name1:data.name,name2:data.phone}})
       // if(this.$route.query.name1){
       //   this.show1=false;
       // }
       console.log(this.quanbu);
     },
    }
</script>

<style scoped>
  .addp{
    width: 100%;
    line-height:0.14rem;
    display: block;
    margin-top: -0.3rem;
    padding-left: 0.2rem;
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
    position:fixed;
    left: 50%;
   top:50%;
    transform: translate(-50%,-50%);
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
  .quer1{
    width: 2.25rem;
    height: 0.4688rem;
    float: left;
    color:#fff;
    font-size: 0.2rem;
    line-height: 0.4688rem;
  }
  .quer2{
    width: 1rem;
    height: 0.4688rem;
    float: right;
    color:#fff;
    font-size: 0.2rem;
    line-height: 0.4688rem;
    font-weight: bold;
    font-family: "微软雅黑";
    background: #56d176;
    text-align: center;
  }
  .q{
    width: 100%;
    height: 0.6rem;
  }
  .quer{
    width: 100%;
    height: 0.4688rem;
    background:#3c3c3c;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;
   padding-left: 0.166rem;
  }
  .ttp1span1{
    display: inline-block;
    float: right;
    margin-top: 0.2rem;
  }
.ttp1span{
  color:#bfbfbf;
}
  .ttp1{
    font-size: 0.18rem;
    display: block;

    width: 90%;
    margin: 0 auto;
    line-height: 0.58rem;
  }
  .ttp{
    text-align: center;
    font-size: 0.18rem;
    display:block;
    line-height: 0.46rem;
    width: 90%;
    margin: 0 auto;
  }
  .tanchucheng2{
    width: 100%;
    height: 5.05rem;
  }
  .tanchucheng1{
    width: 100%;
    height: 1.62rem;
    background: #fff;
    position: absolute;
    left: 0;
    bottom: 0;

  }
  .tanchucheng{
    width: 100%;
    height:6.67rem;
    position: fixed;
    top:0;
    left:0;
    z-index: 10;
    background:rgba(0,0,0,0.5);
  }
  .lis{
    border-top:0.004rem solid rgba(0,0,0,0.5);
  }
  .tuiaa22{
    text-align: center;
    display: inline-block;
    float: right;
    width: 0.84rem;
  }
  .tuiaa{
    width: 0.84rem;
    height: 0.42rem;
    float: right;
    margin-right:0.164rem ;
  }
  .moren-li-11{
    width: 0.6rem;
    height: 0.42rem;
    line-height: 0.42rem;
    font-size: 0.16rem;
    display: inline-block;
   float: right;
    margin-right: 0.25rem;
    color:orangered;

  }
  .moren-li-12{
    width: 0.66rem;
    height: 0.42rem;
    line-height: 0.42rem;
    font-size: 0.16rem;
    display: inline-block;
    margin-left: 1.48rem;
    color:orangered;
  }
  .moren-li-1{
    width: 0.2rem;
    height: 0.42rem;
    line-height: 0.42rem;
    font-size: 0.16rem;
    display: inline-block;
    float: left;
    color:orangered;
  }
  .moren-li-2{
    width: 0.45rem;
    height: 0.42rem;
    line-height: 0.42rem;
    font-size: 0.16rem;
    display: inline-block;
    float: right;
  }
  .moren li{
    width: 90%;
    height:0.42rem;
   margin: 0 auto;
    line-height: 0.42rem;
  }
  .yanss img{
    height:120%;
    margin-top: -0.1rem;
  }
  .yanss{
    width: 100%;
    height:0.28rem;
    margin: 0.02rem;
    display: inline-block;
  }
  .yansspan{
    margin-left: 0.1rem;
      height: 0.3rem;
    display: inline-block;
    font-size: 0.20rem;
   line-height: 0.28rem;

  }
  .moren{
    display: inline-block;
    width: 100%;
    /*height: 3.47rem;*/
    background: #fff;
    border-bottom: 0.003rem solid rgba(0,0,0,0.5);
    padding-top: 0.11719rem;

  }
  .yans{
    width: 100%;
    height: 0.6614rem;
    background: #fff;
    border-bottom: 0.003rem solid rgba(0,0,0,0.5);
    margin-top: 0.1rem;
    padding: 0.164rem;
  }
  .zfspan4{
    line-height: 0.46rem;
    display: inline-block;
    float: left;
    font-size: 0.14rem;
    font-family: "微软雅黑";
    font-weight: bold;
    color:rgba(0,0,0,0.3);
  }
  .zfspan5{
    line-height: 0.46rem;
    display: inline-block;
    float: right;
    font-size: 0.14rem;
    font-family: "微软雅黑";
    font-weight: bold;
    color:rgba(0,0,0,0.3);
  }
  .zfspan1{
    line-height: 0.46rem;
    display: inline-block;
    float: left;
    font-size: 0.16rem;
    color:rgba(0,0,0,0.7);
    font-family: "微软雅黑";
    /*font-weight: bold;*/
  }
  .zfspan2{
    line-height: 0.46rem;
    display: inline-block;
    float: right;
    font-family: "微软雅黑";
    font-weight: bold;
    font-size: 0.14rem;
    color:rgba(0,0,0,0.3);
  }
  .zfspan3{
    line-height: 0.46rem;
    display: inline-block;
    float: right;
    font-family: "微软雅黑";
    font-weight: bold;
    margin-left: 0.1rem;
    font-size: 0.12rem;
    color:rgba(0,0,0,0.1);
  }
  .zftop{
    width: 100%;
    height:0.46rem;
    border-bottom: 0.003rem solid rgba(0,0,0,0.5);

  }
  .zfbottom{
    width: 100%;
    height:0.46rem;

  }
  .zffs{
    width: 100%;
    height:0.9527rem;
    padding:0 0.164rem;
    background: #fff;
  }
  .sdtimeleft{
    margin-top:0.22rem;
    width: 1.6rem;
    height: 0.21rem;
    float: right;
  }
  .sdspan2{
    display: inline-block;
    width: 1.6rem;
    font-size: 0.16rem;
    height: 0.21rem;
    color:dodgerblue;
    float: right;
    font-weight: 400;

  }
  .sdspan3{
    width: 0.56rem;
    height: 0.2069rem;
    background: dodgerblue;
    color:#fff;
    float:right;
    border-radius: 0.05rem;
    font-size: 0.12rem;
    text-align: center;
    line-height: 0.2069rem;
    margin: 0.11179rem;
  }
  .sdspan1{
    display: inline-block;
    font-size: 0.18rem;
    font-family: "微软雅黑";
    font-weight: bold;

    line-height: 0.9375rem;

  }
  .sdtime{
    width: 100%;
    height: 0.9375rem;
    margin: 0.0937rem 0;
    background: #fff;
    border-left: 0.0468rem solid #3190e8;
  }
  .sdtimeright{
    width: 100%;
    height: 100%;
    padding: 0 0.164rem;
    background: #fff;
float: right;
  }
  .imgbuttom{
    width: 100%;
    height: 0.05rem;
    /*background: url("../assets/imgbuttom.png") repeat-x;*/
    border:none;
  }
  .iconfont1{
   line-height: 0.77rem;

  }
  .aspan1{
   font-size: 0.18rem;
    color:deepskyblue;
  }
  .aspan2{
    color:rgba(0,0,0,0.8);
  }
  .aspan3{
    float: right;
    color:rgba(0,0,0,0.5);
  }
  .a{
    border-bottom: none;
    display: inline-block;
    width: 100%;
    height:0.77rem;
    background: #fff;
    padding: 0 0.14rem;

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
  .orderspan3{
    display: inline-block;
    font-size: 0.22rem;
    line-height: 0.457rem;
    color:#fff;
    float: right;
    margin-right:0.1rem;
  }
.orderspan2{
  font-size: 0.22rem;
  color:#fff;
  line-height: 0.457rem;
}
</style>
