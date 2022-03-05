<template>
  <div class="address__top">
    <span class="address__top__back iconfont" @click="handleBackClick"
      >&#xe609;</span
    >
    <div class="address__top__title">管理收货地址</div>
    <div class="address__top__addnew" @click="handleAddnew">新建</div>
  </div>
  <div class="address__details">
    <div class="address__details__title">我的收货地址</div>
    <div
      class="address__details__items"
      v-for="(item, index) in list"
      :key="index"
      @click="handleEditAddress"
    >
      <span class="address__details__items__name">{{ item.name }}</span>
      <span class="address__details__items__phone">{{ item.phone }}</span>
      <div class="address__details__items__info">
        {{ item.address }}
      </div>
      <span class="into iconfont">&#xe629;</span>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { get } from "../../utils/request";
import { ref } from "vue";
export default {
  name: "myAddress",
  setup() {
    const list = ref([]);
    const router = useRouter();
    const getUserAddress = async () => {
      const result = await get("/api/address");
      if (result?.errno === 0) {
        list.value = result.data;
      }
      return { list };
    };
    getUserAddress();
    const handleBackClick = () => {
      router.back();
    };
    const handleAddnew = () => {
        router.push({name:'addressNew'})
    }
    const handleEditAddress = () => {
        router.push({name: 'editAddress'})
    }
    return { handleBackClick, getUserAddress, list,handleAddnew,handleEditAddress };
  },
};
</script>

<style lang="scss" scoped>
.address__top {
  display: flex;
  justify-content: space-between;
  margin-top: 0.11rem;
  margin-bottom: 0.11rem;
  &__back {
    font-size: 0.22rem;
    color: #b6b6b6;
    margin-left: 0.184rem;
  }
  &__title {
    font-size: 16px;
    color: #333333;
  }
  &__addnew {
    font-size: 14px;
    color: #333333;
    margin-right: 0.184rem;
    margin-top: 0.02rem;
  }
}
.address__details {
  background: #f8f8f8;
  position: absolute;
  bottom: 0;
  top: 0.44rem;
  &__title {
    margin-left: 0.18rem;
    margin-top: 0.16rem;
    margin-bottom: 0.12rem;
    font-size: 14px;
    color: #333333;
  }
  &__items {
    position: relative;
    margin-left: 0.18rem;
    margin-right: 0.18rem;
    margin-bottom: 0.16rem;
    background: #ffffff;
    border-radius: 4px;
    &__name {
      display: inline-block;
      margin-left: 0.16rem;
      margin-top: 0.18rem;
      font-size: 14px;
      color: #999999;
      box-sizing: border-box;
      padding-right: 0.66rem;
    }
    &__phone {
      font-size: 14px;
      color: #999999;
    }
    &__info {
      margin-top: 0.08rem;
      padding-bottom: 0.18rem;
      margin-left: 0.16rem;
      margin-right: 0.63rem;
      font-size: 14px;
      color: #333333;
    }
    .into {
      position: absolute;
      font-size: 0.16rem;
      right: 0.16rem;
      top: 50%;
      transform: translateY(-50%);
      color: #999;
    }
  }
}
</style>
