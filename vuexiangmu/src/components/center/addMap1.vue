<template>
  <div class="addMap">
    <div class="restheader">
      <van-icon name="arrow-left" class="van_icon" @click="xinz"/>
      <span class="restpass">新增地址</span>
    </div>
    <ul>
      <li><input type="text" placeholder="请填写您的姓名" v-model="aa"></li>
      <li><input type="text" placeholder="学校/写字楼/小区等" v-model="bb"></li>
      <li><input type="text" placeholder="详细送餐地址" v-model="cc"></li>
      <li><input type="text" placeholder="请填写能联系到您的电话" v-model="dd"></li>
      <li>
        <input type="text" placeholder="备用联系电话（选填）" v-model="ee">
      </li>
    </ul>
    <button @click="dzzzz">新增地址</button>
  </div>
</template>

<script>
  import Vue from "vue"
    export default {
        name: "addMap",
      data(){
          return{
            aa:'',
            bb:'',
            cc:'',
            dd:'',
            ee:'',
            user_id:'',

        }
      },
      methods:{
          xinz(){
            this.$router.go(-1)
          },
        dzzzz(){
            let _this=this
          this.$http({
            url: "https://elm.cangdu.org/v1/users/"+37019+"/addresses",
            method: "post",
            data: {
              user_id:this.user_id,
              name: this.aa,
              address: this.bb,
              address_detail: this.cc,
              phone: this.dd,
              phone_bk: this.ee,
              tag:"标签",
              tag_type:1,
              sex:1,
              geohash:'31.38098'+','+'121.50146',
            },
            withCredentials: true
          }).then(function (res) {
            console.log(res.data)
            if(res.data.status!=0){
              console.log(res.data.status)
              _this.$router.push({path:"/addAddress"})
            }
          })
        }
      },
      mounted() {
        this.user_id=this.$route.query.names1,
          this.bb=this.$route.query.names3
      }
    }
</script>

<style scoped>
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
    color:rgba(255,255,255,0.5);
    border-radius: 0.05rem;
    font-size: 0.18rem;
  }
  input{
    padding-left: 0.1rem;
   height: 0.4rem;
    width: 90%;
    display: inline-block;
    margin: 0.1rem 0.2rem;
    background:rgba(0,0,0,0.1);
    border:0.005rem solid rgba(0,0,0,0.1);
    border-radius: 0.05rem;
  }



</style>
