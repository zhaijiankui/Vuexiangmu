<template>
    <div class="evaluateSSS">
      <div class="evaluateheader">
        <img :src="'http://elm.cangdu.org/img/'+ imgss" alt="" class="headerimg">
        <div class="imgleft">
          <img :src="'http://elm.cangdu.org/img/'+ imgss" alt="">
        </div>
        <div class="pingjiaright">
          <ul class="pjul">
            <li class="li1">
              <span class="iconfont li1span" @click="fanhui">&#xe64c;</span>
             {{namess}}
            </li>
            <li class="li2">商家配送 /{{namess3}}必达 / 配送费￥{{namess2}} <span class="iconfont li2span">&#xe607;</span></li>
            <li class="li3">公告：欢迎光临,用餐高峰期请提前下单,谢谢!!</li>
          </ul>
        </div>
        <div class="footli">
          <span class="span1">减</span>
          <span class="span2">满30减5，满60减12（app专享）</span>

          <span class="iconfont span4">&#xe607;</span>
          <span class="span3">1个活动</span>
        </div>
      </div>
      <div class="sppj">
        <div class="spp" @click="addDataAttr">商品</div>
        <div class="pjj">评价</div>
      </div>
      <div class="zonghe">
        <div class="zongheleft">
          <p class="p1">4.3</p>
          <p class="p2">综合评价</p>
          <p class="p3">高于与同类商家90%</p>
        </div>
        <div class="zongheright">
          <ul>
            <li>
              <span>服务态度</span>
                <span class="iconfont s1">&#xe601;</span>
                <span class="iconfont s1">&#xe601;</span>
                <span class="iconfont s1">&#xe601;</span>
                <span class="iconfont s1">&#xe601;</span>
                <span class="iconfont s1">&#xe601;</span>
              <span class="s2">4.7</span>
            </li>
            <li>
              <span>服务态度</span>
              <span class="iconfont s1">&#xe601;</span>
              <span class="iconfont s1">&#xe601;</span>
              <span class="iconfont s1">&#xe601;</span>
              <span class="iconfont s1">&#xe601;</span>
              <span class="iconfont s1">&#xe601;</span>
              <span class="s2">4.7</span>
            </li>
            <li>
              <span>送达时间</span>
              <span class="s4">20</span>
              <span class="s3">分钟</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="pj1">
        <ul class="ul">
          <li class="liMenu"
              :class="index==n" @click="son(item,index)" v-for="(item,index) in cities"
              :key="index">{{item}}
          </li>
        </ul>
      </div>
      <div class="kehu">
          <div class="kehuleft">
            <img :src="'http://elm.cangdu.org/img/'+ imgss" alt="">
          </div>
          <div class="kehuright">
            <div class="kehutop">
              <p class="kehup"><span>4***********457</span>
                <span class="kehuspan">2017.18.50</span></p>
              <p>
                <span class="iconfont s1">&#xe601;</span>
                <span class="iconfont s1">&#xe601;</span>
                <span class="iconfont s1">&#xe601;</span>
                <span class="iconfont s1">&#xe601;</span>
                <span class="iconfont s1">&#xe601;</span>
                <span>按时送达</span>
              </p>
            </div>
            <div class="top1">
              <img :src="'http://elm.cangdu.org/img/'+ imgss" alt="">
              <img :src="'http://elm.cangdu.org/img/'+ imgss" alt="">
            </div>
          </div>
        <div class="empty"></div>
      </div>
      <div class="empty"></div>
    </div>
  
</template>

<script>
    export default {
        name: "evaluateSSS",
      data () {
        return {
          cities : ['全部（123）','满意（23）','不满意（22）','有图（11）','味道好（23）','送货快（9）',
            '分量足（123）','包装精美（23）','蔬菜新鲜（22）','干净卫生（11）','服务不错（23）'
          ],
          n :0,
          imgss:'',
          namess:'',
          namess2:'',
          namess3:'',
          namess4:'',
        }
      },
      mounted(){
        this.imgss=this.$route.query.names,              this.namess=this.$route.query.name1,
          this.namess2=this.$route.query.name2,
          this.namess3=this.$route.query.name3,
          this.namess4=this.$route.query.name5
      },
      methods: {
          fanhui(){
            this.$router.go(-1)
          },
        addDataAttr(){
          this.$router.push({path:'/super'})
        },
        son(item,index){
          this.n=index;
        }
      }
    }
</script>

