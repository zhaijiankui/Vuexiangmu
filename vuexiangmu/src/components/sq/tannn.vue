<template>
    <div class="tannn">
      <!--弹窗&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;-->
      <div class="border" v-if="abc">
        <!--图片-->
        <img src="../assets/img/jiao.png" alt="" class="imga">
        <div class="message">请输入正确用户名</div>
        <button @click="yc" class="buttom123">确定</button>
      </div>

    </div>
</template>

<script>
    export default {
        name: "tannn",
      data(){
        return{
          abc: false,

        }
      } ,
      methods:{
          // 隐藏
        yc(){
          this.abc=false
        },
        fanhui(){
          this.$router.go(-1)
        }
      }
    }
</script>

<style scoped>
  /*弹窗--------*/
  .buttom123{
    border:none;
    text-align: center;
    display:block;
    line-height: 0.6rem;
    width: 100%;
    font-size: 0.25rem;
    height:0.6rem;
    color:#fff;
    font-family: "微软雅黑";
    border-radius: 0 0 0.08rem 0.08rem;
    font-weight: bold;
    background: springgreen;
  }
  .message{
    display: block;
    text-align: center;
    height: 0.3rem;
    width: 100%;
    font-size: 0.2rem;
    font-family: "微软雅黑";
    color:rgba(0,0,0,0.5);
    font-weight: bold;
  }
  .imga{
    height: 1rem;
    border-radius: 0.08rem 0.08rem 0 0;
    display: block;
    margin: 0 auto;
  }
  .border{
    text-align: center;
    background-color: white;
    border-radius: 0.2rem;
    width:3.2rem;
    height:1.8rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
</style>
