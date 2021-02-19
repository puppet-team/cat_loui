<template>
  <div class="myOrderAddressAdd">
    <Headers title="添加新地址"></Headers>
    <!-- 用户的详情信息区域 -->
    <div class="mUserInfo">
      <van-cell-group>
        <van-field v-model="form.userName" label="姓名" placeholder="请输入用户名"/>
        <van-field v-model="form.phone" type="tel" label="联系电话" placeholder="请输入联系电话"/>
        <van-field v-model="form.idCard" label="身份证号" placeholder="请输入身份证号"/>
        <van-field
            readonly
            clickable
            name="area"
            :value="form.province"
            label="地区选择"
            placeholder="点击选择省市区"
            @click="showArea = true"
        />
        <van-popup v-model="showArea" position="bottom">
          <van-area
              :area-list="areaList"
              @confirm="onConfirm"
              @cancel="showArea = false"
          />
        </van-popup>
        <van-field v-model="form.detailedAddress" label="详细地址" placeholder="请输入详细地址"/>
      </van-cell-group>
    </div>

    <!-- 智能解析区域 -->
    <div class="mAnalysis">
      <div>智能解析</div>
      <div class="mAnalysisArea"></div>
    </div>

    <!-- 设为默认地址区域 -->
    <div class="defaultAddress">
      <van-radio-group v-model="form.type">
        <van-radio name="00" checked-color="#ee0a24">设为默认地址</van-radio>
      </van-radio-group>
    </div>

    <!-- 底部按钮区域 -->
    <div class="footerBtn">
      <van-button size="large" class="mbtn" @click="addressAdd">保存</van-button>
    </div>


  </div>
</template>

<script>
import Headers from "../components/header";
import area from "../comfig/area";
import * as api from "../api/api";
import store from '@/store'

export default {
  name: "myOrderAddressAdd",
  props: {},
  components: {
    Headers,

  },
  data() {
    return {
      value: '',
      show: false,
      showArea: false,
      form: {
        userName: "",
        phone: "",
        idCard: "",
        province: "",
        detailedAddress: "",
        userNo: "",
        type:"00"
      },
      areaList: area
    };
  },
  computed: {},
  created() {
  },
  mounted() {
  }, methods: {
    onConfirm(values) {
      this.form.province = values
          .filter((item) => !!item)
          .map((item) => item.name)
          .join('/');
      this.showArea = false;
    }, addressAdd() {
      this.form.userNo =  store.getters.userNo
      api.addressAdd(this.form).then(response => {
        response.data;

      })

    }
  },
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

.content {
  padding: 16px 16px 160px;
}

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
