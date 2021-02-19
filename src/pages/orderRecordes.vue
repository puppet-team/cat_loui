<template>
  <div class="orderRecordesbox">
    <Header title="下单记录"></Header>
    <div class="mItems">
      <div class="mtatus mtatusColorN">未受理</div>
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
          <div style="color:#9D86F3;display:flex;align-items:center;margin-left:60px">
            <van-icon name="qr" />生成二维码
          </div>
          <div style="color:#FF7F4B;display:flex;align-items:center;margin-left:15px">
            <van-icon name="edit" />编辑
          </div>
          <div style="color:#F74B4B;display:flex;align-items:center;margin-left:15px">
            <van-icon name="delete-o" />删除
          </div>
        </div>
      </div>
    </div>
    <div class="mItems">
      <div class="mtatus">已受理</div>
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
            <span style="font-size:12px;color: #666666;">件数包装：</span>
            <span>1纸箱</span>
          </div>

          <div>
            <van-cell
              @click="showTwocode()"
              style="display:flex;align-items:center;font-size:12px;color:#9D86F3;margin-left:45px"
            >
              <van-icon name="qr" />生成二维码
            </van-cell>

            <!-- 生成二维码内容 -->
            <van-popup v-model="show">
              <div style="width: 160px;
height: 160px;
border-radius: 8px;background:#000"></div>
            </van-popup>
          </div>

          <div style="color:#FF7F4B;display:flex;align-items:center;margin-left:34px">
            <van-icon name="edit" />编辑
          </div>
          <div
            @click="delate()"
            style="color:#F74B4B;display:flex;align-items:center;margin-left:15px"
          >
            <van-icon name="delete-o" />删除
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/header";

export default {
  name: "orderRecordes",
  props: {},
  components: {
    Header
  },
  data() {
    return {
      show: false
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    showTwocode() {
      this.show = true;
    }
  }
};
</script>

<style scoped>
.mItems {
  margin-bottom: 10px;
}
.orderRecordesbox {
  background: #eee;
  min-height: 667px;
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
</style>