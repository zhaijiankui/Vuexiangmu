<template>
    <div class="searchFood">
      <div class="searchF">
        <div class="searchF1">
          <input type="text" placeholder="请输入美食和商家名称" class="inputShi" v-model="a" >
          <van-icon name="cross" class="van_iconcha" @click="vaniconcli"/>
          <p v-for="v in array">{{v}}</p>
        </div>
        <button @click="address">提交</button>
        <button @click="qingk">清空历史</button>
      </div>
    </div>
</template>

<script>
  import Vue from "vue";
    export default {
        name: "searchFood",
      data(){
          return{
            a:"",
            array:[],
            show:false,
          }
      },
      mounted(){
        console.log(this.array);
      },
      watch:{

      },
      methods:{
        vaniconcli(){
         this.a="";

    },
        address(){
          let _this=this;
          this.array.push(this.a);
          Vue.axios.get("https://elm.cangdu.org/v4/restaurants?geohash=31.22967,121.4762",{params:{keyword:this.a}}).then(function (reslut) {
            console.log(reslut.data);

            if(reslut.data.status!=0){
              // _this.$router.push({path:'/child3'})
            }
            else{
                _this.$dialog.alert({
                  message: reslut.data.message
                });
              }
          })
        },
        qingk(){
this.array=[];
        }
      }
    }
</script>

<style scoped>
  .searchF{
    width: 100%;
    height:0.6rem;
    background: #fff;
    border:0.014rem solid rgba(0,0,0,0.1);
  }
  .van_iconcha{
    width: 0.3rem;
    line-height: 0.35rem;
    text-align: center;
    color:blue;
    background:rgba(0,0,0,0.01);

  }
  .searchF1 input{
    display:inline-block;
    width:2.40rem;
    height:0.35rem;
    background:rgba(0,0,0,0.01);
    font-family: "微软雅黑";
    color:rgba(0,0,0,0.7);


  }
  .searchF button{
    width:0.78rem;
    height:0.36rem;
    background:deepskyblue;
    margin: 0.1rem 0 0.1rem 0;
    border-radius: 0.05rem;
    border:none;
  }
  .searchF1{
    display: inline-block;
    border-radius: 0.04rem;
    border:1px solid rgba(0,0,0,0.1);
    margin: 0.1rem 0.025rem 0.1rem 0.08rem;
    background:rgba(0,0,0,0.07);
  }
  .Sorryno{
    width: 100%;
    /*height:0.4rem;*/
    background:#fff;
    border:0.01rem solid rgba(0,0,0,0.1);
    text-align: center;
    line-height: 0.4rem;
  }
</style>
