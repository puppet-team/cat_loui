<template>
  <div class>
    <Header title="查询结果"></Header>
    <div class="mItems">
      <div class="mtatus mtatusColorN">开单入库</div>
      <div class="mdetails">
        <div class="mdetailsInfo">
          <div>运单号：172805</div>
          <div style="color:#666">2018.10.01 14:59</div>
        </div>
        <div class="mdetailsAddress">
          <div class="mdetailsAddresslist">
            <div>广州</div>
            <div class="qipei">
              <div>汽配</div>
              <div style="width:60px;height:1px;background:#F74B4B;margin-top:6px"></div>
            </div>
            <div>兰州</div>
          </div>
          <div class="mdetailsAddresslist2">
            <div>张小金</div>
            <div>李白</div>
          </div>
        </div>
        <div class="mdetailsBtns">
          <div>
            <sapn style="font-size:12px;color: #666666;">件数包装：</sapn>
            <span>1纸箱</span>
          </div>
          <div>
            <sapn style="font-size:12px;color: #666666;margin-left:55px">重量:</sapn>
            <span style="margin-left:6px">300kg</span>
          </div>
          <div>
            <sapn style="font-size:12px;color: #666666;margin-left:55px">运费:</sapn>
            <span style="margin-left:6px">¥100</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 运单跟进 -->
    <div class="mOrderGenjin">
      <div class="mdetailsInfo">
        <div style>运单跟踪</div>
        <div style="display:flex">
          <div>车辆位置</div>
          <div>签收图片</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/header";
export default {
  name: "myorderQueryResult",
  props: {},
  components: {
    Header
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
.orderRecordesbox {
  background: #eee;
  min-height: 667px;
}
.mItems {
  margin-bottom: 10px;
}

.mtatus {
  height: 45px;
  line-height: 45px;
  padding-left: 20px;
  box-sizing: border-box;
  color: #999;
  font-size: 16px;
  font-weight: bold;
  background: #ffffff;
  border-bottom: 1px solid #eee;
}

.mdetails {
  height: 160px;
  background: #ffffff;
  padding: 0px 20px;
  box-sizing: border-box;
}
.mtatusColorN {
  background: #feefed;
  color: red;
}
.mdetailsInfo {
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #333;
}
.mdetailsAddress {
  height: 80px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
}
.mdetailsBtns {
  height: 38px;
  display: flex;
  align-items: center;
  font-size: 12px;
}
.van-cell {
  padding: 0px;
}
.mdetailsAddresslist {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 6px;
  font-size: 16px;
  color: #3e3e3e;
}
.qipei {
  margin: 0 38px;
  font-size: 14px;
  font-weight: bold;
  color: #999999;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.mdetailsAddresslist2 {
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 12px;
  color: #666666;
}

/* 运单跟进 */
.mOrderGenjin {
  height: 170px;
  background: #ffffff;
  margin-top: 10px;
  padding: 0px 20px;
  box-sizing: border-box;
}
</style>