<template>
  <div class="myOrder">
    <Header title="我要下单"></Header>

    <!--地址范围区域 -->
    <div class="mAddressRange">
      <div class="rangeIcon">
        <van-icon name="map-marked" />
      </div>
      <div class="rangeChoose">
<!--        <van-dropdown-menu style="width: 100px;height: 20px">-->
<!--          <van-dropdown-item v-model="arrList.value1" :options="arrList.option1" />-->
<!--          <van-dropdown-item v-model="arrList.value2" :options="arrList.option2" />-->
<!--        </van-dropdown-menu>-->
      </div>
    </div>

    <!-- 发件人人区域  -->
    <div class="mAddresser">
      <div class="mAddresserT">
        <div class="mAddresserTL">
          <van-icon name="map-marked" />
          <div class="mAddresserTLfa">发件人</div>
        </div>

        <div class="mAddresserTR">
          <van-icon name="map-marked" />
          <div class="mAddresserTLsh">地址薄</div>
        </div>
      </div>

      <div>
        <van-cell-group>
          <van-field v-model="name" label="姓名" placeholder="请输入用户名" />
          <van-field v-model="tel" type="tel" label="联系电话" placeholder="请输入联系电话" />
          <van-field v-model="Idcard" label="身份证号" placeholder="请输入身份证号" />
          <van-field v-model="detailAddress" label="详细地址" placeholder="请输入详细地址" />
        </van-cell-group>
      </div>
    </div>
    <!-- 收件人区域  -->
    <div class="mAddressee">
      <div class="mAddresserT">
        <div class="mAddresserTL">
          <van-icon name="map-marked" />
          <div class="mAddresserTLfa">发件人</div>
        </div>

        <div class="mAddresserTR">
          <van-icon name="map-marked" />
          <div class="mAddresserTLsh">地址薄</div>
        </div>
      </div>
      <div>
        <van-cell-group>
          <van-field v-model="name" label="姓名" placeholder="请输入用户名" />
          <van-field v-model="tel" type="tel" label="联系电话" placeholder="请输入联系电话" />
          <van-field v-model="detailAddress" label="详细地址" placeholder="请输入详细地址" />
        </van-cell-group>
      </div>
    </div>

    <!-- 商品详情区域  -->
    <div class="mGoodsDetails">
      <!-- 品名 -->
      <div>
        <van-cell is-link title="品名" @click="show = true" />
        <van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
      </div>
      <!-- <div>
        <van-dropdown-menu>
          <van-dropdown-item v-model="value1" :options="option1" />
        </van-dropdown-menu>
      </div>-->
      <!-- 包装 -->
      <div>
        <van-cell is-link title="包装" @click="show = true" />
        <van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
      </div>

      <!-- 计件 -->
      <div>
        <van-cell is-link title="计件" @click="show = true" />
        <van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
      </div>

      <!-- 声明价值 -->
      <div>
        <van-cell is-link title="声明价值" @click="show = true" />
        <van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
      </div>
      <!-- 交接方式 -->
      <div>
        <van-cell is-link title="交接方式" @click="show = true" />
        <van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
      </div>
      <!-- 运输要求 -->
      <div>
        <van-cell is-link title="运输要求" @click="show = true" />
        <van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
      </div>
      <!-- 付款方式 -->
      <div>
        <van-cell is-link title="付款方式" @click="show = true" />
        <van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
      </div>
      <!-- 回单要求 -->
      <div>
        <van-cell is-link title="回单要求" @click="show = true" />
        <van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
      </div>

      <div>
        <van-field
          v-model="message"
          rows="2"
          autosize
          label="备注信息"
          type="textarea"
          maxlength="50"
          placeholder="请输入备注信息"
          show-word-limit
        />
      </div>
    </div>
    <!-- 按钮区域 -->
    <div class="mBtns">
      <van-button class="mbtn1" @click="orderRecorde()">下单记录</van-button>
      <!-- <van-button color="#7232dd" plain>单色按钮</van-button> -->
      <van-button class="mbtn2" @click="submitOrder()">提交运单</van-button>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import { Dialog } from "vant";
