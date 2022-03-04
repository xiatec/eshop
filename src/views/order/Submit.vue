<template>
  <div class="pay">
    <div class="cash">实付金额 ¥{{ calculations.price }}</div>
    <div class="submit">提交订单</div>
  </div>
  <div class="mask" >
    <div class="mask__content" v-if="data.showPay">
      <h3 class="mask__content__title">确认要离开收银台？</h3>
      <div class="mask__content__desc">请尽快完成支付，否则将被取消</div>
      <div class="mask__content__btns">
        <div class="mask__content__leftbtn" @click="() => handleConfirm(true)">
          取消订单
        </div>
        <div
          class="mask__content__rightbtn"
          @click="() => handleConfirm(false)"
        >
          确认支付
        </div>
      </div>
    </div>
    <Toast :showToast = 'data.showToast'/>
  </div>
</template>

<script>
import { post } from "../../utils/request";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import {reactive} from 'vue';
import { useCommonCartEffect } from "../../effects/cartEffect";
import Toast from "../../views/order/Toast.vue";
export default {
  name: "Submit",
  components: { Toast },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const showToast = true;
    const data = reactive({
      showToast: false,
      showPay: true,
    })
    const shopId = parseInt(route.params.id, 10);
    const { calculations, shopName, productList } = useCommonCartEffect(shopId);
    const handleConfirm = async (isCanceled) => {
      const products = [];
      for (let i in productList.value) {
        const product = productList.value[i];
        products.push({ id: parseInt(product._id), num: product.count });
      }
      try {
        const result = await post("/api/order", {
          addressId: 1,
          shopId,
          shopName: shopName.value,
          isCanceled,
          products,
        });
        if (result.data?.errno === 0) {
         if(isCanceled === true) {
           router.push({name: 'Home'})
         }else {
           data.showToast = true;
          data.showPay = false;
         }
        }
      } catch (error) {
        console.log(error);
        console.log(1);
      }
    };
    return { calculations, shopName, handleConfirm,showToast,data,};
  },
};
</script>

<style lang="scss" scoped>
.pay {
  position: absolute;
  bottom: 0;
  display: flex;
  height: 0.49rem;
  width: 100%;
  .cash {
    width: 2.77rem;
    font-size: 0.16rem;
    color: #333333;
    line-height: 0.49rem;
    box-sizing: border-box;
    padding-left: 0.24rem;
    background: #fff;
  }
  .submit {
    flex: 1;
    line-height: 0.49rem;
    background: #4fb0f9;
    color: #fff;
    text-align: center;
    font-size: 0.14rem;
  }
}
.mask {
  z-index: 1;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  &__content {
    // display:none;
    position: absolute;
    width: 3.01rem;
    height: 1.57rem;
    background-color: #fff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    &__title {
      text-align: center;
      margin-top: 0.24rem;
      margin-bottom: 0.08rem;
      font-size: .18rem;
      color: #333333;
    }
    &__desc {
      text-align: center;
      font-size: .14rem;
      color: #666666;
    }
    &__btns {
      margin-top: 0.24rem;
      display: flex;
      justify-content: space-around;
    }
    &__leftbtn,
    &__rightbtn {
      text-align: center;
      line-height: 0.32rem;
      width: 0.8rem;
      height: 0.32rem;
      border: .01rem solid #4fb0f9;
      border-radius: .16rem;
      font-size: 0.14rem;
    }
    &__leftbtn {
      color: #0091ff;
      margin-left: 0.59rem;
    }
    &__rightbtn {
      background: #4fb0f9;
      color: #fff;
      margin-right: 0.58rem;
    }
  }
}
</style>
