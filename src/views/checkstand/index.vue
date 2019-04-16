<template>
  <div class="app-container"> 
    <el-form :inline="true" class="demo-form-inline"> 
      <el-form-item label="商户编号">
        <el-input v-model="querylist.uniquekey" @keyup.enter.native="handleFilter"/>
      </el-form-item> 

      <el-form-item label="商品名称">
        <el-input v-model="querylist.gender" @keyup.enter.native="handleFilter"/>
      </el-form-item>

      <el-form-item label="商户名称">
        <el-input v-model="querylist.cell"/>
      </el-form-item>

      <el-form-item label="用户设备号">
        <el-input v-model="querylist.cell"/>
      </el-form-item>

      <el-form-item label="订单时间">
        <el-date-picker 
          v-model="querylist.datetime"
          type="daterange"
          align="right"
          unlink-panels
          range-separator="至"
          start-placeholder="起始日期"
          end-placeholder="结束日期"
          value-format="yyyy/MM/dd"
          :picker-options="pickerOptions"
        ></el-date-picker>
      </el-form-item>

      <el-form-item label="精确查询" class="groupInput">
        <el-select v-model="formOptions.value" placeholder="请选择">
          <el-option
            v-for="item in formOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>

        <el-input placeholder="请输入内容" v-model="querylist.preciseText" class="input-with-select"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="handleFilter">查询</el-button>
      </el-form-item>
    </el-form> 
  
  </div>
</template>

<script> 
import axios from "axios"; 
export default {
  data() {
    return {
      formOptions: [
        {
          value: "gender",
          label: "收银台流水号"
        },
        {
          value: "cell",
          label: "商户订单号"
        },
        {
          value: "uniquekey",
          label: "现金订单号"
        }
      ],
      form: {
        allSum: "1453.5", //成交订单总额
        allCount: "145", //成交订单笔数
        orderSum: "145.53", //订单总额
        orderCount: "14" //订单笔数
      },
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      querylist: {
        datetime: [new Date().toLocaleDateString(),new Date().toLocaleDateString()],
        value: "",
        uniquekey: "",
        name: "",
        cell: "",
        gender: "",
        preciseText: "",
        handleFilterOpen: true,
        lists: [],
        currpage: 1
      },
      tabMapOptions: [
        { label: "全部", key: "all" },
        { label: "待付款", key: "wait" },
        { label: "部分支付", key: "part" },
        { label: "成功", key: "suc" },
        { label: "失败", key: "male" },
        { label: "female", key: "female" }
      ],
      activeName: "all",
      dot: " 元",
      tableShow: false
    };
  },
  created() {},
  methods: { 
    tabChangeState(tab) {
      console.log(tab.name);
      this.querylist.gender = tab.name;
      this.handleFilter();
    },
    handleFilter() {
      this.tableShow = true;
      this.querylist.handleFilterOpen = false;
      this.querylist.lists = [];
      this.querylist.currpage = 1;
      this.dataGet();
    },
    dataGet() {
      let params = {
        results: 50,
        cell: this.querylist.cell,
        gender: this.querylist.gender
      };
      params[this.formOptions.value] = this.querylist.preciseText;
      axios
        .get("https://randomuser.me/api", { params })
        .then(data => {
          // console.log(data.data.results);
          this.querylist.lists = data.data.results;
          // console.log(this.querylist.datetime);

          this.querylist.datetime[0] = new Date().toLocaleDateString();
          this.querylist.datetime[1] = new Date().toLocaleDateString();
          // console.log(this.querylist.datetime); 
          // console.log(new Date().toLocaleDateString());
          this.handleFilterOpen = true;
        })
        .catch(function (error) {
          if (error.data) {
            // 发送请求后，服务端返回的响应码不是 2xx   
            console.log(error.data.data);
            console.log(error.data.status);
            console.log(error.data.headers);
            this.$alert("请求超时，刷新重试！");
          } else if (error.request) {
            // 发送请求但是没有响应返回
            console.log(error.request);
          } else {
            // 其他错误
            console.log('Error', error.message);
          }
          console.log(error.config);
        }); 
    },
    itemValue(valie){
      this.querylist.gender = valie
      // console.log(valie)
      console.log(this.querylist.gender)
      dataGet()
    }
  },
  mounted(){

  }
}; 
</script> 
<style rel="stylesheet/scss" lang="scss" scoped>

.groupInput {
  .el-select {
    width: 46%;
  }
  .el-input {
    width: 50%;
  }
}
.tab-container {
  position: relative;
  .downBtn {
    position: absolute;
    top: 6px;
    right: 20px;
    z-index: 10;
  }
}

.panel-group {
  margin-bottom: 20px;
  .card-panel-col {
    margin: 8px 0;
  }
  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
    border-color: rgba(0, 0, 0, 0.05);
    .icon-people {
      color: #40c9c6;
    }
    .icon-message {
      color: #36a3f7;
    }
    .icon-money {
      color: #f4516c;
    }
    .icon-shopping {
      color: #34bfa3;
    }
    .card-panel-icon-wrapper {
      float: left;
      margin: 20px 0 0 14px;
      padding: 8px;
      transition: all 0.38s ease-out;
    }
    .card-panel-icon {
      float: left;
      font-size: 24px;
    }
    .card-panel-description {
      float: left;
      font-weight: bold;
      margin: 26px;
      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 8px;
      }
      .card-panel-num {
        font-size: 20px;
      }
      .card-indent-num {
        font-size: 12px;
        margin-top: 4px;
      }
      .card-panel-num small,
      .card-indent-num small {
        font-size: 12px;
      }
    }
  }
}
</style>

