<template>
  <div class="myOrderAddressAdd">
    <Header title="编辑新地址"></Header>
    <!-- 用户的详情信息区域 -->
    <div class="mUserInfo">
      <van-cell-group>
        <van-field v-model="list.userName" label="姓名" placeholder="张小金"/>
        <van-field v-model="list.tel" type="tel" label="联系电话" placeholder="18322838743"/>
        <van-field v-model="list.idCard" label="身份证号" placeholder="130533193401280932"/>
        <van-field v-model="list.province" label="省 市 区" placeholder="容北京市朝阳区"/>
        <van-field v-model="list.address" label="详细地址" placeholder="酒仙桥街道汉庭酒店大山子店"/>
      </van-cell-group>
    </div>

    <!-- 智能解析区域 -->
    <div class="mAnalysis">
      <div>智能解析</div>
      <div class="mAnalysisArea"></div>
    </div>

    <!-- 设为默认地址区域 -->
    <div class="defaultAddress">
      <van-radio-group v-model="radio">
        <van-radio name="1" checked-color="#ee0a24">设为默认地址</van-radio>
      </van-radio-group>
    </div>

    <!-- 底部按钮区域 -->
    <Footer title="保存"></Footer>
  </div>
</template>

<script>
import Header from "../components/header";
import Footer from "../components/footer";
import * as api from "../api/api";

export default {
  name: "myOrderAddressAdd",
  props: {},
  components: {
    Header,
    Footer
  },
  data() {
    return {
      radio: "1",
      listQuery: {
        id: ""
      },
      list: {
        userName: "",
        tel: "",
        address: "",
        idCard: "",
        province: "",
      }

    };
  },
  computed: {},
  created() {
    this.getData();
  }, mounted() {
  }, methods: {
    getData() {
      var storage = window.sessionStorage
      var addressId = storage.getItem("addressId");
      this.listQuery.id = addressId;
      api.getAddressBy(this.listQuery).then(response => {
        this.list = response;
      })
    }
  }
};
</script>

<style scoped>
.myOrderAddressAdd {
  background: #eee;
  height: 668px;
}

/* 用户的详情信息区域  */
.mUserInfo {
  height: 250px;
  background: #ffffff;
  margin-top: 6px;
}

.van-cell {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding: 10px 16px;
  overflow: hidden;
  color: #323233;
  font-size: 14px;
  line-height: 30px;
  background-color: #fff;
}

/* 智能解析区域  */
.mAnalysis {
  height: 170px;
  background: #ffffff;
  margin-top: 6px;
  padding: 15px 20px;
  box-sizing: border-box;
}

.mAnalysisArea {
  height: 104px;
  background: #1e2531;
  opacity: 0.04;
  border-radius: 4px;
  margin-top: 10px;
}

/*设为默认地址区域  */
.defaultAddress {
  height: 45px;
  background: #ffffff;
  line-height: 45px;
  margin-top: 6px;
  padding: 15px 20px;
  box-sizing: border-box;
}
</style>
