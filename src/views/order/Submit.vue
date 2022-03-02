<template>
  <div class="pay">
    <div class="cash">实付金额 ¥{{ calculations.price }}</div>
    <div class="submit">提交订单</div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { useCommonCartEffect } from "../../effects/cartEffect";
export default {
  name: "Submit",
  setup() {
    const route = useRoute();
    const shopId = route.params.id;
    const { calculations } = useCommonCartEffect(shopId);
    return {calculations}
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
</style>
