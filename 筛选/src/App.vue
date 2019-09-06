
<template>
<div>
  <router-view></router-view> 
</div>

</template>

<script>
import  son from './components/shopSon.vue'
import  shop from './components/shop.vue'
export default {
  data(){
    return{

    }
  },
  components:{
    son,
    shop
  }
}
</script>

<style>
*{
  margin:0;
  padding: 0;
}
li{
  list-style: none;
}
a{
  text-decoration: none;
}
  body{
    background-color: #F5F5F6;
  }
</style>

