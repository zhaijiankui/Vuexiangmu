<template>
  <div class="myheader">
    <!--<p>{{value.name}}</p>-->
    <van-nav-bar
      :title="value.name"
      right-text="切换城市"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "child",
    data(){
      return{
        value:""
      }
    },
    mounted(){
      if(this.$route.query.name){
        this.value=this.$route.query.name;
        }
      else if(this.$route.query.name1){
        this.value=this.$route.query.name1

      }else {
        this.value=this.$route.query.name2
      }
      if(this.value!==""){
        localStorage.setItem("age",JSON.stringify(this.value));
      }
      else {
        this.value=JSON.parse(localStorage.getItem("age"));
        console.log(this.value);
      }

      },

    methods: {
      onClickLeft() {
        this.$router.push({path:"/souyeShi"});
      },
      onClickRight() {
        this.$router.push({path:"/souyeShi"});
      },
    }
  }
</script>

<style scoped>
  div[data-v-3a9f86c9]{
    /*background:dodgerblue;*/
    color:white;
    font-size:0.18rem;
    font-family: '微软雅黑';
  }
  .van-nav-bar__text{
    color:#fff;
    font-size:0.14rem;
    /*background:dodgerblue;*/
  }
  *:before, *:after{
    color:white;
    font-size: 0.16rem;
  }
</style>
