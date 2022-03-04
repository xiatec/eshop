<template>
     <div class="top">
      <div class="top__header">
        <div class="top__header__back iconfont" @click="handleClickBack">&#xe609;</div>
        <div class="top__header__confirm">确认订单</div>
      </div>
      <div class="top__receiver">
        <div class="top__receiver__title">收货地址</div>
        <div class="top__receiver__address">西北工业大学长安校区海天苑C座</div>
        <div class="top__receiver__info">
          <span class="top__receiver__info__name">墨雨萧轩</span>
          <span class="top__receiver__info__name">xxx</span>
        </div>
        <div class="top__receiver__enter iconfont">&#xe629;</div>
      </div>
    </div>
</template>

<script>
import {useRouter} from 'vue-router'
export default {
    name: 'Toparea',
    setup() {
        const router = useRouter();
        const handleClickBack = () => {
            router.back();
        }
        return {handleClickBack}
    }
}
</script>

<style lang="scss" scoped>
.top {
  height: 1.96rem;
  background-image: linear-gradient(0deg, rgba(0, 145, 255, 0) 4%, #0091ff 50%);
  background-repeat: no-repeat;
  background-size: 100% 1.59rem;
  &__header {
    display: flex;
    &__back {
      margin-left: 0.18rem;
      margin-top: 0.28rem;
      color: #fff;
      font-size: 0.21rem;
    }
    &__confirm {
      margin-left: auto;
      margin-right: auto;
      margin-top: 0.3rem;
      transform: translateX(-50%);
      font-size: .16rem;
      color: #ffffff;
    }
  }
  &__receiver {
    background: #fff;
    margin: 0.28rem 0.18rem 0.16rem 0.18rem;
    height: 1.11rem;
    border-radius: .04rem;
    position: relative;
    &__title {
      font-size: .16rem;
      color: #333333;
      line-height: 0.22rem;
      margin-left: 0.16rem;
      margin-bottom: 0.14rem;
      padding-top: 0.16rem;
    }
    &__address {
      font-size: .14rem;
      color: #333333;
      line-height: 0.2rem;
      margin-left: 0.16rem;
    }
    &__info {
      font-size: .12rem;
      color: #666666;
      line-height: 0.17rem;
      margin-left: 0.16rem;
    }
    &__enter {
      position: absolute;
      right: 0.18rem;
      bottom: 0.47rem;
      color: #666666;
      line-height: 0.16rem;
    }
  }
}
</style>