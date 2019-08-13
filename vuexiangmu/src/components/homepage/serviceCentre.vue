<template>
    <div class="serviceCentre">
      <div class="serviceCentreheader">
        <van-icon name="arrow-left" @click="Returnlastpage" class="van_icon"/>
        <span class="restpass">服务中心</span>
      </div>
      <!--联系客服-->

      <div class="ContactService">
        <img src="../../assets/img/zxkf.png" alt="">
        <p>在线客服</p>
      </div>
      <div class="ContactService">
        <i class="iconfont">&#xe677;</i>
        <p>在线服务</p>
      </div>
    <div class="hotnamber">
      <span>热门问题</span>
    </div>
      <van-cell
        is-link
        :title="array.supervipCaption"
        link-type="navigateTo"
        @click="supervipnumber"
        class="danyuange"
      />
      <van-cell
        is-link
        :title="array.signCaption"
        link-type="navigateTo"
        @click="supervipnumber1"
        class="danyuange"
      />
      <van-cell
        is-link
        :title="array.rankCaption"
        link-type="navigateTo"
        @click="supervipnumber2"
        class="danyuange"
      />
      <van-cell
        is-link
        :title="array.pointtextCaption"
        link-type="navigateTo"
        @click="supervipnumber3"
        class="danyuange"
      />
      <van-cell
        is-link
        :title="array.phototutorialCaption"
        link-type="navigateTo"
        @click="supervipnumber4"
        class="danyuange"
      />
      <van-cell
        is-link
        :title="array.paymentCaption"
        link-type="navigateTo"
        @click="supervipnumber5"
        class="danyuange"
      />
      <van-cell
        is-link
        :title="array.otherCaption"
        link-type="navigateTo"
        @click="supervipnumber6"
        class="danyuange"
      />
      <van-cell
        is-link
        :title="array.ontimeCaption"
        link-type="navigateTo"
        @click="supervipnumber7"
        class="danyuange"
      />
      <van-cell
        is-link
        :title="array.memberTimesCaption"
        link-type="navigateTo"
        @click="supervipnumber8"
        class="danyuange"
      />
      <van-cell
        is-link
        :title="array.memberCaption"
        link-type="navigateTo"
        @click="supervipnumber9"
        class="danyuange"
      />
      <van-cell
        is-link
        :title="array.hongbaoCaption"
        link-type="navigateTo"
        @click="supervipnumber10"
        class="danyuange"
      />
      <van-cell
        is-link
        :title="array.freshmanCaption"
        link-type="navigateTo"
        @click="supervipnumber11"
        class="danyuange"
      />
      <van-cell
        is-link
        :title="array.forgotCaption"
        link-type="navigateTo"
        @click="supervipnumber12"
        class="danyuange"
      />
      <van-cell
        is-link
        :title="array.discountCaption"
        link-type="navigateTo"
        @click="supervipnumber13"
        class="danyuange"
      />
      <van-cell
        is-link
        :title="array.disclaimerCaption"
        link-type="navigateTo"
        @click="supervipnumber14"
        class="danyuange"
      />
      <van-cell
        is-link
        :title="array.couponCaption"
        link-type="navigateTo"
        @click="supervipnumber15"
        class="danyuange"
      />
      <van-cell
        is-link
        :title="array.businessCaption"
        link-type="navigateTo"
        @click="supervipnumber16"
        class="danyuange"
      />
      <van-cell
        is-link
        :title="array.balanceCaption"
        link-type="navigateTo"
        @click="supervipnumber17"
        class="danyuange"
      />
      <van-cell
        is-link
        :title="array.awesomeRestaurantCaption"
        link-type="navigateTo"
        @click="supervipnumber18"
        class="danyuange"
      />
      <van-cell
        is-link
        :title="array.anonymousBuyCaption"
        link-type="navigateTo"
        @click="supervipnumber19"
        class="danyuange"
      />
      <van-cell
        is-link
        :title="array.activityCaption"
        link-type="navigateTo"
        @click="supervipnumber20"
        class="danyuange"
      />
      </div>

</template>

