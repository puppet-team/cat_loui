<template>
  <div class="indexBox">
    <Header title="在线下单"/>

    <div class="mainArea">
      <!-- 轮播区域 -->
      <div class="mSwiper">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item>
            <van-image
                width="100%"
                height="100%"
                src="http://img.cxnjy.cn/Fk62zig3gWEEC860sgCZC3BlNRZL"
            />
          </van-swipe-item>
          <van-swipe-item>
            <van-image
                width="100%"
                height="100%"
                src="http://img.cxnjy.cn/Fk62zig3gWEEC860sgCZC3BlNRZL"
            />
          </van-swipe-item>
          <!--          <van-swipe-item>3</van-swipe-item>-->
          <!--          <van-swipe-item>4</van-swipe-item>-->
        </van-swipe>
      </div>

      <!-- 图片导航区域 -->
      <div class="mNav">
        <div class="mNavitem">
          <div @click="myorderQuery()">
            <span>运单</span>
            <span class="span2">查询</span>
          </div>
        </div>
        <div class="mNavitem">
          <div @click="onlineQuery()">
            <span>网点</span>
            <span class="span2">查询</span>
          </div>
        </div>
        <div class="mNavitem">
          <div @click="mydoOrder()">
            <span>我要</span>
            <span class="span3">下单</span>
          </div>
        </div>
        <div class="mNavitem">
          <div @click="myNavOrder()">
            <span>我的</span>
            <span class="span4">订单</span>
          </div>
        </div>
      </div>

      <!-- 公司简介 -->
      <div class="mCompanydetails">
        <div class="mCompanydetailsTitle">
          <span class="ICons">企</span>
          <!-- <img src="../../assets/icon_gongsijianjie.png" alt /> -->
          公司简介
        </div>
        <div class="mCompanydetailsImg"></div>
        <div class="mCompanydetailsTxt">
          煌石物流有限公司成立于2016年，总部位于广州，在公司发展壮大的4年里，我们始终为客户提供好的产品和技术支持、健全的售后服务，公司业务网络已覆盖国内多个地区，并在多个城市设有分部办事处。
          <br/>煌石物流现已成为一家以汽车配件运输、仓储服务、包装服务、快递服务、国内货运代理的综合性物流供应商。
        </div>
      </div>

      <!-- 网点查询 -->
      <div class="mNetworkQuery">
        <div class="mCompanydetailsTitle">
          <span class="ICons">企</span>
          公司简介
        </div>
      </div>

      <!-- 搜索区域 -->
      <div class="mSearch">
        <div>
          <van-search v-model="value" placeholder="请输入关键字进行搜索"/>
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
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import Header from "../components/header";

export default {
  name: "Index",
  components: {
    Header
  },
  props: {},
  data() {
    return {
      value: ""
    };
  },
  computed: {},
  created() {
    this.getDate();
  },
  mounted() {
  },
  methods: {
    // 运单查询
    myorderQuery() {
      this.$router.push({
        name: "myorderQuery"
      });
    },
    // 网点查询
    onlineQuery() {
      this.$router.push({
        name: "onlineQuerys"
      });
    },
    // 我要下单
    mydoOrder() {
      this.$router.push({
        name: "myOrder"
      });
    },
    // 我的订单
    myNavOrder() {
      this.$router.push({
        name: "myNavOrders"
      });
    }, getDate() {
      var storage = window.sessionStorage
      storage.setItem("userNo", this.getQueryVariable("userNo"))
    }, getQueryVariable(variable) {
      var query = window.location.search.substring(1);
      var vars = query.split("&");
      for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
          return pair[1];
        }
      }
      return (false);
    }
  }
}
;
</script>

<style scoped>
.indexBox {
  /* height: 2000px; */
  background: #eee;
}

/* 轮播图 */
.mSwiper {
  padding: 15px 10px;
  box-sizing: border-box;
  background: #fff;
}

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 15px;
  text-align: center;
  background-color: #ffffff;
}

/* 图片导航区域 */
.mNav {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  box-sizing: border-box;
  height: 240px;
  background: #ffffff;
  border-radius: 4px;
  margin-top: 10px;
}

.mNavitem {
  width: 160px;
  height: 90px;
  background: #eaf0fe;
  border: 1px solid #d0e4fa;
  border-radius: 10px;
  padding: 12px 13px;
  box-sizing: border-box;
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: bold;
  color: #323232;
}

.mNavitem:nth-child(1) {
  background: url('http://img.cxnjy.cn/Fq2ukom2G92gvfM4cnYEJSe4visi');
  background-size: 160px 90px;
}

.mNavitem:nth-child(2) {
  background: url('http://img.cxnjy.cn/Fto32OPn1wE0yd0Xy6v2UwbSvGnB');
  background-size: 160px 90px;
}

.mNavitem:nth-child(3) {
  background: url('http://img.cxnjy.cn/FrZozdvtq6qzADj22KAlXsNxBjw_');
  background-size: 160px 90px;
}

.mNavitem:nth-child(4) {
  background: url('http://img.cxnjy.cn/FsCISz6Hx-fbm0RV7eVQD0CUAW0P');
  background-size: 160px 90px;
}

.span1 {
  color: #4e82ff !important;
}

.span2 {
  color: #ff6411;
}

.span3 {
  color: #ff7b44;
}

.span4 {
  color: #9d86f3;
}

/*公司简介 */
.mCompanydetails {
  height: 370px;
  background: #ffffff;
  margin-top: 10px;
  padding: 15px 20px;
  box-sizing: border-box;
}

.mCompanydetailsTitle {
  width: 100px;
  height: 16px;
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #333333;
  line-height: 16px;
  display: flex;
  align-items: center;
}

.ICons {
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #333;
  color: #fff;
  font-size: 12px;
  text-align: center;
  line-height: 16px;
  margin-right: 6px;
}

.mCompanydetailsImg {
  width: 330px;
  height: 160px;
  border-radius: 8px;
  background: #ffffff;
  margin: 15px 0px;
  background: url('http://img.cxnjy.cn/Fk62zig3gWEEC860sgCZC3BlNRZL');
  background-size: 100% 100%;
}

.mCompanydetailsTxt {
  width: 335px;
  height: 132px;
  font-size: 12px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #666666;
  line-height: 24px;
}

/*网点查询区域 */
.mNetworkQuery {
  height: 46px;
  background: #ffffff;
  margin-top: 10px;
  display: flex;
  align-items: center;
  padding: 15px 20px;
  box-sizing: border-box;
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
