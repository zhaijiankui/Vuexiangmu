<template>
    <div class="addAddress">
      <div class="Orderheader">
        <span class="iconfont orderspan1" @click="fanhui">&#xe6f3;</span>
        <span class="orderspan2">选择地址</span>
      </div>
      <ul class="searchul" v-if="show1" v-for="(data,index) in ddz">
        <li class="li1 diz" @click="diz(data)">姓名：{{data.name}}
          <span class="li4">联系电话:{{data.phone}}</span>
        </li>
        <span class="spanx" @click="spanx(data,index)">X</span>
      </ul>
      <div class="address">
        <div class="address1" @click="selectAddress">
        <span class="iconfont span1">&#xe654;</span>
        <span class="span2">新增收货地址</span>
        </div>
      </div>
    </div>
</template>

<script>
  import Vue from 'vue'
    export default {
        name: "addAddress",
      data(){
        return{
          name00:'',
          name11:'',
          name22:'',
          name33:'',
          name44:'',
          name55:'',
          name66:'',
          name77:'',
          show1:false,
          ddz:[],
          addid:'',
        }
      },
      mounted(){
          this.name11=this.$route.query.name1,
          this.name22=this.$route.query.name2,
          this.name33=this.$route.query.name3,
          this.name44=this.$route.query.name4,
          this.name55=this.$route.query.name5,
          this.name55=this.$route.query.name5,
          this.name66=this.$route.query.name6,
          this.name77=this.$route.query.name7
        Vue.axios.get("https://elm.cangdu.org/v1/users/"+37019+"/addresses")
          .then((result)=>{
            // console.log(result.data)
            this.ddz=result.data
          }).catch(function (error) {

        });
      },
      methods:{
          spanx(data,index){
            delete (index,1)
            Vue.axios.get("https://elm.cangdu.org/v1/users/"+37019+"/addresses",{params:{address_id:data.id}}).then((data)=>{
              console.log(data.data);
              if(data.data.status!=0){
                this.ddz.splice(index,1);
              }
            })
          },
          diz(data){
            console.log(data)
            let abc=JSON.stringify(data);
            this.$router.push({path:"/confirm"})
          },
        selectAddress(){
          this.$router.push({path:"/denglu1"})
        },
        fanhui(){
         this.$router.go(-1)
        }
      },
      watch:{
       name11(){
         if(this.name!=""){
           this.show1=true
         }else {
           this.show1=false
         }
       }
      },
    }
</script>

<style scoped>

  .diz{
    width: 70%;
    margin-left: 0.15rem;
  }
  .spanx{
    width: 25%;
    text-align: center;
    padding-left: 0.5rem;
  }
  .li4{
    display:block;
    margin-right: 0.1rem;
    font-size: 0.1rem;
    line-height: 0.12rem;
  }
  .li1{
    font-size: 0.16rem;
    line-height: 0.18rem;
  }
 .spanx{
   display: inline-block;
   float: right;
   font-size: 0.2rem;
   margin-top: -0.35rem;
 }
li{
  width: 100%;

}
ul{
  width: 100%;
  padding: 0.1rem;
  border-bottom: 0.01rem solid rgba(0,0,0,0.2);
}
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
