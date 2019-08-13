import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Chengshi from "../components/LoginRegister/Chengshi"
import Child1 from "../components/Child1"
import One from "../components/shopping/One"
import Child2 from "../components/shopping/Child2";
import Denglu from "../components/LoginRegister/Denglu1";
import home from "../components/home/Home_zwq"
    import  four from "../components/homepage/main_four_zwq"
import post from '../components/center/Past_zwq'
import pay from "../components/LoginRegister/Payment_zwq";
import download from "../components/LoginRegister/Download_zwq";
import balance from "../components/LoginRegister/Balance_zwq"
import explain from "../components/homepage/explain_zwq"
 import info from "../components/homepage/Myinfo_zwq"
import addMap from "../components/center/addMap"
import nav from "../components/LoginRegister/nav"
import sort from "../components/shopping/Sort_zwq"
import classify from "../components/shopping/Classify"
import ranking from "../components/shopping/ranking_zwq"
import addMap1 from "../components/center/addMap1"
import screen from "../components/LoginRegister/Screen_zwq"
import Child3 from "../components/shopping/Child3"
import discounts from "../components/center/discounts_zwq"
import discfoot from "../components/center/discfoot"
import reco from "../components/homepage/Recommend"
import addAddress from "../components/homepage/addAddress";
import selectAddress from "../components/homepage/selectAddress";
import orderRemarks from "../components/shopping/orderRemarks (1)"
import Daojishi from "../components/Daojishi";
import huiyuan from "../components/homepage/huiyuan";
import Guo from "../components/homepage/Guomai"
import divip from '../components/center/dhvip'
import huo from "../components/homepage/Huobao";
import searchFood from "../components/shopping/searchFood";
import dingdan from "../components/center/dingdan"
import serviceCentre from "../components/homepage/serviceCentre"
import supervipnumber1 from "../components/homepage/supervipnumber1";
import confirm from '../components/shopping/confirmOrder';
import Yonghuming from "../components/LoginRegister/Yonghuming";
import jifei from '../components/homepage/jifei'
import select from "../components/searchmapSSS"
import child4 from '../components/shopping/Child4';
import supervipnumber from "../components/shopping/supervipnumber"
import bottom from "../components/shopping/bottom-bar"
import orders from '../components/home/Order_zwq'
import sousuo from "../components/home/sousuoShi ";
import evluate from "../components/LoginRegister/evaluateSSS";
export default new Router({
  routes: [
    {path:"/sort",component:sort,children:[
        {path:'child4',component:child4,name:"child",children:[{path:"screen",component:screen,name:'scr'},{path:"ranking",component:ranking,name:'ran'},{path:"classify",component:classify,name:'class'},
           ]},
      ]},
    {path:'/super',component:supervipnumber,children:[{path:'bottom',component:bottom}]},
    {path:'/dingdan',component:dingdan},
    {path:'/download',component:download},
    {path:'/jifei',component:jifei},
    {path:'/huiyuan',component:huiyuan},
    {path:'/divip',component:divip},
    {path:'/gho',component:Guo},
    {path:'/one',component:One,children: [ {path:"four",component:four}]},
    {path:"/huo",component:huo},
    {path:'/chengshi',component:Chengshi},
    {path:'/child1',component:Child1},
    {path:'/child2',component:Child2},
    {path:'/child3',component:Child3},
    {path:'/suosou',component:sousuo},
    {path:'/pay',component:pay},
    {path:'/orders',component:orders},
  {path:"/home",component:home},
    {path:'/addMap1',component:addMap1},
    {path:"/discounts",component:discounts,children:[{path:"discfoot",component:discfoot}]},
    {path:'/reco',component:reco},
    {path:'/nav',component:nav,children:[{path:'searchFood',component:searchFood}]},
    {path:'/service',component:serviceCentre},
    {path:'/supervipnumber',component:supervipnumber1},
    {path:'/past',component:post},
    {path:'/yonghu',component:Yonghuming},
    {path:"/addAddress",  component:addAddress},
    {path:"/orderRemarks",  component:orderRemarks},
    {path:"/slect",  component:selectAddress},
    {path:'/daojishi',component:Daojishi},
    {path:'/select',component:select},
    {path:'/confirm',component:confirm},
    {path:'/evluate',component:evluate},
    {path:"/balance",component:balance},
    {path:'/explain',component:explain},
    {path:"/info",component:info},
    {path:'/denglu',component:Denglu},
    {path:'/addMap',component:addMap}
    ]
})
