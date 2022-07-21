<template>
  <div>
    <el-button type="default" @click="update">button</el-button>
  </div>
</template>

<script>
export default {
  name: "learnJsx",
  methods: {
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
      window.opener = null;
      window.open("", "_self");
      window.close("_self");
    },
  },
};
</script>
