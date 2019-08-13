<template>
    <div class="supervipnumber">
        <div class="dingsi">
      <div class="evaluateheader">
        <img :src="'http://elm.cangdu.org/img/'+ imgss" alt="" class="headerimg">
        <div class="imgleft">
          <img :src="'http://elm.cangdu.org/img/'+ imgss" alt="">
        </div>
        <div class="pingjiaright">
          <ul class="pjul">
            <li class="li1">
              <span class="iconfont li1span" @click="fanhui">&#xe64c;</span>
              {{namess}}
            </li>
            <li class="li2">商家配送 / {{namess3}}必达 / 配送费￥{{namess2}} <span class="iconfont li2span">&#xe607;</span></li>
            <li class="li3">公告:欢迎光临,用餐高峰期请提前下单,谢谢!!</li>
          </ul>
        </div>
        <div class="footli">
          <span class="span1">5</span>
          <span class="span2">满60减8 满30减5（app专享）</span>

          <span class="iconfont span4">&#xe607;</span>
          <span class="span3">1个活动</span>
        </div>
      </div>

  <div class="sppj">
    <div class="shangp">商品</div>
    <div class="pingj" @click="pingjia">评价</div>
  </div>
      </div>
      <div class="xialll">
      <div class="ssss">
      <div class="hotxiao">
        <span>{{dataed}}</span>
        <span>{{dataed1}}</span>
        <span>....</span>
      </div>
      <div class="bang">
      <div class="bangdan" v-for="(data,index) in index_entry" @click="sk(data)">
          <span class="bangdan1">{{data.name}}</span>
        <span class="bangdan2" v-if="data.type!=1">{{data.type-1}}
</span>
      </div>
      </div>
      <div class="sp"v-for="(value,index) in index_entry1">
      <div class="yigesp" v-for="(v,key) in value.foods">
        <div class="divimg">
          <img :src="'https://elm.cangdu.org/img/'+v.image_path" alt="">
        </div>
       <div class="spleft">
            <p class="leftp" @click="addBack(v)">{{v.name}} <span>招牌</span></p>
            <p class="leftp1">{{v.description}}</p>
         <p class="leftp2">
           <span>{{v.tips}}</span>
           <span>好评率{{v.satisfy_rate}}%</span>
         </p>
         <p class="left3" v-if="v.activity!=null"><span>{{v.activity.image_text}}</span></p>
       </div>
        <div class="footb">
          <span>￥</span>
          <span>{{v.specfoods[0].price}}</span>
         <span>起</span>
          <img @click="addB(v,key,value.type)" src="../../assets/img/jiajia.png" v-if="v.specfoods[0].specs.length==0" alt="">
          <span class="foots" :class="{foot:true}" v-if="v.specfoods[0].specs.length>0" @click="cartArred(v)">选{{v.specfoods[0].specs
[0].name}}</span>
          <span class="foots" v-if="v.__v!=0">{{v.__v}}</span>
          <img v-if="v.__v!=0" src="../../assets/img/jian.png" @click="addJ(v,key,value.type)" alt="">
        </div>
        </div>
      </div>
    </div>
        <router-view></router-view>
    </div>
      <van-popup v-model="show1111" class="aaaa">
        <p class="vanp"><span class="spanw">{{aff.name}}</span><span class="spanx" @click="spanx">X</span></p>
        <span v-for="(value,index) in aff.specfoods" v-if="index<1"><p class="guig" >{{value.specs[0].name}}</p>
        <p class="guig"><span class="mor">{{value.specs[0].value}}</span><span class="mor">啊</span></p>
        <p class="guig"><span class="ers">￥{{value.price}}</span><span class="jiaru" @click="add(aff)">加入购物车</span></p></span>
      </van-popup>
    </div>
