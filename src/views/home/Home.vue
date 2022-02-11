<template>
  <div class="wrapper">
    <!-- 首页静态组件 -->
    <StaticPart />
    <!-- 附近店铺组件 -->
    <Nearby />
  </div>
  <!-- 底部导航条组件 -->
  <Docker />
</template>

<script>
import StaticPart from "./StaticPart.vue";
import Nearby from "./Nearby.vue";
import Docker from "./Docker.vue";
export default {
  name: "Home",
  components: { StaticPart, Nearby, Docker },
};
</script>

<style lang="scss" scoped>
@import "../../style/common.scss";
@import "../../style/mixins.scss";
.wrapper {
  overflow-y: auto;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0.5rem;
  margin: 0 0.18rem;
}
</style>
