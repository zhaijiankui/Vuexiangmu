<template>
  <div id="app">
    <transition name="cut" mode="out-in">
    <keep-alive>
    <router-view></router-view>
    <router-view name="four"></router-view>
    <router-view name="foot"></router-view>
    </keep-alive>
      </transition>
  </div>
</template>

<script>
  // import Vue1 from "./components/js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
 //  import Children from "./components/Children";
  import 'element-ui/lib/theme-chalk/index.css'
export default {
  name: 'App',
  data(){
    return {

    }
  },
  created(){

  },
  components:{

  }
}
</script>

<style>
body,html{
  width: 100%;
  height: 100%;
}
  #app{
    width: 100%;
    height: 100%;
  }
/*阿里巴巴样式*/
@font-face {
  font-family: 'iconfont';  /* project id 1330698 */
  src: url('//at.alicdn.com/t/font_1330698_0koh2o8ihvw.eot');
  src: url('//at.alicdn.com/t/font_1330698_0koh2o8ihvw.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1330698_0koh2o8ihvw.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1330698_0koh2o8ihvw.woff') format('woff'),
  url('//at.alicdn.com/t/font_1330698_0koh2o8ihvw.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1330698_0koh2o8ihvw.svg#iconfont') format('svg');
}
.cut-enter{
  opacity: 0;
}
.cut-enter-to,.cut-leave{
  opacity: 1;
}
.cut-enter-active,.cut-leave-active{
  transition: 0.5s;
}
.iconfont{
  font-family:"iconfont" !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;}
*{
  margin: 0;
  padding: 0;
}
body{
  background:rgba(0,0,0,0.005);
}


</style>
