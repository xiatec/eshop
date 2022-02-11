<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <div class="nearby__items" v-for="(item, index) in list" :key="index">
      <img :src="item.imgUrl" alt="" class="nearby__items__img" />
      <div class="nearby__items__content">
        <div class="items__content__title">{{ item.name }}</div>
        <div class="items__content__tags">
          <p class="items__content__tag">月售{{ item.sales }}+</p>
          <p class="items__content__tag">起送¥{{ item.expressLimit }}</p>
          <p class="items__content__tag">基础运费¥{{ item.expressPrice }}</p>
        </div>
        <div class="items__content__highlight">
          {{ item.slogan }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { get } from "../../utils/request";
import { ref } from "vue";
const useGetNearByListEffect = () => {
  const list = ref([]);
  const getList = async () => {
    const result = await get("/api/shop/hot-list");
    if(result?.errno === 0 && result?.data?.length) {
      list.value = result.data;
    }
  };
  return { list, getList };
};
export default {
  name: "Nearby",
  setup() {
    const { list, getList } = useGetNearByListEffect();
    getList();
    return {
      list,
      getList,
    };
  },
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
