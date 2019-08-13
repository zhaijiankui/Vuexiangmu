<template>
  <div>
    <router-view :name="nav"></router-view>
    <h2>这是订单页面</h2>
    <Main_one_zwq></Main_one_zwq>
  </div>

</template>

<script>
    import Main_one_zwq from "../Main_one_zwq";
    export default {
        name: "main_three_zwq",
      components: {Main_one_zwq}
    }
</script>

<style scoped>

</style>
