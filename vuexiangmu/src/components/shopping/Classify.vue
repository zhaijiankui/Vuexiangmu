<template>
   <div>
      <div class="classify">
        <div class="leftcontent left">
          <ul>
            <li v-for="(per,index) in classifyarr" :key="index" @click="showAll(per,index)">
              <div class="d1">
                <img :src="getImgPath(per.image_url)" alt="">
                <span>{{per.name}}</span>
              </div>
              <span class="s2 s3">{{per.count}}</span>
              <span class="s4"> >  </span>
            </li>
          </ul>
        </div>
          <div class="rightcontent left" >
            <ul v-for="(per,index) in allcate" class="ul2" @click="address(per)">
              <li class="li2">
               <span>{{per.name}}</span>
                <span class="right">{{per.count}}</span>
              </li>
            </ul>
          </div>
      </div>
   </div>
</template>

<script>
  import Vue from "vue"
  import Ranking_zwq from "./ranking_zwq";
  import Main_four_zwq from "../homepage/main_four_zwq";
  import Vue1 from "../js"
    export default {
        name: "Classify",
      components: {Main_four_zwq, Ranking_zwq},
      data(){
        return{
          classifyarr:[],
          url:"",
          one:[],
          two:{},
          allcate:[],
          dataed:[],
          all:[],
        }
      },
      mounted(){
        Vue1.$on("child1",this.getter)
        Vue.axios.get("https://elm.cangdu.org/shopping/v2/restaurant/category")
          .then((relust)=>{
            console.log(relust.data)
            this.classifyarr=relust.data
            this.url=relust.data.image_url

          }).catch(function (error) {
          console.log(error);
        });

      },
      methods:{
        getImgPath(path){
          //传递过来的图片地址需要处理后才能正常使用
          let suffix;
          if (!path) {
            return 'https://elm.cangdu.org/img/default.jpg'
          }
          if (path.indexOf('jpeg') !== -1) {
            suffix = '.jpeg'
          } else {
            suffix = '.png'
          }
          let url = '/' + path.substr(0, 1) + '/' + path.substr(1, 2) + '/' + path.substr(3) + suffix;
          return 'https://fuss10.elemecdn.com' + url
        },
        getter(v){
          this.dataed=v;
        },
        showAll(v,key){
          this.allcate=v.sub_categories.slice(1,100)
          this.name=v.name;
        },
        address(per){
          this.$router.push({name:'child'})
          console.log(per);
          this.title=per.name;
          console.log(per)
          let _this=this
          Vue.axios.get("https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762",{params:{offset: 0,restaurant_category_ids:[per.id]}}).then(function (reslut) {
            _this.all=reslut.data;
            console.log(reslut.data);
            Vue1.$emit("ch",_this.all);
          })

        },
      }
    }
</script>

<style scoped>
.classify{
  width: 100%;
  background: white;
  height: 3.63rem;
}
  .leftcontent{
    background: #f5f5f5;
    width: 50%;
    height: 100%;
    display: inline-block;

  }
  .li1{
    line-height: 0.42rem;

    padding-left: 3%;
    text-align: right;

  }

  li{
    line-height: 0.38rem;
   /*// background:white;*/

  }

  .s1{
    font-size: 0.1171rem;
  }
  .s2{

    padding-right: 3%;
    font-size: 0.09375rem;
   background: #ccc;
    color: white;
    border-radius: 35%;
    display: inline-block;
    padding: 0 3% 0 3%;
    line-height: 0.153rem;
    margin-right: 6%;

  }
  .d1{
    width: 62%;

    height: 100%;
    display: inline-block;
  }
  .d1 img{

    width: 0.1875rem;
    height: 0.1875rem;
   margin-left: 10px;
  }
  .d1 span{
    font-size:0.1171rem ;
    vertical-align:0.04rem;
    margin-left: 0.1rem;
  }
.s3{
  vertical-align:0.04rem;
  margin: 0;

}
  .s4{
    color: #ccc;
    vertical-align:0.04rem;
    margin-right: 0.05rem;
    float: right;
  }


  .rightcontent{

    width: 50%;
    height: 100%;
  }
.li2{
  border-bottom: 1px solid #e4e4e4;
  margin-left: 5%;

}
.rightcontent{
  /*overflow:scroll;*/
  overflow : auto;
}
  .li2 span{
    font-size: 0.1289rem;
    padding-left: 5%;
    padding-right: 5%;
  }
</style>
