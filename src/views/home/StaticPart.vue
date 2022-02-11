<template>
    <!-- 顶部信息区域 -->
    <div class="position">
      <span class="position__icon iconfont">&#xe605;</span>
      西北工业大学长安校区海天苑C座
      <span class="position__notice iconfont">&#xe628;</span>
    </div>

    <!-- 搜索栏 -->
    <div class="search">
      <span class="iconfont">&#xe883;</span>
      <input type="text" placeholder="      山姆会员商店优惠商品" />
    </div>

    <!-- 首页大图片区域 -->
    <div class="banner">
      <img
        src="http://www.dell-lee.com/imgs/vue3/banner.jpg"
        alt=""
        class="banner__img"
      />
    </div>

    <!-- 首页图标区域 -->
    <div class="icons">
      <div class="icons__item" v-for="(item,index) in list" :key="index">
        <img
          :src="item.url"
          alt=""
          class="icons__item__img"
        />
        <p class="icons__item__desc">{{item.desc}}</p>
      </div>
    </div>

    <!-- 首页分隔栏区域 -->
    <div class="gap"></div>
</template>

<script>
export default {
    name: 'StaticPart',
    setup() {
        const list = [
            {url:'http://www.dell-lee.com/imgs/vue3/超市.png',desc:'超市便利'},
            {url:'http://www.dell-lee.com/imgs/vue3/菜市场.png',desc:'菜市场'},
            {url:'http://www.dell-lee.com/imgs/vue3/水果店.png',desc:'水果店'},
            {url:'http://www.dell-lee.com/imgs/vue3/鲜花.png',desc:'鲜花绿植'},
            {url:'http://www.dell-lee.com/imgs/vue3/医药健康.png',desc:'医药健康'},
            {url:'http://www.dell-lee.com/imgs/vue3/家居.png',desc:'家居时尚'},
            {url:'http://www.dell-lee.com/imgs/vue3/蛋糕.png',desc:'烘焙蛋糕'},
            {url:'http://www.dell-lee.com/imgs/vue3/签到.png',desc:'签到'},
            {url:'http://www.dell-lee.com/imgs/vue3/大牌免运.png',desc:'大牌免运'},
            {url:'http://www.dell-lee.com/imgs/vue3/红包.png',desc:'红包套餐'},
        ]
        return {
            list
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../style/common.scss";
@import "../../style/mixins.scss";
.position {
    position: relative;
    padding: 0.16rem 0 0.16rem 0;
    line-height: 0.22rem;
    font-size: 0.16rem;
    color: $content-fontcolor;
    @include ellipsis;
    &__notice {
      position: absolute;
      top: 0.16rem;
      right: -0.02rem;
      top: 0.17rem;
    }
  }
  .search {
    // color: $content-fontcolor;
    // font-size: 0.14rem;
    // position: relative;
    // line-height: 0.32rem;
    // background-color: #f5f5f5;
    // border-radius: 0.16rem;
    // box-sizing: border-box;
    // padding-left: 0.44rem;
    margin-bottom: 0.16rem;
    input {
      width: 100%;
      line-height: 0.32rem;
      border: 0;
      outline: none;
      border-radius: 0.16rem;
      background: #f5f5f5;
      box-sizing: border-box;
      padding-left: 0.4rem;
    }
    .iconfont {
      position: absolute;
      left: 0.2rem;
      top: 0.63rem;
      font-size: 0.2rem;
    }
  }
  .banner {
    margin-bottom: 0.16rem;
    height: 0;
    overflow: hidden;
    padding-bottom: 25.4%;
    &__img {
      width: 100%;
    }
  }
  .icons {
    display: flex;
    flex-wrap: wrap;
    &__item {
      flex: 20%;
      &__img {
        display: block;
        width: .4rem;
        height: .4rem;
        margin: 0 auto;
      }
      &__desc {
        text-align: center;
        margin-bottom: .16rem;
        color: $content-fontcolor;
      }
    }
  }
  .gap {
    height: .1rem;
    background: $background-color;
    padding: 0 -.18rem;
  }
    
</style>