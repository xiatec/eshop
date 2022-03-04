<template>
  <div class="wrapper">
    <Docker :currentIndex="2" />
    <div class="order">
      <div class="order__title">我的订单</div>
      <div class="order__items" v-for="(item, index) in list" :key="index">
        <div class="order__items__top">
          <div class="order__items__shop">{{ item.shopName }}</div>
          <div class="order__items__status">
            {{ item.isCanceled ? "已取消" : "已下单" }}
          </div>
        </div>
        <div class="order__items__details">
          <div
            class="order__items__imgs"
            v-for="(innerItem, innerIndex) in item.products"
            :key="innerIndex"
          >
            <img :src="innerItem.product.img" alt="" class="order__items__img" />
          </div>
          <div class="order__items__info">
            <div class="order__items__highlight">¥{{item.total}}</div>
            <div class="order__items__total">共{{item.sales}}件</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { get } from "../../utils/request";
import Docker from "../../views/home/Docker.vue";
const useOrderListEffect = () => {
  const data = reactive({ list: [] });
  const getOrderList = async () => {
    const result = await get("/api/order");
    if (result?.errno === 0 && result?.data?.length) {
      const orderList = result.data;
      orderList.forEach((order) => {
        const products = order.products;
        let total = 0;
        let sales = 0;
        products.forEach((productItem) => {
          total += productItem.product.price * productItem.orderSales
          sales += productItem.orderSales;
        })
        order.total = total;
        order.sales = sales;
      })
      console.log(orderList);
      data.list = result.data;
    }
  };
  getOrderList();
  const { list } = toRefs(data);
  return { list };
};
export default {
  name: "Pay",
  components: { Docker },
  setup() {
    const { list } = useOrderListEffect();
    return { list };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  background-color: #f8f8f8;
  z-index: 1;
  overflow-y: auto;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0rem;
  margin: 0 0.18rem;
}
.order {
  &__title {
    text-align: center;
    font-size: 16px;
    color: #333333;
    margin-top: 0.12rem;
  }
  &__items {
    background: #fff;
    position: relative;
    margin-bottom: 0.16rem;
    &__top {
      position: relative;
      display: flex;
    }
    &__status {
      position: absolute;
      right: 0.16rem;
      bottom: 0;
      font-size: 14px;
      color: #999999;
    }
    &__shop {
      font-size: 16px;
      color: #333333;
      margin: 0.16rem 0 0 0.16rem;
    }
    &__details {
      display: flex;
    }
    &__img {
      width: 0.4rem;
      height: 0.4rem;
      margin-left: 0.16rem;
      margin-top: 0.16rem;
      margin-bottom: 0.16rem;
    }
    &__info {
      position: absolute;
      right: 0.16rem;
      text-align: center;
      margin-top: 0.24rem;
    }
    &__highlight {
      font-size: 14px;
      color: #e93b3b;
      margin-bottom: 0.06rem;
    }
    &__total {
      font-size: 12px;
      color: #333333;
      text-align: right;
    }
  }
}
</style>
