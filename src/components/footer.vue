<template>
  <van-sticky>
    <div class="footerBtn">
      <van-button size="large"  class="mbtn">{{title}}</van-button>
    </div>
  </van-sticky>
</template>

<script>
export default {
  name: "MyComponent",
  props: {
    title: String,
  },
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {}
};
</script>

<style scoped>
.footerBtn {
  position: fixed;
  bottom: 0;
  width: 375px;
  height: 64px;
  background: #ffffff;
  box-shadow: 0px 1px 12px 0px rgba(153, 153, 153, 0.18);
  display: flex;
  justify-content: center;
  align-items: center;
}
.mbtn {
  width: 335px;
  height: 44px;
  background: #f74b4b;
  border-radius: 4px;
  font-size: 14px;
  color: #ffffff;
}
</style>
