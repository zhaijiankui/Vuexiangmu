<template>
  <div class="big">
    <nav></nav>
    <div class="main_foot">
      <van-row>
        <van-tabbar v-model="active">
          <van-col span="6">
            <router-link :to="{path:'/child2'}">
              <van-tabbar-item icon="home-o">外卖</van-tabbar-item>
            </router-link>
          </van-col>
          <van-col span="6">
            <router-link :to="{path:'/suosou'}">
              <van-tabbar-item icon="search">搜索</van-tabbar-item>
            </router-link>
          </van-col>
          <van-col span="6">
            <router-link :to="{path:'/three_zwq'}">
              <van-tabbar-item icon="friends-o">订单</van-tabbar-item>
            </router-link>
          </van-col>
          <van-col span="6">
            <router-link :to="{path:'/one/four'}">
              <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
            </router-link>
          </van-col>
        </van-tabbar>
      </van-row>
    </div>

    <van-tabbar v-model="active">

      <van-tabbar-item icon="home-o">外卖</van-tabbar-item>
      <van-tabbar-item icon="search">搜索</van-tabbar-item>
      <van-tabbar-item icon="friends-o">订单</van-tabbar-item>
      <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
    <router-view></router-view>
  </div>

</template>

<script>
  export default {
    name: "Main_one_zwq",
    data(){
      return{
        active:0
      }
    }
  }
</script>

<style scoped>
  .main_foot{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    line-height: 0.6rem;
    background: white;
    position: fixed;
  }


</style>
