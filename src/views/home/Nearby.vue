<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <div class="nearby__items" v-for="(item,index) in list" :key="index">
      <img
        :src="item.url"
        alt=""
        class="nearby__items__img"
      />
      <div class="nearby__items__content">
        <div class="items__content__title">{{item.title}}</div>
        <div class="items__content__tags">
          <p class="items__content__tag">{{item.tag1}}</p>
          <p class="items__content__tag">{{item.tag2}}</p>
          <p class="items__content__tag">{{item.tag3}}</p>
        </div>
        <div class="items__content__highlight">
          {{item.highlight}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nearby",
  setup() {
      const list = [
          {
              url:'http://www.dell-lee.com/imgs/vue3/near.png',
              title:'沃尔玛',
              tag1:'月售1万+',
              tag2:'起送¥0',
              tag3:'基础运费¥5',
              highlight:'VIP尊享满89元减4元运费券（每月3张）'
          },
          {
              url:'http://www.dell-lee.com/imgs/vue3/水果店.png',
              title:'一品生鲜',
              tag1:'月售2万+',
              tag2:'起送¥0',
              tag3:'基础运费¥12',
              highlight:'新鲜车厘子，满200减20'
          },
          {
              url:'http://www.dell-lee.com/imgs/vue3/蛋糕.png',
              title:'面包坊',
              tag1:'月售5000+',
              tag2:'起送¥0',
              tag3:'基础运费¥3',
              highlight:'新鲜脏脏包、小蛋糕，生日当天有优惠'
          },
      ]
      return {
          list
      }
  }
};
</script>

<style lang="scss" scoped>
@import "../../style/common.scss";
@import "../../style/mixins.scss";
.nearby {
  &__items {
    display: flex;
    margin-top: 0.12rem;
  }
  &__title {
    margin-top: 0.16rem;
  }
  &__items__img {
    display: block;
    width: 0.56rem;
    height: 0.56rem;
  }
  &__items__content {
    flex: 1;
    box-sizing: border-box;
    margin-left: 0.16rem;
    padding-bottom: 0.12rem;
    border-bottom: 1px solid $background-color;
  }
  .items__content__title {
    font-size: 0.16rem;
    line-height: 0.22rem;
    color: $content-fontcolor;
    // padding-top: .12rem;
  }
  .items__content__tags {
    display: flex;
  }
  .items__content__tag {
    box-sizing: border-box;
    padding-right: 0.16rem;
    font-size: 0.13rem;
    line-height: 0.18rem;
    // padding-top: -.08rem;
  }
  .items__content__highlight {
    font-size: 0.13rem;
    color: #e93b3b;
  }
}
</style>
