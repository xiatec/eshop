<template>
    <div class="wrapper">
        <div class="notice">
            {{message}}
        </div>
    </div>
</template>

<script>
import {reactive} from 'vue'
//将有关toast的代码和逻辑抽离出来，单独封装成useToastEffect函数，暴露出toastData和showToast方法
export const useToastEffect = () => {
    const toastData = reactive({
      showToast: false,
      toastmessage: "",
    })
    // 父子组件传值过程：
    // 1父组件自定义属性名并绑定需要传递的数据
    // 2子组件通过props['属性名']接收父组件,在子组件中通过{{}}对父组
    // 件对应属性绑定的值进行接收，实现双向绑定
    

    const showToast = (message) => {
      toastData.showToast = true;
      toastData.toastmessage = message;
      setTimeout(() => {
        toastData.showToast = !toastData.showToast;
      }, 3000);
    };
    return {toastData,showToast};
  }
export default {
    name: 'Toast',
    // 使用props接收父组件传递过来的值，
    props: {
        message:{
            required: true,
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../style/common.scss';
    .wrapper {
        // margin: 0 auto;
        text-align: center;
        // height: .18rem;
        .notice {
            margin: 0 auto;
            height: .66rem;
            line-height: .66rem;
            width: 1rem;
            background-color: rgba(0,0,0,0.1);
            font-size: .14rem;
            color: $content-fontcolor;
        }
    }
</style>