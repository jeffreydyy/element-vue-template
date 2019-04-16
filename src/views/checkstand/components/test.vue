<template>
  <div class="app-container"> 

    <el-form> 
      <el-form-item>  
          <span>Button：</span>
          <el-button>默认按钮</el-button>
          <el-button type="primary">主要按钮</el-button>
          <el-button type="success">成功按钮</el-button>
          <el-button type="info">信息按钮</el-button>
          <el-button type="warning">警告按钮</el-button>
          <el-button type="danger">危险按钮</el-button> 

          <span>　　　ButtonLoading：</span>
          <el-button type="primary" :loading="true">加载中</el-button>

          <span>　　　ButtonSize：</span>
          <el-button type="primary" size="medium">中等size按钮</el-button>
          <el-button type="primary" size="small">小型size按钮</el-button> 
          <el-button type="primary">默认size按钮</el-button>

      </el-form-item>
    </el-form> 

    <br>

    <el-form> 
      <span>Radio：</span>

      <el-radio-group v-model="radio">
        <el-radio :label="3">备选项</el-radio>
        <el-radio :label="6">备选项</el-radio>
        <el-radio :label="9">备选项</el-radio>
      </el-radio-group>

      <span>　　　Radio按钮样式：</span>
      <el-radio-group v-model="radio">
        <el-radio-button label="3">上海</el-radio-button>
        <el-radio-button label="北京"></el-radio-button>
        <el-radio-button label="广州"></el-radio-button>
        <el-radio-button label="深圳"></el-radio-button> 
      </el-radio-group>

      <span>　　　Radio按钮样式2：</span>
      <el-radio-group v-model="radio">    
        <el-radio v-model="radio" label="1" border>备选项1</el-radio>
        <el-radio v-model="radio" label="2" border>备选项2</el-radio>
        <el-radio v-model="radio" label="3" border>备选项2</el-radio> 
      </el-radio-group>
    </el-form> 

    <br><br>

    <el-form> 
      <span>checkbox：</span>  
        <el-checkbox v-model="checked">备选项</el-checkbox> 
        <el-checkbox v-model="checked">备选项</el-checkbox> 
        <el-checkbox v-model="checked2">备选项</el-checkbox> 
        <el-checkbox v-model="checked3">备选项</el-checkbox> 
        <el-checkbox v-model="checked4">备选项</el-checkbox>  
    </el-form> 

    <br><br>

    <el-form :inline="true"> 
      <span>Input：</span>
      <el-form-item label="输入框">
        <el-input v-model="querylist.uniquekey" @keyup.enter.native="handleFilter"/>
      </el-form-item>  

      <el-form-item label="输入框2">
        <el-input v-model="querylist.cell"/>
      </el-form-item>

      <el-form-item label="当有多个字符串的情况下显示示例">
        <el-input v-model="querylist.cell"/>
      </el-form-item>

      <span>　　　Input时间控件：</span> 
      <el-form-item label="时间控件">
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

      <span>　　　Input下拉框：</span>       
      <el-form-item label="下拉框" class="groupInput">
        <el-select v-model="formOptions.value" placeholder="请选择">
          <el-option
            v-for="item in formOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select> 
      </el-form-item>
    </el-form> 
 
 
  </div>
</template>

<script> 
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
      radio: 3,
      checked: true,
    };
  },
  methods: {     
  },
  mounted() {  
  }
};
</script>


<style rel="stylesheet/scss" lang="scss" scoped>
 
</style>

