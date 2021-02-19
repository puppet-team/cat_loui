<template>
  <div class="myorderQuery">
    <Header title="运单查询"></Header>
    <!-- 运单扫描区域 -->
    <div class="doOrder">
      <div class="doOrderTitle">运单查询</div>
      <div class="doOrderTxt">实时查看运单信息的最新状态</div>
      <div class="doOrderArea">
        <div class="mSearch" @click="Search()">
          <div>
            <van-search v-model="value" placeholder="请输入运单号进行查询" />
          </div>
        </div>

        <div class="saomiao">1</div>
      </div>
    </div>
    <!-- 温馨提醒 -->
    <div class="warmInfo">
      <div class="warmInfoTitle">温馨提示</div>
      <div class="warmInfoTxt">
        输入单号，实时了解货物入库、到库、中转、签收状态，
        以及跟踪服务详情等
      </div>
    </div>
    <!-- 图片展示区域 -->
    <div class="piclist">
      <div class="piclistOne">
        <div class="piclistOneItem1">汽配宝</div>
        <div class="piclistOneItem2">为您推荐最优的商家</div>
      </div>
      <div class="piclistTwo">
        <div class="piclistTwoItem">
          <div>全车件</div>
          <div>平台最优车件</div>
        </div>
        <div class="piclistTwoItem">
          <div>专项件</div>
          <div>专项件专项件配件</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/header";

export default {
  name: "mydoOrders",
  props: {},
  components: {
    Header
  },
  data() {
    return {
      value: ""
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    Search() {
      this.$router.push({
        name: "myorderQueryResult"
      });
    }
  }
};
</script>

<style scoped>
.myorderQuery {
  background: #eee;
}
/* 运单扫描区域 */
.doOrder {
  height: 175px;
  background: #ffffff;
  padding: 20px;
  box-sizing: border-box;
}
.doOrderTitle {
  height: 20px;
  font-size: 20px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: #333333;
  line-height: 10px;
}
.doOrderTxt {
  height: 10px;
  font-size: 10px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #666666;
  line-height: 10px;
  margin-top: 5px;
}
.doOrderArea {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background: url("../../assets/waybillQuery/banner01.png") no-repeat; */
}
/* .msearch {
  width: 280px;
  height: 50px;
  background: #1e2531;
  opacity: 0.04;
  border-radius: 10px;
} */
.mSearch {
  width: 280px;
  padding: 2px 6px;
  box-sizing: border-box;
  margin-top: 2px;
  background: #ffffff;
}

.saomiao {
  width: 50px;
  height: 50px;
  background: #1e2531;
  opacity: 0.04;
  border-radius: 10px;
}
/* 温馨提醒区域 */
.warmInfo {
  height: 82px;
  background: #ffffff;
  margin-top: 2px;
  padding: 15px 20px;
  box-sizing: border-box;
}
.warmInfoTitle {
  height: 12px;
  font-size: 12px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: #f74b4b;
}
.warmInfoTxt {
  width: 323px;
  height: 30px;
  font-size: 12px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #999999;
  line-height: 18px;
  margin-top: 8px;
}

/* piclist */
.piclist {
  margin-top: 10px;
  height: 336px;
  background: #ffffff;
  padding: 15px 20px;
  box-sizing: border-box;
}
.piclistOne {
  width: 335px;
  height: 125px;
  opacity: 0.4;
  border-radius: 11px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.piclistOneItem1 {
  height: 28px;
  font-size: 30px;
  font-family: AliHYAiHei;
  font-weight: 400;
  color: #ffffff;
  line-height: 36px;
  text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.35);
  -webkit-text-stroke: 2px #ff7f4b;
  text-stroke: 2px #ff7f4b;
}
.piclistOneItem2 {
  height: 13px;
  font-size: 13px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #ffffff;
  line-height: 36px;
  text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.98);
  -webkit-text-stroke: 2px #ff7f4b;
  text-stroke: 2px #ff7f4b;
}
.piclistTwo {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}
.piclistTwoItem {
  width: 160px;
  height: 80px;
  background: #feefed;
  border-radius: 8px;
  padding: 10px 15px;
  box-sizing: border-box;
}
.piclistTwoItem > div:nth-child(1) {
  height: 14px;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: #e37769;
  line-height: 24px;
}
.piclistTwoItem > div:nth-child(2) {
  height: 10px;
  font-size: 10px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #f79a8d;
  line-height: 24px;
}
</style>