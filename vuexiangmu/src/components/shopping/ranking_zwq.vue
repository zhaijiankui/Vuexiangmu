<template>
  <div>
    <div v-for="(v,index) in arr">
      <van-cell
        :title="v"
        is-link value=""
        @click="addAttr(v,index)"
        v-if="show1"
      />
    </div>
  </div>
</template>

<script>
  import Vue from "vue"
  import Vue1 from "../js";
    export default {
        name: "ranking_zwq",
        data(){
          return {
            arr:['智能排序','距离最近','销量最高','起送价最低','配送速度最快'],
            array:[],
            show1:true,
          }
        },
      methods:{
        addAttr(v,index){
          console.log(v)
          let _this=this;
          this.show1=!_this.show1
          Vue.axios.get("https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762",{params:{order_by:index}}).then(function (reslut) {
            console.log(reslut.data);
            _this.array=reslut.data;
            Vue1.$emit("checked",_this.array);
          }).catch(function (error) {
            console.log(error);
          })
        }
      },
      created(){
          Vue.axios.get("https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762")
            .then((rel)=>{
              console.log(rel.data)
            })
      }

    }
</script>

<style scoped>

</style>
