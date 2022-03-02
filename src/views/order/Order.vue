<template>
  <div class="wrapper">
    <Toparea />
    <ProductList />
    <Submit />
  </div>
</template>

<script>
import Toparea from '../../views/order/Toparea.vue'
import ProductList from '../../views/order/ProductList.vue'
import Submit from '../../views/order/Submit.vue'
export default {
  name: "Order",
  components: {Toparea,ProductList,Submit},
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #f8f8f8;
}



</style>
