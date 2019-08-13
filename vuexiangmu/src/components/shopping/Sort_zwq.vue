<template>
    <div class="SortRoot">
      <van-sticky>
        <van-nav-bar
          :title="title"
          left-arrow
          @click-left="onClickLeft"
        />
      </van-sticky>
      <div class="header">
        <div class=" box box1" @click="toclassify">{{title}}</div>
        <div class=" box box2" @click="torankings ">排序</div>
        <div class=" box box3" @click="toscreen">筛选</div>
      </div>
      <div class="b">
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
  import Vue from "vue";
  import Vue1 from "../js";
    export default {
        name: "Sort_zwq",
      data() {
        return {
          isshow:false,
          title:'',
          latitude:'',
          longitude:'',
          dataed:[],
          cateBtn:[],
          dataeds:{},
          classifyarr:[],
          url:'',
          allcate:[],
          name:'',
          arrey:'',
          all:[],
        }

      },
      created(){
        Vue1.$on("child1",this.getter)
      },
      mounted(){
          this.title=this.$route.query.name;
          this.latitude=this.$route.query.name1
        this.longitude=this.$route.query.name2;
            if(this.$route.query.name){
              localStorage.setItem("name",this.$route.query.name)
            }else {
              this.title=  localStorage.getItem("name")
            }
      },
      methods:{
          getter(v){
            this.dataed=v;
          },
        toclassify(){
       this.$router.push({name:'class'})
        },
        torankings(){
          //console.log(2)
          this.isshow=!this.isshow
          Vue1.$emit("child",this.isshow);
          this.$router.push({name:'ran'})
        },
        toscreen(){
          this.$router.push({name:"scr"})
          Vue1.$emit("child",this.isshow);
        },
        onClickLeft(){
            this.$router.go(-1)
          },
      }
    }
</script>

<style scoped>
  .leftcontent{
    z-index: 1001;
  }
  .classify{
    z-index: 1000;
  }
  .van-nav-bar__title{
    color: white;
    font-weight:700;
    font-size: 0.18rem;
  }
  .van-nav-bar{
    background: #3190e8;

  }
  .van-icon {
    color: white;
    font-size: 0.25rem;
    margin-left: -100%;
  }
.header{
  background: white;
  line-height: 0.375rem;
}
  .box{
    display: inline-block;
    width: 32%;
    text-align: center;
  }
  .box1{
 border-right: 1px solid #f5f5f5;
  }
  .box2{
    border-right: 1px solid #f5f5f5;
  }
</style>