<script>
  import Vue from 'vue'
    export default {
      name: "serviceCentre",
      data() {
        return {
         array:{},
        }
      },
    mounted(){
        let _this=this
      this.$http({
        url:"https://elm.cangdu.org/v3/profile/explain",
        method:'get'
      }).then(function (reslut) {
        // console.log(reslut.data)
      _this.array=reslut.data;
        console.log(_this.array)
      })
    },
      methods: {
        Returnlastpage() {
          this.$router.go(-1);
        },
        supervipnumber() {
          this.$router.push({path:"/supervipnumber",query:{name1:this.array.supervipCaption,name2:this.array.supervipContent}})
        },
        supervipnumber1(){
          this.$router.push({path:"/supervipnumber",query:{name1:this.array.signCaption,name2:this.array.signContent}})
        },
        supervipnumber2(){
          this.$router.push({path:"/supervipnumber",query:{name1:this.array.rankCaption,name2:this.array.rankContent}})
        },
        supervipnumber3(){
          this.$router.push({path:"/supervipnumber",query:{name1:this.array.pointtextCaption,name2:this.array.pointtextContent}})
        },

        supervipnumber4() {
          this.$router.push({path:"/supervipnumber",query:{name1:this.array.phototutorialCaption,name3:this.array.phototutorialContent}})
        },
        supervipnumber5(){
          this.$router.push({path:"/supervipnumber",query:{name1:this.array.paymentCaption,name2:this.array.paymentContent}})
        },
        supervipnumber6(){
          this.$router.push({path:"/supervipnumber",query:{name1:this.array.otherCaption,name2:this.array.otherContent}})
        },
        supervipnumber7(){
          this.$router.push({path:"/supervipnumber",query:{name1:this.array.ontimeCaption,name2:this.array.ontimeContent}})
        },

        supervipnumber8() {
          this.$router.push({path:"/supervipnumber",query:{name1:this.array.memberTimesCaption,name2:this.array.memberTimesContent}})
        },
        supervipnumber9(){
          this.$router.push({path:"/supervipnumber",query:{name1:this.array.memberCaption,name2:this.array.memberContent}})
        },
        supervipnumber10(){
          this.$router.push({path:"/supervipnumber",query:{name1:this.array.hongbaoCaption,name2:this.array.hongbaoContent}})
        },
        supervipnumber11(){
          this.$router.push({path:"/supervipnumber",query:{name1:this.array.freshmanCaption,name2:this.array.freshmanContent}})
        },
        supervipnumber12() {
          this.$router.push({path:"/supervipnumber",query:{name1:this.array.forgotCaption,name2:this.array.forgotContent}})
        },
        supervipnumber13(){
          this.$router.push({path:"/supervipnumber",query:{name1:this.array.discountCaption,name2:this.array.discountContent}})
        },
        supervipnumber14(){
          this.$router.push({path:"/supervipnumber",query:{name1:this.array.disclaimerCaption,name2:this.array.disclaimerCaption}})
        },
        supervipnumber15(){
          this.$router.push({path:"/supervipnumber",query:{name1:this.array.couponCaption,name2:this.array.couponContent}})
        },
        supervipnumber16() {
          this.$router.push({path:"/supervipnumber",query:{name1:this.array.businessCaption,name2:this.array.activityContent
            }})
        },
        supervipnumber17(){
          this.$router.push({path:"/supervipnumber",query:{name1:this.array.balanceCaption,name2:this.array.balanceContent}})
        },
        supervipnumber18(){
          this.$router.push({path:"/supervipnumber",query:{name1:this.array.awesomeRestaurantCaption,name2:this.array.couponContent}})
        },
        supervipnumber19(){
          this.$router.push({path:"/supervipnumber",query:{name1:this.array.anonymousBuyCaption,name2:this.array.businessContent}})
        },
        supervipnumber20() {
          this.$router.push({path:"/supervipnumber",query:{name1:this.array.activityCaption,name2:this.array.balanceContent}})
        },
        }
    }
</script>

<style scoped>
.serviceCentre{
  position: relative;
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
  display: inline-block;
  font-size: 0.22rem;
  color:#fff;
  font-family:"微软雅黑";
  margin: 0.1rem 1rem 0.12rem 1.3rem;
}
.ContactService{
  width: 50%;
  height:1rem;
  text-align: center;
  border:0.00015rem solid #ddd;
  border-left: none;
  border-top:none;
  float:left;
  background: #fff;
}
img{
  margin-top:0.25rem;
  width: 0.4rem;
}
.iconfont{
  display: block;
  margin-top:0.32rem;
  font-size: 0.25rem;
  color:limegreen;

}
  .hotnamber{
    width: 100%;
    border-bottom:0.00015rem solid #ddd;
    background: #fff;
    line-height: 0.6rem;
  }
.hotnamber span{
  font-size:0.18rem;
  display: block;
  margin-left:0.1rem;
}
  .danyuange{
    line-height: 0.3rem;
  }
</style>
