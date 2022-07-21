<template>
  <div>
    <userContainer>
      <!-- 如果 userContainer 没有设置插槽，或者更加准确的说没有设置默认插槽，
      那么  this.$refs.renderName 就是undefined-->

      <!-- 如果renderName组件被是某个组件的子元素 那么子组件的父组件实际就是 嵌套的组件 -->
      <!-- 具体来说就是renderName组件的父组件是userContainer -->
      <div class="inner">
        <renderName ref="renderName"></renderName>
      </div>
    </userContainer>

    <el-button type="default" @click="handlerClick"> button</el-button>
    <el-button type="default" @click="update"> updateButton</el-button>
  </div>
</template>

<script>
import userContainer from "./container.vue";
import renderName from "./renderName.vue";
export default {
  name: "userInfo",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    userContainer,
    renderName,
  },

  data() {
    return {
      userInfo: {
        name: "huangtao",
      },
    };
  },
  methods: {
    handlerClick() {
      console.log(this.$refs.renderName);
      console.log(this.$refs.renderName.$parent);
    },
    update() {
      Object.assign(this.$route.query, { name: "huangtao" });
      let routePath = this.$router.resolve({
        path: this.$route.path,
        query: this.$route.query,
      });
      console.log(routePath);
      // location.replace(location.origin + routePath.href);
      // location.href = "";
      // window.open(location.origin + routePath.href, "_self");
      // location.href = location.origin + routePath.href;
      // location.reload(location.origin + routePath.href, true);

      // this.$router.push({
      //   path: this.$route.path,
      //   query: this.$route.query,
      // });
      // window.opener = null;
      // window.open("", "_self");
      // window.close("_self");
      // self.close();
      window.open("", "_parent", "");

      window.opener = window;

      window.close();
    },
  },
};
</script>
