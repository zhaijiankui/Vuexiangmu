import Vue from "vue";
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
const loading={
   state:{
   },
  getters:{

  },
  action:{
     cutPrice(state){
       Vue.axios.get("https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762",{}).then(function (reslut) {
        console.log(reslut.data);
       }).then(function (error) {
         console.log(error);
       })
     }
  }
}
export default loading
