<template>
    <div class="sousuoShi">
        <div class="lisheader">
              <router-link :to="{path:'/home'}"><van-icon name="arrow-left" class="van_icon"/></router-link>
              <span class="suozaicity">{{dian}}</span>
               <router-link :to="{path:'/souyeShi'}"><span class="changecity">切换城市</span></router-link>
        </div>
        <div class="inputmap">
          <div class="inputq">
            <input type="text" placeholder="输入学校，商务楼，地址" v-model="aa">
            <span v-if="chaa" @click="chaaa">x</span>
          </div>

          <button type="info" class="van_buttonShi" @click="ssdz">提交</button>
        </div>

        <div class="sousuoLs" v-if="show">搜索历史</div>

      <!--历史记录区域-->
      <ul class="searchul">
        <li v-for="(data,value) in aaArr">
          <fieldset @click="apply(data)">
            <legend>{{data.name}}</legend>
            {{data.address}}

          </fieldset>
        </li>
      </ul>
      <!--清空所有-->
      <div class="Allqingk" v-if="xians" @click="qingk">清空所有</div>
    </div>

</template>

<script>
  import Vue from "vue";
    export default {
        name: "sousuoShi",
      data(){
        return{

          xians:false,
          aa:'',
          value:"",
          aaArr:[],
          dian:'',
          dian1:'',
          show:'',
          chaa:false
        }
      },
     methods:{
       apply(data){
         this.$router.push({path:'/child2',query:{name:data.address,name1:data.longitude,name2:data.latitude}})
       },
          chaaa(){
            this.aa=''
          },
          qingk(){
            this.aaArr=[];
            this.xians=false;
            this.show=true
          },

       ssdz() {
            this.show=false
           Vue.axios.get("https://elm.cangdu.org/v1/pois", {
             params: {
               keyword: this.aa,
               city_id:this.dian1,
             }
           }).then((data) => {
             console.log(data.data);
             this.aaArr = data.data;
             if(this.aaArr.length>=1){
               this.xians=true
             }
           }).catch((err) => {
             console.log(err);
           });
         }
       },
      mounted(){
          this.dian=this.$route.query.name;
          console.log(this.dian);
          this.dian1=this.$route.query.name1;
          if (this.aaArr!=[]) {
            localStorage.setItem('name',JSON.stringify(this.aaArr))
          }else{
            this.aaArr=JSON.parse(localStorage.getItem('name'))
          }
      },
      watch:{
          aa(){
            if(this.aa.length>0){
              this.chaa=true
            }else{
              this.chaa=false
            }
          }
      }

    }
</script>

<style scoped>
  .inputq{
    width: 90%;
    border:1px solid rgba(0,0,0,0.1);
    border-radius: 0.03rem;
    height:0.37rem;
    margin:0.1rem auto;
  }
  input~span{
    width: 0.14rem;
    height: 0.14rem;
    color:blue;
    display: inline-block;
    font-size: 0.18rem;
    line-height: 0.18rem;
    margin-top: 0.1rem;
    text-align: center;
    float: right;
    margin-right: 0.1rem;
  }
  fieldset{
    margin-left: 0.18rem;
    margin-top: 0.15rem;
    color:rgba(0,0,0,0.6);
    font-size: 0.15rem;
    font-family: "微软雅黑";
    border-bottom: 0.005rem solid rgba(0,0,0,0.15);
    padding-bottom: 0.15rem;
  }
  legend{
    border: none;
    font-size: 0.18rem;
    font-family: "微软雅黑";
    margin-bottom: 0;

  }
  .searchul{
    width: 100%;
    display: inline-block;
    background: #fff;
  }
.sousuoShi{
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
    border-bottom: 1px solid rgba(0,0,0,0.1);
    width: 90%;
    margin-bottom: 0.01rem;
    line-height:0.35rem;
    font-size: 0.16rem;
    display:inline-block;
    float: left;
    border-radius: 0.03rem;
    padding-left: 0.1rem;
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
    margin-top: -0.11rem;
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
