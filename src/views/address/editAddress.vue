<template>
  <div class="address__top">
    <span class="address__top__back iconfont" @click="handleBackClick"
      >&#xe609;</span
    >
    <div class="address__top__title">编辑收货地址</div>
    <div class="address__top__addnew" @click="handleSave">保存</div>
  </div>
  <div class="wrapper">
    <div class="address__new">
      <div class="address__new__items">
        所在城市：<input
          type="text"
          class="address__new__title"
          placeholder="北京市"
        />
      </div>
      <div class="address__new__items">
        小区/大厦/学校：<input
          type="text"
          class="address__new__title"
          placeholder="西北工业大学翱翔小镇"
        />
      </div>
      <div class="address__new__items">
        楼号-门牌号：<input
          type="text"
          class="address__new__title"
          placeholder="海天苑C座"
        />
      </div>
      <div class="address__new__items">
        收货人：<input
          type="text"
          class="address__new__title"
          placeholder="小慕"
        />
      </div>
      <div class="address__new__items">
        联系电话：<input
          type="text"
          class="address__new__title"
          placeholder="18911023277"
        />
      </div>
    </div>
  </div>
  <Toast :showToast="showToast"/>
</template>

<script>
import {useRouter} from 'vue-router'
import {ref} from 'vue'
import Toast from './Toast.vue'
export default {
    name: 'editAddress',
    components:{Toast},
    setup() {
        const showToast = ref(false)
        const router = useRouter();
        const handleBackClick = () => {
            router.back();
        }
        const handleSave = () => {
            showToast.value = true;
        }
        return{handleBackClick,handleSave,showToast}
    }
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
.address__new {
  position: absolute;
  top: 0.76rem;
  left: 0.18rem;
  right: 0.18rem;
  bottom: 0;
  // background: #f8f8f8;
  &__items {
    border-bottom: 1px solid #f1f1f1;
    font-size: 0.14rem;
    background: #fff;
  }
  &__title {
    height: 0.44rem;
    border: none;
    outline: none;
    background-color: rgba(0, 0, 0, 0);
    font-size: 0.14rem;
    color: #333333;
  }
}
</style>
