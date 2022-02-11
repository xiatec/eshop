<template>
    <div class="wrapper">
        <div class="notice">
            {{message}}
        </div>
    </div>
</template>

<script>
export default {
    name: 'Toast',
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