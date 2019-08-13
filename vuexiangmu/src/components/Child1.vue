<template>
  <div class="sousuoShi">
    <div class="lisheader">
      <router-link :to="{path:'/home'}"><van-icon name="arrow-left" class="van_icon"/></router-link>
      <span class="suozaicity">{{value}}</span>
      <router-link :to="{path:'/home'}"><span class="changecity">切换城市</span></router-link>
    </div>
    <div class="inputmap">
      <input type="text" v-model="getInput" placeholder="输入学校，商务楼，地址">
      <button type="info" class="van_buttonShi" @click="address">提交</button>
    </div>

    <div class="sousuoLs">搜索历史</div>

    <!--历史记录区域-->
    <div v-for="(v,k) in array">
    <van-panel class="van-panel" :title="v.name" >
     <router-link :to="{path:'/child2',query:{name:v.address,name1:v.latitude,name2:v.longitude}}"><div>{{v.address}}</div></router-link>
    </van-panel>
    </div>
    <!--清空所有-->
    <div class="Allqingk" @click="add" >清空所有</div>
  </div>

</template>

<script>
  import Vue from "vue";
  export default {
    name: "Child1",
    data(){
      return{
        value:[],
        getInput:'',
        array:[],
        all:[]
      }
    },
    created(){
      if(this.$route.query.name){
        this.value=this.$route.query.name;
        this.id=this.$route.query.id;
        localStorage.name1 =this.value
      }else if(this.$route.query.name1){
        this.value=this.$route.query.name1;
        this.id=this.$route.query.name3;
        localStorage.name1 =this.value ;
        localStorage.name3 =this.id ;
      }else {
        this.value=this.$route.query.name2
        this.id=this.$route.query.name4
        localStorage.name1 =this.value
        localStorage.name3=this.id
      }
    },
    mounted(){
      this.address();
    },
    methods:{
      address(){
        console.log(this.value);
        let _this=this;
        console.log(_this.id);
        Vue.axios.get("https://elm.cangdu.org/v1/pois",{params:{city_id:this.id,keyword:this.getInput,type:'search'}}).then(function (resluts) {
          console.log(resluts.data);
          _this.array=resluts.data;
          if(_this.array!=[]){
            localStorage.setItem("ages", JSON.stringify(resluts.data))
          }
          else{
            this.array=JSON.parse(localStorage.getItem("ages"))
          }
        }).catch(function (error) {
          console.log(error);
        })
        if(_this.getInput!="") {
          localStorage.setItem("input", this.getInput);
        }
        else{
          this.getInput=localStorage.getItem("input");
          console.log(this.getInput)
        }
      },
      add(){
        this.array=[];
        this.getInput=''
      }
    },


  }

</script>

<style scoped>
  .sousuoShi{
    /*margin-top: 0.1rem;*/
    width: 100%;
  }
  .inputmap{
    background: #fff;
    width: 100%;
    margin-top: 0.1rem;
    border:1px solid rgba(0,0,0,0.1);
    line-height: 0.9rem;
  }
  .van_buttonShi{
    width: 90%;
    margin:0 auto;
    margin-bottom: 0.1rem;
    line-height:0.32rem;
    display:block;
    background: dodgerblue;
    font-size: 0.18rem;
    border:none;
    color:#fff;
    border-radius: 0.03rem;
  }
  input {
    width: 90%;
    margin:0.1rem auto;
    border:1px solid rgba(0,0,0,0.1);
    line-height:0.35rem;
    display: block;
    border-radius: 0.03rem;
  }
  ul{
    width: 100%;
    border:1px solid rgba(0,0,0,0.1);
  }
  .sousuoLs{
    width: 100%;
    text-align: left;
    font-size: 0.12rem;
  }
  .Allqingk{
    width: 100%;
    font-size: 0.18rem;
    line-height: 0.4rem;
    text-align: center;
    border:1px solid rgba(0,0,0,0.1);
    background: #fff;
  }
  .van-panel{
    margin-top:0;
    border:1px solid rgba(0,0,0,0.1);
    background: #fff;
  }
  .lisheader{
    width: 100%;
    height: 0.5rem;
    background:dodgerblue;
    color:#fff;
    font-size: 0.22rem;
  }


  .suozaicity {
    margin: 0.11rem 1rem 0.12rem 1.3rem;
    display: inline-block;
  }
  .van_icon{
    font-size: 0.20rem;
    color:#fff;
  }
  .changecity{
    color:#fff;
    font-size: 0.16rem;
  }
</style>
