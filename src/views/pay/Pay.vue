<template>
  <div class="wrapper">
    <Docker :currentIndex="2" />
    <div class="order">
      <div class="order__title">我的订单</div>
      <div class="order__items">
        <div class="order__items__top">
          <div class="order__items__shop">沃尔玛</div>
          <div class="order__items__status">已取消</div>
        </div>
        <div class="order__items__details">
          <div class="order__items__imgs">
            <img
              src="http://www.dell-lee.com/imgs/vue3/cherry.png"
              alt=""
              class="order__items__img"
            />
            <img
              src="http://www.dell-lee.com/imgs/vue3/cherry.png"
              alt=""
              class="order__items__img"
            />
            <img
              src="http://www.dell-lee.com/imgs/vue3/orange.png"
              alt=""
              class="order__items__img"
            />
            <img
              src="http://www.dell-lee.com/imgs/vue3/orange.png"
              alt=""
              class="order__items__img"
            />
          </div>
          <div class="order__items__info">
            <div class="order__items__highlight">¥66.69</div>
            <div class="order__items__total">共6件</div>
          </div>
        </div>
      </div>
      <div class="order__items">
        <div class="order__items__top">
          <div class="order__items__shop">沃尔玛</div>
          <div class="order__items__status">已取消</div>
        </div>
        <div class="order__items__details">
          <div class="order__items__imgs">
            <img
              src="http://www.dell-lee.com/imgs/vue3/cherry.png"
              alt=""
              class="order__items__img"
            />
            <img
              src="http://www.dell-lee.com/imgs/vue3/cherry.png"
              alt=""
              class="order__items__img"
            />
            <img
              src="http://www.dell-lee.com/imgs/vue3/orange.png"
              alt=""
              class="order__items__img"
            />
            <img
              src="http://www.dell-lee.com/imgs/vue3/orange.png"
              alt=""
              class="order__items__img"
            />
          </div>
          <div class="order__items__info">
            <div class="order__items__highlight">¥66.69</div>
            <div class="order__items__total">共6件</div>
          </div>
        </div>
      </div>
      <div class="order__items">
        <div class="order__items__top">
          <div class="order__items__shop">沃尔玛</div>
          <div class="order__items__status">已取消</div>
        </div>
        <div class="order__items__details">
          <div class="order__items__imgs">
            <img
              src="http://www.dell-lee.com/imgs/vue3/cherry.png"
              alt=""
              class="order__items__img"
            />
            <img
              src="http://www.dell-lee.com/imgs/vue3/cherry.png"
              alt=""
              class="order__items__img"
            />
            <img
              src="http://www.dell-lee.com/imgs/vue3/orange.png"
              alt=""
              class="order__items__img"
            />
            <img
              src="http://www.dell-lee.com/imgs/vue3/orange.png"
              alt=""
              class="order__items__img"
            />
          </div>
          <div class="order__items__info">
            <div class="order__items__highlight">¥66.69</div>
            <div class="order__items__total">共6件</div>
          </div>
        </div>
      </div>
      <div class="order__items">
        <div class="order__items__top">
          <div class="order__items__shop">沃尔玛</div>
          <div class="order__items__status">已取消</div>
        </div>
        <div class="order__items__details">
          <div class="order__items__imgs">
            <img
              src="http://www.dell-lee.com/imgs/vue3/cherry.png"
              alt=""
              class="order__items__img"
            />
            <img
              src="http://www.dell-lee.com/imgs/vue3/cherry.png"
              alt=""
              class="order__items__img"
            />
            <img
              src="http://www.dell-lee.com/imgs/vue3/orange.png"
              alt=""
              class="order__items__img"
            />
            <img
              src="http://www.dell-lee.com/imgs/vue3/orange.png"
              alt=""
              class="order__items__img"
            />
          </div>
          <div class="order__items__info">
            <div class="order__items__highlight">¥66.69</div>
            <div class="order__items__total">共6件</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {reactive,toRefs} from 'vue';
import{get} from '../../utils/request' 
import Docker from "../../views/home/Docker.vue";
const useOrderListEffect = () => {
      const data = reactive({list: []})
      const getOrderList = async() => {
          const result = await get('/api/order')
          if(result?.errno === 0 && result?.data?.length) {
              data.list = result.value;
          }
      }
      getOrderList();
      const {list} = toRefs(data);
      return{list} 
  }
export default {
  name: "Pay",
  components: { Docker },
  setup() {

  }
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
    margin-bottom: .16rem;
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