</template>
<script>
  import Vue from 'vue'
  import Vue1 from '../js';
  import store from '../../main'
    export default {
      name: "supervipnumber",
      store,
      data() {
        return {
          index_entry:[],
          index_entry1:[],
          dataed:'热销榜',
          dataed1:'是的分身乏术放',
          id:'',
          imgss:[],
          namess:[],
          namess2:[],
          namess3:[],
          namess4:[],
          de:'',
          czhi:'',
          count:0,
          show:false,
          cartArr:[],
          unit:20,
          arr:[],
          arra:[],
          array:{},
          arrd:[],
          show1111:false,
          aff:{},
          address:[],
        }
      },
          mounted(){
            // this.$store.commit("initData");
              this.id=this.$route.query.name4;
              console.log(this.id);
              this.imgss=this.$route.query.names,
              this.namess=this.$route.query.name1,
              this.namess2=this.$route.query.name2,
              this.namess3=this.$route.query.name3,
              this.namess4=this.$route.query.name5
              this.czhi={name:this.imgss,name1:this.namess};
             Vue1.$emit("child1",this.czhi);
             Vue1.$on("chis",this.geetr);
          Vue.axios.get("https://elm.cangdu.org/shopping/v2/menu",{
            params:{restaurant_id:this.id}
          }).then((data) => {
            console.log(data.data);
            this.index_entry = data.data;
            for(let i=0;i<this.index_entry.length;i++){
              if(this.arr.indexOf(this.index_entry[i].name)==-1){
                this.arr.push(this.index_entry[i].name)
              }
            }
            this.index_entry1 = data.data;
            this.sk({name:"热销榜",description:'是的分身乏术放'})
          }).catch((err) => {
            console.log(err);
          });
          console.log(this.index_entry)
        },
filters:{
  getImgPath(v){
    if(v.substr((v.length))-3=='png'){
      return 'https://fuss10.elemecdn.com'+v+'.png'
    }
   else if(v.substr((v.length))-3=='peg'){
      return 'https://fuss10.elemecdn.com'+v+'.jpeg'
    }
    else {
      return '//elm.cangdu.org/img/default.jpg'
    }
  }
},
      computed:{
       array:{
          get(){
            return this.$store.state.obj.array
          },
          set(value){
            console.log(value)
            this.$store.commit("array",value);
          }
        }
      },
      methods: {
        geetr(v){
          this.address=v;
        },
        add(aff){
          console.log(aff);
          aff.__v++;
          const p={product:aff,count:aff.__v};
          if(this.address.length==0){
            this.address.push(p);
          }
          else{
            //以后添加数组里已经有商品需要判断商品是否已经添加
            const list=this.address.some((v)=>{
              return v.product._id===aff._id;
            })
            if(list){
              //商品已添加过数量自增
              const arr=this.address.filter((v)=>{
                return v.product._id===aff._id;
              })
              arr[0].count++;
            }
            else {
              this.address.push(p);
            }
          }
          this.show1111=false;
          Vue1.$emit("chi",this.address);
        },
        cartArred(value){
          console.log(value)
          this.show1111=true;
          this.aff=value;
          console.log(this.aff)
        },
        spanx(){
          this.show1111=false;
        },
        addB(value,key,type){
          value.__v++;
          const p={product:value,count:value.__v};
          if(this.address.length==0){
            this.address.push(p);
          }
          else{
            //以后添加数组里已经有商品需要判断商品是否已经添加
            const list=this.address.some((v)=>{
              return v.product._id===value._id;
            })
            if(list){
              //商品已添加过数量自增
              const arr=this.address.filter((v)=>{
                return v.product._id===value._id;
              })
              arr[0].count++;
            }
            else {
              this.address.push(p);
            }
          }
          Vue1.$emit("chi",this.address);
        },
        addJ(value,key,type){
          value.__v--;
            this.address.filter((v) => {
          if(v.product._id===value._id) {
                   v.count--;
               }
            })
          Vue1.$emit("chi",this.address);
        },
        fanhui(){
          this.$router.go(-1);
        },
        addBack(v){
          this.de=v.activity.image_text;
          console.log(v.activity.image_text)
        },
        pingjia(){
          this.$router.push({path:"/evluate",query:{names:this.imgss,name1:this.namess,name2:this.namess2,name3:this.namess3,name5:this.namess4}})
        },
        sk(data){
          console.log(data)
          this.dataed=data.name;
          this.dataed1=data.description
          if(data.name=="热销榜"){
            this.dataed1=data.description
            this.index_entry1= this.index_entry
          }
          this.index_entry1=this.index_entry.filter((pro)=>{
            return pro.name===data.name;
          })
        },
        Returnlastpage() {
          this.$router.go(-1);
        },
      },
      computed:{

      }
    }
</script>

