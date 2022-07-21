<template>
  <div>
    <el-button type="primary" @click="getParent"
      >我是renderName组件里的按钮</el-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "jackhuang",
    };
  },
  methods: {
    getParent() {
      // 注意这里通过 this 获取组件的父组件，不是 谁引用这个组件，谁就是它的父组件
      // 这是以前的错误认识，
      // 如果在引用的组件里，这个组件被其他组件嵌套者，那么嵌套者就是这个子组件的父组件实例
      // 而不是引用它的组件
      console.log(this.$parent);
    },
  },
};
</script>
