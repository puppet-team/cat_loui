<template>
  <van-sticky>
    <div class="mheader">
      <div class="arrow">
        <van-icon name="arrow-left" @click="getBack()" />
      </div>
      <div class="headrTitle">{{title}}</div>
      <div class="arrow">
        <van-icon name="wap-home-o" @click="getIndex()" />
      </div>
    </div>
  </van-sticky>
</template>

<script>
export default {
  name: "headers",
  props: {
    title: String
  },
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    // 返回上一页
    getBack() {
      this.$router.back(-1);
    }

    // getHome() {
    //   this.$router.push({
    //     name: ""
    //   });
    // }
  }
};
</script>

<style scoped>
.mheader {
  /* width: 750px; */
  width: 100%;
  height: 56px;
  background: #f75b5b;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.arrow {
  width: 61px;
  height: 43px;
  line-height: 43px;
  font-size: 22px;
  color: #ffffff;
  text-align: center;
}
.headrTitle {
  width: 144px;
  height: 36px;
  font-size: 22px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: #ffffff;
  line-height: 36px;
  text-align: center;
}
</style>
