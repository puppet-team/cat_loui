<template>
  <div>
    <div style="display: flex;justify-content: center;align-items: center">
      <van-image
        width="100%"
        height="100%"
        fit="contain"
        src="http://img.cxnjy.cn/FvHWAQzHysTRziLS49Os6OidCozw"
      />
    </div>
    <div style="padding:10px 15px;box-sizing: border-box">
      <van-search v-model="value" show-action placeholder="请输入搜索关键词" @search="onSearch">
        <template #action>
          <div @click="onSearch">搜索</div>
        </template>
      </van-search>
      <!--      <van-radio-group v-model="radio" direction="horizontal">-->
      <!--        <van-radio name="02">直达</van-radio>-->
      <!--        <van-radio name="01">中转</van-radio>-->
      <!--      </van-radio-group>-->
    </div>

    <div style="padding:6px 30px;box-sizing: border-box">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <div class="van-hairline--bottom" v-for="(item, index) in list" :key="index">
          <van-ßrow style="display: flex;flex-direction: column">
            <van-col style="display: flex">
              <span style="width:100px;display: flex;justify-content: flex-end">公司名称：</span>
              {{ item.company }}
            </van-col>
            <!--            <van-col style="display: flex"><span style="width:100px;display: flex;justify-content: flex-end">网<span-->
            <!--                style="width:30px"></span>点：</span>{{ item.outletsName }}-->
            <!--            </van-col>-->
            <!--            <van-col style="display: flex"><span style="width:100px;display: flex;justify-content: flex-end">网<span-->
            <!--                style="width:30px"></span>点：</span>{{ item.address }}-->
            <!--            </van-col>-->
            <van-col style="display: flex">
              <span style="width:100px!important;display: flex;justify-content: flex-end">
                服
                <span style="width:30px"></span>务：
              </span>
              {{ item.scopeServices }}
            </van-col>
          </van-ßrow>
          <p>
            <van-icon name="phone-o" size="40" @click="phone(item.outletsPhone)" color="#f9f309" />
          </p>
        </div>
      </van-list>
    </div>
    <div>
      <van-action-sheet v-model="show" title="标题">
        <div class="content">
          <div v-for="(item, index) in phoneArr" :key="index">
            {{ item.name }}:
            <a :href="'tel:' + item.phone">{{ item.phone }}</a>
          </div>
        </div>
      </van-action-sheet>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import * as api from "./api/api";
export default {
  name: "MyComponent",
  props: {},
  data() {
    return {
      value: "",
      list: [],
      phoneArr: [],
      loading: false,
      show: false,
      finished: false,
      listQuery: {
        pageNumber: 1,
        pageSize: 100,
        searchCriteria: ""
      }
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    onSearch() {
      this.onLoad();
    },
    onCancel() {
      Toast("搜索");
    },
    onLoad() {
      this.loading = true;
      this.listQuery.searchCriteria = this.value;
      api.getQuery(this.listQuery).then(response => {
        this.list = response.records;
      });
      this.finished = true;
    },
    phone(phone) {
      this.show = true;
      this.phoneArr = [];
      let tpa = this.phoneArr;

      let str = phone.split(",");
      str.forEach(function(element) {
        let phoneNeme = element.split("|");
        let pn = {};
        pn.name = phoneNeme[0];
        pn.phone = phoneNeme[1];
        tpa.push(pn);
      });
    }
  }
};
</script>
<style scoped>
/deep/ .van-radio {
  display: flex;
  padding-left: 8px;
}

/deep/ .van-radio-group--horizontal {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/deep/ .van-col {
  float: left;
  width: 275px;
  min-height: 1px;
  /*height: 30px;*/
  /*line-height: 30px;*/
  padding-bottom: 20px;
  box-sizing: border-box;
}

.van-hairline--bottom {
  padding-bottom: 8px;
  padding-top: 8px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.content {
  padding: 16px 16px 160px;
}
</style>
