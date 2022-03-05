<template>
  <div class="cartList__top">我的购物车</div>
  <div class="order__items" v-for="(item, index) in list" :key="index">
    <img :src="item.imgUrl" alt="" class="order__items__img" />
    <div class="order__items__detail">
      <div class="order__items__title">{{ item.shopName }}</div>
      <div class="order__items__price">
        <div class="order__items__highlight">
          ¥{{ item.price }} * {{ item.count }}
        </div>
        <div class="order__items__total">¥{{ item.price * item.count }}</div>
      </div>
    </div>
  </div>
  <div class="order__check">
    共计3件/1.4kg
    <span class="iconfont toggle">&#xe62a;</span>
  </div>
  <Docker />
</template>
<script>
import Docker from "../../views/home/Docker.vue";
import {get} from '../../utils/request'
import {ref} from 'vue'
export default {
  components: { Docker },
  setup() {
      const list = ref([]);
      const getCartList = async() => {
          const result = await get('/api/cartList');
          list.value = result.data;
          console.log(list.value);
          return {list}
      }
      getCartList();
      return {getCartList,list}
      
  }
};
</script>
<style lang="scss" scoped>
.order {
 &__items {
    margin-top: 0.16rem;
    display: flex;
    &__img {
      height: 0.46rem;
      width: 0.46rem;
    }
    &__detail {
      margin-left: 0.16rem;
      flex: 1;
    }
    &__title {
      font-size: .14rem;
      color: #333333;
    }
    &__price {
      margin-top: 0.06rem;
      display: flex;
      position: relative;
    }
    &__highlight {
      font-size: .14rem;
      color: #e93b3b;
      line-height: .20rem;
    }
    &__total {
      font-size: .14rem;
      color: #000000;
      text-align: right;
      line-height: .20rem;
      position: absolute;
      right: 0.18rem;
    }
  }
  &__check {
    width: 3.07rem;
    height: 0.28rem;
    line-height: 0.28rem;
    background-color: #f5f5f5;
    font-size: .14rem;
    color: #999999;
    text-align: center;
    margin-top: 0.16rem;
    // position: absolute;
    // bottom: .16rem;
    margin-bottom: 0.18rem;
  }
}
</style>