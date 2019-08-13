<template>
  <div>
    <div class="discfoot" >
      <div class="pull-left footleft" @click="Con">兑换红包</div>
      <div class="footright" @click="reco">推荐有奖</div>
      <div class="clearfix"> </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "discfoot",
      methods:{
        Con(){
          this.$router.push({path:'/huo'})
        },
        reco(){
          this.$router.push({path:"/reco"})
        }

      }
    }
</script>

<style scoped>
  .discfoot{
    background: white;
    line-height: 0.5rem;
    width: 100%;
    position: absolute;
    bottom: 0;
    text-align: center;
  }

  .discfoot div{
    display: inline-block;
    text-align: center;
  }

  .footleft{
    width: 50%;

    border-right: 1px solid #f5f5f5;
  }
</style>