<style scoped>
  .mor:hover{
    background:deepskyblue;
    color:#fff;
  }
  .jiaru{
    display: inline-block;
    color:#fff;
    padding: 0.05rem;
    background:#3199e8;
    float: right;
    font-size: 0.16rem;
    font-weight: bold;
    font-family: "微软雅黑";
    border-radius: 0.05rem;
    margin-right: 0.1rem;
  }
  .ers{
    display: inline-block;
    color: orangered;
    float: left;
    font-size: 0.25rem;
    font-weight: bold;
    font-family: "微软雅黑";
  }
  .mor{
    display: inline-block;
    padding: 0.05rem;
    font-size: 0.15rem;
    margin-left: 0.15rem;
    border: 0.01rem solid deepskyblue;
  }
  .guig{
    width: 100%;
    font-size: 0.25rem;
    text-align: left;
    padding-left: 0.15rem;
    margin-top: 0.2rem;
  }
  .spanx{
    margin-left: 0.8rem;
    font-size: 0.3rem;
  }
  .spanw{
    font-size: 0.3rem;
    margin-left: 0.8rem;
  }
  .vanp{
    width: 100%;
    height: 0.3rem;
  }
  .aaaa{
    text-align: center;
    background-color: white;
    width:3.2rem;
    height:2rem;
    border-radius: 0.1rem;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
  .foot{
    background-color:cornflowerblue;
    color: white;
    padding: 0.05rem;
    border-radius: 0.03rem;
  }
.supervipnumber{
  width: 100%;
  height: 100%;
}
.leftp{
  width: 33.33%;
  overflow: hidden;
}
  .span1{
    display: inline-block;
    background: orangered;
    color:#fff;
    float: left;
    font-size: 0.14rem;
  }
  .span2{
    display: inline-block;
    float: left;
    font-size: 0.14rem;
    color:#fff;
  }
  .span3,.span4{
    display: inline-block;
    float: right;
    font-size: 0.14rem;
    color:#fff;
    margin-right: 0.1rem;
  }
  .footli{
    width: 100%;
    height: 0.2rem;
  }
  .li2span{
    display: inline-block;
    color:#fff;
    position: absolute;
    top:0.5rem;
    right:0.1rem;
  }
  .li2,.li3{
    font-size: 0.10rem;
    color:#fff;

  }
  .li1span{
    position: absolute;
    top: 0.05rem;
    left: 0.05rem;
    font-size: 0.18rem;

  }
  .li1{
    width: 100%;
    height: 0.36rem;
    text-align: left;
    font-size: 0.2rem;
    font-weight: bold;
    font-family: "微软雅黑";
    color:#fff;
  }
  .pjul{
    width: 100%;
    height: 0.71rem;
  }
  .evaluateheader{
    width: 100%;
    height: 1.1869rem;
    padding: 0.09rem 0 0.09rem 0.09rem;
  }
  .pingjiaright{
    width: 2.9rem;
    height: 0.71rem;
    float: right;
  }
  .imgleft{
    width: 0.67rem;
    height: 0.67rem;
    float: left;
    background: #ccc;
  }
  .imgleft img{
    width: 0.67rem;
    height: 0.67rem;
  }
  .headerimg{
    width: 100%;
    height: 80%;
    top:0;
    left: 0;
    position: absolute;
    overflow: hidden;
    z-index: -1;
    filter: blur(5px);
  }


.xialll{
  margin-top: 1.7rem;
}
  .dingsi{
    top:0;
    left: 0;
   position: fixed;
    z-index:1;
  }
  .sppj{
    width: 110%;
    height: 0.5rem;
    background: #fff;
  }
  .pingj{
   width:  0.6rem;
    height: 0.4688rem;
    font-size: 0.20rem;
    font-family: "微软雅黑";
    text-align: center;
    line-height: 0.4688rem;
    float: left;
    margin:0.07rem 0 0 0.7rem;
  }
  .bangdan:hover{
    border-left: 0.03rem solid #3190e8;
    background: #fff;
    color:#3190e8;
  }
  .shangp{
    width: 0.6rem;
    height: 0.3rem;
    font-size: 0.20rem;
    font-family: "微软雅黑";
    text-align: center;
    float: left;
    margin: 0.1rem 0.5rem;
    line-height: 0.3rem;
    border-bottom: 0.03rem solid #3190e8;
    color:#3190e8;
  }
  .sp{
    width: 2.7rem;
    display: inline-block;
    float: right;

  }
  .bang{
    width: 0.1rem;
    display: inline-block;
    float: left;
  }
  .bangdan2{
    display: inline-block;
    background:orangered;
    color: #fff;
    width: 0.14rem;
    font-size: 0.12rem;
    line-height: 0.14rem;
    text-align: center;
    position: absolute;
    right: 0;
    top: 0;
    border-radius: 50%;
  }
  .bangdan1{
    text-align: left;
    font-size: 0.16rem;
    font-family: "微软雅黑";
    float:left;
    width: 0.9rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .bangdan{

    display: inline-block;
    background:rgba(0,0,0,0.01);
    position: relative;
    width: 0.9rem;
    float: left;
    height: 0.64rem;
    padding: 0.16rem 0.07rem;
  }
  .hotxiao span:nth-child(3){
    font-size: 0.14rem;
    font-weight: bold;
    font-family: "微软雅黑";
    display: inline-block;
    float: right;
    color:rgba(0,0,0,0.3);
  }
  .hotxiao span:nth-child(2){
    font-size: 0.14rem;
    font-weight: bold;
    font-family: "微软雅黑";
    color:rgba(0,0,0,0.3);
  }
  .hotxiao span:nth-child(1){
    font-size: 0.2rem;
    font-weight: bold;
    font-family: "微软雅黑";
  }
  .hotxiao{
    width: 2.85rem;
    height: 0.5rem;
    padding: 0.09375rem;
    background: rgba(0,0,0,0.01);
    float: right;
  }
  .footb img{
    border-radius: 50%;
    float: right;
  }
  .footb span:nth-child(5){
  margin-right: 0.05rem;
  }
  .foots{
    display: inline-block;
    float: right;
    line-height: 0.23rem;
  }
  .leftp span{
    width: 0.25rem;
    height: 0.15rem;
    display: inline-block;
    float: right;
    margin-right: 0.15rem;
    border: 0.005rem solid orangered;
    color: orangered;
    font-size: 0.1rem;
    font-weight: 400;
    border-radius: 0.05rem;
  }
  .footb span:nth-child(1){
    color:orange;
    display: inline-block;
    margin-right: 0.01rem;
    font-size: 0.15rem;
    line-height: 0.23rem;
    font-weight: 400;
  }
  .footb span:nth-child(2){
    color:orangered;
    display: inline-block;
    margin-right: 0.07rem;
    font-size: 0.16rem;
    line-height: 0.23rem;
    font-weight:bold;
    font-family: "微软雅黑";
  }
  .footb{
    width: 2.1rem;
    height: 0.2369rem;
    margin: 0.07rem 0 0 0.56rem;
    float: left;
  }
  .left3 span{
    display: inline-block;
    border: 1px solid orangered;
    border-radius: 0.05rem;
    color: orangered;
    font-size: 0.12rem;
    font-weight: 400;
    line-height: 0.16rem;

  }
  .left3{
    width: 100%;
    display: inline-block;
    margin-bottom: 0;
  }
  .leftp2{
    display: inline-block;
    width: 100%;
    margin:0;
  }
  .leftp2 span{
    display: inline-block;
    height: 0.14rem;
    line-height: 0.16rem;
    font-size: 0.12rem;
  }
  .leftp1{
    width: 100%;
    margin-bottom: 0;
    font-size: 0.1rem;
    line-height: 0.12rem;
    color: rgba(0,0,0,0.4);
    font-family: "微软雅黑";
    margin-right: 0.15rem;
  }
  .leftp{
    font-size: 0.15rem;
    color:#333;
    text-align: left;
    width: 100%;
    height: 0.21rem;
    display: inline-block;
    margin-bottom: 0.04688rem;
    font-weight: bold;
    font-family: "微软雅黑";

  }
  .spleft{
    width: 2.08rem;
    float: right;
  }

  .divimg img{
    width: 0.468rem;
    height: 0.468rem;
  }
.divimg{
  width: 0.46875rem;
  height: 0.78563rem;
  margin-right: 0.09375rem;
  float: left;
}
  .yigesp{
    width: 2.8594rem;
    padding: 0.14rem 0.09375rem;
    float: right;
    background: #fff;
    border-bottom: 0.01rem solid rgba(0,0,0,0.2);
  }
</style>
