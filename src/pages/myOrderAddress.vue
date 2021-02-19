<template>
  <div class="myOrderAddress">
    <Header title="地址簿"></Header>
    <!-- 搜索区域 -->
    <div class="mSearch">
      <div>
        <van-search v-model="value" placeholder="请输入关键字进行搜索"/>
      </div>
    </div>

    <!-- 地址列表 -->
    <div>
      <van-address-list
          v-model="chosenAddressId"
          :list="list"
          default-tag-text="默认"
          @add="onAdd"
          @edit="onEdit"
      />
    </div>
  </div>
</template>

<script>
// import { Toast } from "vant";
import Header from "../components/header";
import * as api from "../api/api";
import store from '@/store'

export default {
  name: "myOrderAddress",
  props: {},
  components: {
    Header
  },
  data() {
    return {
      value: "",
      chosenAddressId: "1",
      listQuery: {
        userNo: "",
        pageNumber: "0",
        pageSize: "100"
      },
      list: []
    };
  },
  computed: {},
  created() {
    this.getData();
  },
  mounted() {
  },
  methods: {
    getData() {
      this.listQuery.userNo = store.getters.userNo
      api.getAddress(this.listQuery).then(response => {
        this.list = response.records;
      })
    },
    onAdd() {

      alert(1)
      // Toast("新增地址");
      this.$router.push({
        name: "myOrderAddressAdd"
      });
    },
    onEdit(item, index) {
      console.log(item, index);
      var storage = window.sessionStorage
      storage.setItem("addressId",item.id)
      this.$router.push({
        name: "myOrderAddressEdit"
      });
    }
  }
};
</script>

<style scoped>
.myOrderAddress {
  background: #eee;
}

/* 搜索地址详情区域 */
.mSearch {
  padding: 2px 6px;
  box-sizing: border-box;
  margin-top: 6px;

  background: #ffffff;
}
</style>
