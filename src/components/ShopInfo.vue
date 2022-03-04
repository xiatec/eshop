<template>
  <div class="shop" >
    <img :src="item.imgUrl" alt="" class="shop__img" />
    <div :class="{'shop__content': true,'shop__content--bordered':hideBorder ? false : true}">
      <div class="shop__content__title">{{ item.name }}</div>
      <div class="shop__content__tags">
        <p class="shop__content__tag">月售{{ item.sales }}+</p>
        <p class="shop__content__tag">起送¥{{ item.expressLimit }}</p>
        <p class="shop__content__tag">基础运费¥{{ item.expressPrice }}</p>
      </div>
      <div class="shop__content__highlight">
        {{ item.slogan }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ShopInfo',
    // 接收从父组件传递过来的数据
    props:['item','hideBorder']
};
</script>

<style lang="scss" scoped>
@import '../style/common.scss';
.shop {
  display: flex;
  margin-top: 0.12rem;
}
.shop__img {
  display: block;
  width: 0.56rem;
  height: 0.56rem;
}
.shop__content {
  flex: 1;
  box-sizing: border-box;
  margin-left: 0.16rem;
  padding-bottom: 0.12rem;
  &--bordered {
      border-bottom: .01rem solid $background-color;
  }
}
.shop__content__title {
  font-size: 0.16rem;
  line-height: 0.22rem;
  color: $content-fontcolor;
  // padding-top: .12rem;
}
.shop__content__tags {
  display: flex;
}
.shop__content__tag {
  box-sizing: border-box;
  padding-right: 0.16rem;
  font-size: 0.13rem;
  line-height: 0.18rem;
  // padding-top: -.08rem;
}
.shop__content__highlight {
  font-size: 0.13rem;
  color: #e93b3b;
}
</style>
