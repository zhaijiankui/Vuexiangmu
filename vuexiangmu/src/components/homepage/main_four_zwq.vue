<template>
  <div>
    <!--导航-->
    <div >
      <van-nav-bar
        title="我的"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
        class="four_nav"
      />
    </div>
<!--路由跳转个人账户页面-->
    <div class="to_zh"  >
    <div class="to_zh_d2">
        <img src="http://elm.cangdu.org/img/default.jpg" alt="">
        <div class="to_zh_txt" >
          <p v-if="show">{{username_zwq}}</p>
          <router-link :to="{path:'/denglu'}"><p v-if="!show"  style="color:white">登录/注册</p></router-link>
          <p>
            <!--<img src="../assets/img/download.png" alt="" class="to_zh_img">-->
           <span class="to_zh_span">暂无手机号绑定</span>
          </p>
        </div>

      <span class="right_span" @click="info"> > </span>
    </div>
    </div>

    <!--余额优惠积分布局-->
    <!--根组件包含3部分-->
    <div class="min_three" >
      <!--余额-->
      <div class="public_zwq  balance_zwq" @click="Balance">
        <p>0.00</p><span>元</span><br>
       <div class="publictxt">我的余额</div>
      </div>

      <!--优惠-->
      <div class="public_zwq  discounts" @click="discounts">
        <p class="discounts_zwq">3</p><span>个</span><br>
        <div class="publictxt">我的优惠</div>
      </div>

      <!--积分-->
      <div class="public_zwq  discounts">
        <p class="discounts_zwq  integral_zwq">0</p><span>分</span><br>
        <div class="publictxt">我的积分</div>
      </div>


    </div>
<!--第四部分盒子-->
    <div class="box_four">
      <van-cell title="我的订单" is-link :to="{path: '/three_zwq'}"/>
      <van-cell title="积分商城" is-link @click="addAdd" />
      <van-cell @click="addff" title="饿了么会员卡" is-link />
    </div>
    <!--第五部分盒子-->
    <div class="fox_five">
      <van-cell title="服务中心" is-link  @click="four"/>
      <van-cell title="下载饿了么APP" is-link  @click="elma"/>
    </div>

    <!--下面是引入公共组件foot  Main_one-->
    <!--<div>-->
    <!--</div>-->
  </div>

</template>

<script>

    export default {
        name: "four",
      data(){
          return{
            active:0,
            username_zwq:"郑文谦",
            show:true,
          }
      },
       mounted(){
          this.show=this.$route.query.name;
        this.username_zwq=this.$route.query.name3;
                if(this.$route.query.name3){
                  this.show=true;
                }
                else{
                  this.show=false;
                }
       },
      methods: {
        addAdd(){
          this.$router.push({path:'/jifei'})
        },
          addff(){
            this.$router.push({path:'/huiyuan',query:{names:this.username_zwq}})
          },
        four(){
          this.$router.push({path:"/service"})
        },
        onClickLeft() {
          //Toast('返回');
          this.$router.push({path:"/three_zwq"})

        },
        onClickRight() {
         // Toast('按钮');
        },
        Balance(){
           this.$router.push({path:'/balance'})

        },
        elma(){
          this.$router.push({path:'/download'})
        },
        info(){
          this.$router.push({path:'/info'})
        },
        discounts(){
          this.$router.push({path:'/discounts/discfoot'})

        }
      }
    }
</script>

<style scoped>
.four_nav{
  background: #3190e8;
}
  .van-icon-arrow-left{
    color: white;
    font-size: 0.25rem;
    margin-left: -0.1rem;
  }
.van-ellipsis{
  color: white;
  font-size: 0.1875rem;
  font-weight:700;

}
  /*跳转账户信息部分*/
.to_zh{
  background:#3190e8 ;
  line-height: 0.5rem;
  overflow: hidden;
  color: white;

}
.to_zh_d2{
  margin-top: 4%;
  margin-left: 3%;

}
  .to_zh img{
    border-radius: 50%;
    width: 15%;
  }
.to_zh_txt{

  display: inline-block;
  vertical-align: 0.05rem;
  line-height: 0.25rem;
  font-weight:700;
  font-size: 0.20rem;
  width: 70%;
  margin-left: 0.1rem;
}
.right_span{
  display: inline-block;
  vertical-align: 0.15rem;
  right: 3%;
font-size: 0.25rem;
}
  .to_zh_span{
    font-size: 0.15rem;
    margin-left: -0.1rem;
  }
  .to_zh_img{
  transform: scale(0.5,0.5);
    height: 40px;
    vertical-align: -0.14rem;
    margin-left: -0.1rem;
  }
  /*余额/积分/优惠*/
  .min_three{
   background: white;
    width: 100%;
    height: 0.9rem;
  }
  /*第三部分公共部分*/
  .public_zwq{
      width: 31.450%;
     height: 100%;
    display: inline-block;
    border-right: 1px solid #f5f5f5;
  }
/*余额*/
  .balance_zwq{
    background: white;
    text-align: center;
  }
.balance_zwq p{
  color: #f90;
  font-size: 0.28rem;
  font-weight: 700;
  display: inline-block;
  margin-top: 20%;
}
  .balance_zwq span{
  color: black;

  }
  .publictxt{
    font-size: 0.1343rem;
    margin-top: 10%;
  }

  /*优惠券页面*/
  .discounts_zwq{
    color:#ff5f3e;

    font-size: 0.28rem;
    font-weight: 700;
    display: inline-block;
    margin-top: 20%;
  }
  .discounts{
    text-align: center;
    background: white;
  }
/*积分*/
.integral_zwq{
  color:#6ac20b;
}
  /*订单 积分 会员卡 盒子*/
.box_four{
  margin-top: 3%;
}
  .van-cell__title span{
    font-size: 0.16rem;
  }
  .fox_five{
    margin-top: 3%;
  }
</style>
