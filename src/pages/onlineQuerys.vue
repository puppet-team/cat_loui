<template>
  <div class="‘onlineQuerys">
    <Header title="网点查询"></Header>
    <!-- 搜索区域 -->
    <div class="mSearch">
      <div>
        <van-search v-model="value" placeholder="请输入关键字进行搜索" />
      </div>
    </div>

    <!-- 地址详情区域 -->
    <!-- <div class="mAddress"> -->
    <div class="maddressItems">
      <div class="mAddressT">
        <span class="IConslist"></span>
        广州总部
      </div>
      <div class="mAddresslist">
        <div class="addressDetails">广州市白云区云城东路528号（精艺汽修厂旁边煌石物流）</div>
        <div class="connectPhone">
          <span>020-38086154</span>
          <span>020-38086603</span>
        </div>
      </div>
    </div>

    <div class="maddressItems">
      <div class="mAddressT">
        <span class="IConslist"></span>
        广州总部
      </div>
      <div class="mAddresslist">
        <div class="addressDetails">广州市白云区云城东路528号（精艺汽修厂旁边煌石物流）</div>
        <div class="connectPhone">
          <span>020-38086154</span>
          <span>020-38086603</span>
        </div>
      </div>
    </div>
    <div class="maddressItems">
      <div class="mAddressT">
        <span class="IConslist"></span>
        广州总部
      </div>
      <div class="mAddresslist">
        <div class="addressDetails">广州市白云区云城东路528号（精艺汽修厂旁边煌石物流）</div>
        <div class="connectPhone">
          <span>020-38086154</span>
          <span>020-38086603</span>
        </div>
      </div>
    </div>
    <div class="maddressItems">
      <div class="mAddressT">
        <span class="IConslist"></span>
        广州总部
      </div>
      <div class="mAddresslist">
        <div class="addressDetails">广州市白云区云城东路528号（精艺汽修厂旁边煌石物流）</div>
        <div class="connectPhone">
          <span>020-38086154</span>
          <span>020-38086603</span>
        </div>
      </div>
    </div>
    <div class="maddressItems">
      <div class="mAddressT">
        <span class="IConslist"></span>
        广州总部
      </div>
      <div class="mAddresslist">
        <div class="addressDetails">广州市白云区云城东路528号（精艺汽修厂旁边煌石物流）</div>
        <div class="connectPhone">
          <span>020-38086154</span>
          <span>020-38086603</span>
        </div>
      </div>
    </div>
    <div class="maddressItems">
      <div class="mAddressT">
        <span class="IConslist"></span>
        广州总部
      </div>
      <div class="mAddresslist">
        <div class="addressDetails">广州市白云区云城东路528号（精艺汽修厂旁边煌石物流）</div>
        <div class="connectPhone">
          <span>020-38086154</span>
          <span>020-38086603</span>
        </div>
      </div>
    </div>
    <div class="maddressItems">
      <div class="mAddressT">
        <span class="IConslist"></span>
        广州总部
      </div>
      <div class="mAddresslist">
        <div class="addressDetails">广州市白云区云城东路528号（精艺汽修厂旁边煌石物流）</div>
        <div class="connectPhone">
          <span>020-38086154</span>
          <span>020-38086603</span>
        </div>
      </div>
    </div>
    <div class="maddressItems">
      <div class="mAddressT">
        <span class="IConslist"></span>
        广州总部
      </div>
      <div class="mAddresslist">
        <div class="addressDetails">广州市白云区云城东路528号（精艺汽修厂旁边煌石物流）</div>
        <div class="connectPhone">
          <span>020-38086154</span>
          <span>020-38086603</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/header";
export default {
  name: "onlineQuerys",
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
.onlineQuerys {
  background: #eee;
}
/* 搜索地址详情区域 */
.mSearch {
  padding: 2px 6px;
  box-sizing: border-box;
  margin-top: 2px;
  background: #ffffff;
}

.maddressItems {
  margin-bottom: 2px;
  padding: 15px 20px;
  box-sizing: border-box;
  background: #ffffff;
}
.mAddressT {
  height: 30x;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #333333;
  line-height: 30px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.IConslist {
  width: 14px;
  height: 14px;
  background: #000;
  display: inline-block;
  margin-right: 6px;
}
.mAddresslist {
  background: #ffffff;
  margin-top: 4px;
}
.mAddresslist > .addressDetails {
  width: 320px;
  height: 24px;
  font-size: 12px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #333333;
  line-height: 24px;
}
.connectPhone > span {
  width: 95px;
  height: 18px;
  font-size: 12px;
  font-family: SF UI Display;
  font-weight: 400;
  color: #999999;
  line-height: 18px;
  display: inline-block;
}
.connectPhone > span:nth-child(2) {
  margin-left: 12px;
}
</style>