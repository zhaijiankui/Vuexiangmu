<template>
    <div class="dingdan">
      <div class="restheader">
        <van-icon name="arrow-left"  class="van_icon" @click="add" />
        <span class="restpass">{{dhuan1}}</span>
      </div>
      <img :src="'https://elm.cangdu.org/img/'+img" alt="">
      <br>
      <p class="left">{{dhuan1}}</p>
      <br>
      <p class="left">{{dhuan1}}</p>
        <p>{{tip}}</p>
    </div>
</template>

<script>
    export default {
        name: "dingdan",
      data(){
          return {
            dhuan1:'',
            img:'',
            tip:'',
          }
      },
      methods:{
        add(){
          this.$router.go(-1);
        }
      },
      mounted(){
        // age:value.image_path,age1:value.name,age2:value.tips
          this.dhuan1=this.$route.query.age1;
          this.img=this.$route.query.age;
          this.tip=this.$route.query.age2;
      }
    }
</script>

<style scoped>
  .left{
    margin-left: 0.1rem;
    margin-top: 0.1rem;
    font-size: 0.15rem;
  }
.dingdan{
  width: 100%;
  height: 100%;
  background-color: white;
}
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
  font-size: 0.22rem;
  text-align: center;
  color:#fff;
  font-family:"微软雅黑";
  margin: -0.2rem 1rem 0.12rem 1.2rem;
}
  img{
    width: 100%;
    height: 55%;
  }
</style>
