<template>
    <div class="order">
      <div class="order__shop">{{shopName}}</div>
      <div class="order__items" v-for="(item,index) in productList" :key="index">
        <img
          :src="item.imgUrl"
          alt=""
          class="order__items__img"
        />
        <div class="order__items__detail">
          <div class="order__items__title">{{item.name}}</div>
          <div class="order__items__price">
            <div class="order__items__highlight">¥{{item.price}} * {{item.count}}</div>
            <div class="order__items__total">¥{{item.price * item.count}}</div>
          </div>
        </div>
      </div>
      <div class="order__check">
        共计{{calculations.total}}件/1.4kg
        <span class="iconfont toggle">&#xe62a;</span>
      </div>
    </div>
</template>

<script>
import {useRoute} from "vue-router"
import {useCommonCartEffect} from '../../effects/cartEffect'
export default {
  name: "ProductList",
  setup(){
    const route = useRoute();
    const shopId = route.params.id;
    const {productList,shopName,calculations} = useCommonCartEffect(shopId);
    return {
      productList,
      shopName,
      calculations
    }
  }
};
</script>

<style lang="scss" scoped>
.order {
  overflow-y: scroll;
  margin: 0.16rem 0.18rem 0 0.18rem;
  background-color: #fff;
  border-radius: .04rem;
  box-sizing: border-box;
  padding-left: 0.16rem;
  padding-top: 0.16rem;
  max-height: 3.8rem;
  position: relative;
  &__shop {
    font-size: .16rem;
    color: #333333;
  }
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