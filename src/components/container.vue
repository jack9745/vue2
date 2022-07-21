<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "myContainer",
  data() {
    return {
      title: "container",
      appList: [],
    };
  },
};
</script>