import Header from "../components/header";
export default {
  name: "myOrder",
  props: {},
  components: {
    Header
  },
  data() {
    return {
      name: "",
      tel: "",
      Idcard: "",
      message:"",
      detailAddress: "",
      value1: 0,
      option1: [
        { text: "全部商品", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 }
      ],
      show: false,
      actions: [{ name: "选项一" }, { name: "选项二" }, { name: "选项三" }],
      arrList:{
        value1: 0,
        value2: 'a',
        option1: [
          { text: '全部商品', value: 0 },
          { text: '新款商品', value: 1 },
          { text: '活动商品', value: 2 },
        ],
        option2: [
          { text: '默认排序', value: 'a' },
          { text: '好评排序', value: 'b' },
          { text: '销量排序', value: 'c' },
        ],
      }

    };
  },
  computed: {},
  created() {},

  mounted() {},
  methods: {
    onSelect(item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.show = false;
      Toast(item.name);
    },
    // 提交运单
    submitOrder() {
      //   Dialog({ message: "提示" });
      Dialog.alert({
        title: "提示",
        message: "<div>保存成功</div><div>订单号：1727598</div>"
      }).then(() => {
        // on close
        this.$router.push({
          name: "myOrderAddress"
        });
      });
    },
    // 订单记录
    orderRecorde() {
      this.$router.push({
        name: "orderRecordes"
      });
    }
  }
};
</script>

<style scoped>
.myOrder {
  /* height: 2000px; */
  background: #eee;
}
.rangeIcon{
  width: 20%;
  float:left;
}
.rangeChoose{
  width: 80%;
}
/* 地址范围区域  */
.mAddressRange {
  height: 60px;
  background: #ffffff;
  padding: 0px 20px;
  box-sizing: border-box;
  line-height: 60px;
  margin: 6px 0px;
}
/* 发件人人区域 */
.mAddresser {
  height: 242px;
  background: #ffffff;
}
.mAddresserT {
  width: 216px;
  height: 64px;
  line-height: 64px;
  padding: 0px 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.mAddresserTL {
  display: flex;
  align-items: center;
}
.mAddresserTLfa {
  margin-left: 8px;
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #333333;
}
.mAddresserTR {
  display: flex;
  align-items: center;
  font-size: 12px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #333333;
}
.mAddresserTLsh {
  margin-left: 8px;
}
/* 收件人区域 */
.mAddressee {
  height: 198px;
  background: #ffffff;
  margin-top: 2px;
}

/*  商品详情区域*/
.mGoodsDetails {
  height: 491px;
  background: #ffffff;
  margin-top: 6px;
}
/deep/.van-dropdown-menu__title {
  position: relative;
  box-sizing: border-box;
  max-width: 100%;
  padding: 0 8px;
  color: #323233;
  font-size: 15px;
  line-height: 22px;
  margin-right: 283px;
}
/deep/.van-dropdown-menu__title:after {
  position: absolute;
  top: 50%;
  right: -263px;
  margin-top: -5px;
  border: 3px solid;
  border-color: transparent transparent #dcdee0 #dcdee0;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  opacity: 0.8;
  content: "";
}
/* 按钮区域 */
.mBtns {
  height: 64px;
  background: #ffffff;
  box-shadow: 0px 1px 12px 0px rgba(153, 153, 153, 0.18);
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
}
.mbtn1 {
  width: 125px;
  height: 44px;
  border: 1px solid #f74b4b;
  opacity: 0.6;
  border-radius: 4px;
  background: #f8d4d4;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #e51e04;
}
.mbtn2 {
  width: 200px;
  height: 44px;
  background: #f74b4b;
  border-radius: 4px;
  /* background: linear-gradient(to right, #ff6034, #ee0a24); */
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #fff;
}
</style>
