<template>
    <div class="supervipnumber">
      <div class="restheader">
        <van-icon name="arrow-left" @click="Returnlastpage" class="van_icon"/>
        <span class="supervip">{{name1}}</span>
      </div>
      <div class="supervipnumbe">
       {{name2}}
      </div>
      <div v-if="show">
        <ul>
        <li><img :src="'http://fuss10.elemecdn.com/5/de/5efc9ee81ceba1ae835b0c2298ba9jpeg.jpeg'" alt="">
          ## 1. 清晰 拍照时持稳手机，避免出现大幅度晃动。将焦点对准食物本身，锁焦后、点击快门。<br /><br /><br />
        </li>
        <li><img :src="'http://fuss10.elemecdn.com/8/89/4920bc3a0a34c0d26a4460ce03157jpeg.jpeg'" alt="">## 2. 光线 尽量选择明亮、柔和的光线，避免强光直射；拍摄时避免身体或器物的阴影遮住食物本身，有条件时，可以用小型手电进行补光，以提高食物质感。<br /><br /><br /></li>
      <li><img :src="'http://fuss10.elemecdn.com/4/9b/ca198810b12c8fc57ae562c6fa92cjpeg.jpeg'" alt="">
        ## 3. 构图 构图可以选择通用的三分构图法或中心构图法，如果是拍摄整体食物时，需要考虑食物的完整性；如果拍摄特写时，需要将细节体现清楚。<br /><br /><br />
      </li>
          <li><img :src="'http://fuss10.elemecdn.com/c/3b/958696046787bb467708c8d9a5171jpeg.jpeg'" alt="">
            ## 4.角度 可以选择45度拍摄、90度俯拍或者水平拍摄，一切都看你的心情哦~<br /><br /><br />
          </li>
          <li><img :src="'http://fuss10.elemecdn.com/2/d3/d31b1f81eb853c6042b9c172a514bjpeg.jpeg'" alt="">
            ## 5. 背景 可以选择合适的背景拍摄，例如黑色能体现食物蒸腾的热气，白色让食物更有质感，米色更加温馨等；但背景尽量不要太乱，以免影响整体效果。<br /><br /><br />
          </li>
          <li><img :src="'http://fuss10.elemecdn.com/a/fe/b9716e028917fd81f6c5a99242b6fjpeg.jpeg'" alt="">
            ## 6. 细节 餐具的搭配使用、人物的烘托、道具的陪衬等都能使食物更具诱惑力，照片更有氛围。
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  // import eventVue from "../components/eventVue"
  import Vue from 'vue'
    export default {
      name: "supervipnumber",
      data() {
        return {
         name1:'',
          name2:'',
          name3:'',
          show:true
        }
      },
      methods: {
        Returnlastpage() {
          this.$router.go(-1);
        },
      },
      mounted(){
       this.name1=this.$route.query.name1
        this.name2=this.$route.query.name2
          if(this.$route.query.name3){
            this.name3=this.$route.query.name3;
            this.show=true
          }
          else{
            this.show=false;
          }
          console.log(this.name3)
        console.log(this.name1)
      }
    }
</script>

<style scoped>
  .restheader{
    margin-top: -0.5rem;
    position: fixed;
    width: 100%;
    height:0.5rem;
    background:dodgerblue;
    text-align: center;
  }
  .van_icon{
    display: inline-block;
    font-size: 0.25rem;
    color:#fff;
    margin-top: 0.1rem;
    float:left;
  }
  .supervip{
    width: 50%;
    text-align: center;
    display: inline-block;
    font-size: 0.22rem;
    color:#fff;
    font-family:"微软雅黑";
    /*margin: 0.1rem 1rem 0.12rem 0.6rem;*/
    margin: 0.1rem auto;
  }
.supervipnumbe{
  width: 92%;
  margin:0.5rem auto 0;
  font-size:0.18rem;

}
  .supervipnumber{
    width: 100%;
    height: 300%;
    background: white;
    font-family:"微软雅黑";

  }
  img{
    width: 100%;
    height: 100%;
  }
</style>
