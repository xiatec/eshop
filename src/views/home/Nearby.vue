<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <!-- 通过:语法将数据暴露给外部，供子组件使用 -->
    <router-link v-for="(item,index) in list" :to='`/shop/${item._id}`'  :key="index" >
      <ShopInfo :item='item' :hideBorder="false"/>
    </router-link>
  </div>
</template>

<script>
import { get } from "../../utils/request";
import { ref } from "vue";
import ShopInfo from "../../components/ShopInfo.vue";
const useGetNearByListEffect = () => {
  const list = ref([]);
  const getList = async () => {
    const result = await get("/api/shop/hot-list");
    if (result?.errno === 0 && result?.data?.length) {
      list.value = result.data;
    }
  };
  return { list, getList };
};
export default {
  name: "Nearby",
  components:{ShopInfo},
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
  &__title {
    margin-top: 0.16rem;
  }
  a {
    text-decoration: none;
    color: #333;
  }
}
</style>
