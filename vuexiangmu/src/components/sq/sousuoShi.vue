<template>
  <div>
    <nav></nav>
    <div>
      <h2>
        <p>{{value.name}}</p>
      </h2>
    </div>
  </div>

</template>

<script>
    export default {
        name: "sousuoShi",
      data(){
          return{
            value:""
          }
      },
        mounted(){
          if(this.$route.query.name){
            this.value=this.$route.query.name
          }else if(this.$route.query.name1){
            this.value=this.$route.query.name1
          }else {
            this.value=this.$route.query.name2
          }

        }

    }
</script>

<style scoped>

</style>