<style scoped>
  .kehup{
    margin-bottom: 0;
  }
  .kehuspan{
    display: inline-block;
    float: right;
  }
  .kehuleft img{
    border-radius: 50%;
  }
  .top1{
    width: 100%;
margin-top: 0.1rem;
  }
  .top1 img{
    width: 1rem;
    height: 1rem;
    display: inline-block;
  }
  .empty{
    clear: both;
  }
  .kehutop{
    width: 100%;
    height: 0.36rem;
  }
  .kehuright{
    width: 2.97rem;
   float: left;
  }
  .kehuleft{
    width: 0.35rem;
    height: 0.35rem;
    float: left;
  }
  .kehuleft img{
    width: 100%;
  }
  .kehu{
    padding: 0.1rem 0.15rem;
    width: 100%;
    background: #fff;
  }
  .liMenu:hover{
    background:dodgerblue;
    color:#fff;
  }
  .liMenu{
    display: inline-block;
    float: left;
    border: 1px solid dodgerblue;
    font-size: 0.13rem;
    font-weight: 400;
    padding: 0.02rem 0.03rem;
    background:#ebf5ff;
    font-family: "微软雅黑";
    margin:0.05rem 0.05rem;
    border-radius: 0.05rem;
    color:rgba(0,0,0,0.6);
  }
  .ul{
    display: inline-block;
    border-bottom: 0.01rem solid rgba(0,0,0,0.2);
    width: 100%;
    height: 1.44rem;
    padding-bottom: 0.1rem;

  }
  .pj1{
    width: 100%;
    height: 1.74rem;
    padding: 0.11rem  0.11rem  0.11rem  0.11rem;
    border-top: 0.15rem solid rgba(0,0,0,0.07);
    background: #fff;

  }
  .s4{
    display: inline-block;
    font-size: 0.14rem;
    color:rgba(0,0,0,0.6);
  }
  .s3{
    font-size: 0.16rem;
    color:rgba(0,0,0,0.4);
  }
  .s2{
    display: inline-block;
    margin-left: 0.08rem;
    color:orange;
  }
.s1{
  font-size: 0.03rem;
  color:orange;
}
 li span:nth-child(1){
   font-size: 0.16rem;
   line-height: 0.18rem;
   display: inline-block;
   margin-top: 0.1rem;
   font-family: "微软雅黑";
   font-weight: bold;
   margin-right: 0.11rem;
 }
  .p3{
    line-height: 0.12rem;
    display: block;
    margin-bottom: 0.1rem;
    font-size: 0.12rem;
    text-align: center;
    color:rgba(0,0,0,0.5);
  }
  .p2{
    line-height: 0.2rem;
    display: block;
    margin-bottom: 0.05rem;
    font-size: 0.14rem;
    text-align: center;
  }
  .p1{
    line-height: 0.25rem;
    font-size: 0.25rem;
    color: orangered;
    text-align: center;
    margin-top: 0.1rem;
  }
  .zongheleft{
    width:1.3rem;
    height: 0.72rem;
    float: left;
  }
  .zongheright{
    width: 2rem;
    height: 0.72rem;
    float: left;
  }
  .zonghe{
    width: 100%;
    height: 1.09rem;
    background: #fff;
    border-top:0.005rem solid rgba(0,0,0,0.5);
    padding: 0.11rem 0.18rem;
  }
  .sppj{
    width: 100%;
    height:0.53rem;
    background: #fff;
  }
  .spp{
    width: 50%;
    height: 100%;
    float: left;
    font-size: 0.2rem;
    text-align: center;
    line-height: 0.53rem;
  }
  .pjj{
    width: 50%;
    height: 100%;
    float: left;
    font-size: 0.2rem;
    text-align: center;
    line-height: 0.53rem;
  }
  .span1{
    display: inline-block;
    background: orangered;
    color:#fff;
    float: left;
    font-size: 0.14rem;
  }
  .span2{
    display: inline-block;
    float: left;
    font-size: 0.14rem;
    color:#fff;
  }
  .span3,.span4{
    display: inline-block;
    float: right;
    font-size: 0.14rem;
    color:#fff;
    margin-right: 0.1rem;
  }
  .footli{
    width: 100%;
    height: 0.2rem;
  }
  .li2span{
    display: inline-block;
    color:#fff;
    position: absolute;
    top:0.5rem;
    right:0.1rem;
  }
  .li2,.li3{
    font-size: 0.10rem;
    color:#fff;

  }
  .li1span{
    position: absolute;
    top: 0.05rem;
    left: 0.05rem;
    font-size: 0.18rem;

  }
  .li1{
    width: 100%;
    height: 0.36rem;
    text-align: left;
    font-size: 0.2rem;
    font-weight: bold;
    font-family: "微软雅黑";
    color:#fff;
  }
  .pjul{
    width: 100%;
    height: 0.71rem;
  }
.evaluateheader{
  width: 100%;
  height: 1.1869rem;
  padding: 0.09rem 0 0.09rem 0.09rem;
}
  .pingjiaright{
    width: 2.9rem;
    height: 0.71rem;
    float: right;
  }
  .imgleft{
    width: 0.67rem;
    height: 0.67rem;
    float: left;
    background: #ccc;
  }
  .imgleft img{
    width: 0.67rem;
    height: 0.67rem;
  }
  .headerimg{
    width: 100%;
    top:0;
    left: 0;
    position: absolute;
    overflow: hidden;
    z-index: -1;
    filter: blur(5px);
  }
</style>
