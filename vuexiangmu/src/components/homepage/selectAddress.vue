<template>
    <div class="selectAddress">
      <div class="Orderheader">
        <span class="iconfont orderspan1" @click="fanhui">&#xe6f3;</span>
        <span class="orderspan2">添加地址</span>
      </div>
      <table border="1" cellpadding="1" cellspacing="1" class="selectul">
        <tr>
          <td class="selectspan">联系人</td>
          <td class="selectinput"><input type="text" placeholder="你的名字" v-model="name">
          </td>
        </tr>
        <tr>
          <td class="selectspan"></td>
          <td class="selectinput">
            <span class="iconfont span111" @click="home1">&#xe66a;</span>先生
            <span class="iconfont span112" @click="home2">&#xe66a;</span>女士
          </td>
        </tr>
        <tr>
          <td class="selectspan">联系电话</td>
          <td class="selectinput">
            <input type="text" placeholder="你的手机号" v-model="phone">
            <img src="../../assets/img/jia.png" alt="" class="jiahao" @click="jiaa">
          </td>
        </tr>
        <tr v-if="show">
          <td class="selectspan"></td>
          <td class="selectinput">
            <input type="text" placeholder="备用电话" v-model="phone_bk">
          </td>
        </tr>
        <tr>
          <td class="selectspan">送餐地址</td>
          <td class="selectinput">
           <router-link :to="{path:'/select'}"> <input type="text" placeholder="较好的风格" v-model="scan"></router-link>
          </td>
        </tr>
        <tr>
          <td class="selectspan"></td>
          <td class="selectinput">
            <input type="text" placeholder="详细地址（街道，门牌号）" v-model="dizi">
          </td>
        </tr>
        <tr>
          <td class="selectspan">标签</td>
          <td class="selectinput">
            <input type="text" placeholder="无/家/学校/公司" v-model="home">
          </td>
        </tr>
      </table>
      <button class="qqbutton" @click="delet">确定</button>
    </div>
</template>

<script>
  import Vue from "vue";
    export default {
        name: "selectAddress",
      data(){
          return{
            show:false,
            home:'',
            dizi:'',
             name:'',
            phone:'',
            phone_bk:'',
            scan:'',
            qding:'',
            sex:'',
            geohash: "",
          }
      },
      mounted(){
        this.scan=this.$route.query.name1;
        this.geohash=this.$route.query.name;
      },
      methods:{
          home1(){
            this.sex="男士";
          },
        home2(){
          this.sex="女士";
        },
        delet(){
         this.$http({
           url:`https://elm.cangdu.org/v1/users/${36467}/addresses`,
           method:'post',
           data:{
             address:this.dizi,
             address_detail:this.scan,
             geohash:this.geohash,
             name:this.name,
             phone:this.phone,
             tag:this.home,
             sex:this.sex,
             tag_type:"公司",
             phone_bk:this.phone_bk
           },
         }).then(function (reslut) {
           console.log(reslut.data);
         })

        },
          jiaa(){
            this.show=true
          },
          nan(){},
        nv(){},
        fanhui(){
          this.$router.push({path:'/addAddress'})

        }
      }
    }
</script>

<style scoped>
  .span111:hover{
    color:#4cd964;
  }
  .span112:hover{
    color:#4cd964;
  }
  .span112,.span111{
   font-size: 0.2rem;
    display: inline-block;
    margin: 0 0.1rem;
    color:#ccc;
  }
  td{
    width: 2.64rem;

  }
  .jiahao{
    width: 0.25rem;
    height: 0.25rem;
  display: inline-block;
    float: right;
    position: absolute;
    right:0.1rem;
    top:1.8rem
  }
  .selectinput input{
    width: 2rem;
  }
  .selectinput{
    float: left;
    width: 2rem;
    height:0.58rem;
    display: inline-block;

    line-height: 0.58rem;
    font-size: 0.18rem;
  }
  .selectspan{
    margin-left: 0.17rem;
    width: 1.1rem;
    float: left;
    height: 0.58rem;
    line-height: 0.58rem;
    font-size: 0.18rem;
    display: inline-block;
  }
  .selectul{
    width: 100%;
    padding: 0 0.16rem;
    background: #fff;
  }
  .qqbutton {
    display: block;
    margin: 0.1rem auto;
    background:#4cd964;
    border: none;
    line-height: 0.4rem;
    width: 90%;
    color:#fff;
    border-radius: 0.05rem;
    font-size: 0.18rem;
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
