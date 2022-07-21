<template>
  <div>
    <el-form :model="formData" ref="table">
      <el-table :data="tableData" class="table-box" row-class-name="table-row">
        <!-- 这样是可以的 -->

        <el-table-column prop="date" width="300" label="日期">
        </el-table-column>
        <el-table-column prop="date" width="300" label="日期">
          <template v-slot="{ row }">
            <el-input v-model="row.date" type="textarea" autosize></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="name" width="300" label="姓名">
          <template>
            <div>sdfsdf</div>
            <div>sdsdd</div>
            <div>sdfsfsf</div>
          </template>
        </el-table-column>
        <el-table-column prop="address" width="300" label="地址">
        </el-table-column>
        <el-table-column prop="address" width="300" label="地址">
        </el-table-column>
        <el-table-column prop="tag" width="300" label="家"> </el-table-column>
        <el-table-column prop="tag" label="家"> </el-table-column>

        <el-table-column prop="result" label="结论" width="300" fixed="right">
          <template v-slot="{ row, $index }">
            <el-form-item
              :prop="'tableData.' + $index + '.result'"
              :rules="resultValidate"
            >
              <el-select v-model="row.result" @change="change($event, $index)">
                <el-option
                  v-for="(item, index) in list"
                  :value="item.value"
                  :label="item.label"
                  :key="index"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </template>
        </el-table-column>

        <el-table-column fixed="right" prop="comment" label="意见" width="300">
          <template v-slot="{ row, $index }">
            <el-form-item
              :prop="'tableData.' + $index + '.comment'"
              :rules="commentValidate"
            >
              <el-input
                v-model="row.comment"
                type="textarea"
                autosize
              ></el-input>
            </el-form-item>
          </template>
        </el-table-column>
      </el-table>
    </el-form>

    <el-button @click="validate" type="primary" style="margin-top: 80px"
      >button</el-button
    >
    <el-button @click="jumpToUser" type="primary">jumpToUser</el-button>
  </div>
</template>

<script>
// import userInfo from "./userInfo.vue";
export default {
  name: "myTable",
  components: {
    // userInfo,
  },
  data() {
    const commentValidator = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请填写意见"));
        return false;
      }
      console.log(rule);
      callback();
    };
    return {
      resultValidate: [
        {
          required: true,
          message: "请填写结论",
          trigger: "change",
        },
      ],
      commentValidate: [
        {
          validator: commentValidator,
          trigger: ["input", "change", "blur"],
        },
      ],
      list: [
        {
          label: "GO",
          value: "GO",
        },
        {
          label: "GR",
          value: "GR",
        },
        {
          label: "NG",
          value: "NG",
        },
      ],
      formData: {
        tableData: [],
      },
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          tag: "家",
          comment: "",
          result: "",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          tag: "家",
          comment: "",
          result: "",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          tag: "家",
          comment: "",
          result: "",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          tag: "家",
          comment: "",
          result: "",
        },

        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          tag: "公司",
          comment: "",
          result: "",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          tag: "公司",
          comment: "",
          result: "",
        },
      ],
    };
  },
  created() {
    this.formData.tableData = this.tableData;
  },
  methods: {
    jumpToUser() {
      // let routerPath = this.$router.resolve({
      //   name: "userInfo",
      //   query: { name: "" },
      // });
      // window.open(routerPath.href, "_blank");
      this.$router.push({
        name: "userInfo",
        query: { name: "" },
      });
    },
    handlerClick() {
      console.log(this.$refs.userInfo);
    },
    change(value, index) {
      if (value == "NG" || value === "GR") {
        const result = this.$refs.table.validateField(
          "tableData." + index + ".comment"
        );
        console.log(result);
      } else {
        this.$refs.table.clearValidate("tableData." + index + ".comment");
      }
    },
    validate() {
      // 校验提示 并且滚动到指定位置
      // this.$refs.table.validate();
      let dom = null;
      let domList = [];
      this.formData.tableData.forEach((item, index) => {
        if (item.result === "") {
          //
          dom = this.$refs.table.$el;
          if (!domList.length) {
            domList.push(dom);
          }
          this.$refs.table.validateField("tableData." + index + ".result");
        }
        if ((item.result === "NG" || item.result === "GR") && !item.comment) {
          dom = this.$refs.table.$el;
          if (!domList.length) {
            domList.push(dom);
          }
          this.$refs.table.validateField("tableData." + index + ".comment");
        } else {
          this.$refs.table.clearValidate("tableData." + index + ".comment");
        }
      });
      // console.log(dom);
      //  这么将dom收集到一块 ？？
      //  声明还有一个数据，在父组件中用ref获取
      console.log(domList);
      dom.scrollIntoView();
      if (domList.length) {
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>

<style></style>
<!-- 表格中单元格的高度 会被单元格的内容的高度撑大， 如果要修改表格的默认高度，
如果设置的高度比默认值高，那么就有效果，如果比默认值小就没有效果-->
<style scoped lang="less">
.table-box {
  ::v-deep th,
  ::v-deep td {
    // padding: 0 !important;
    height: 48px !important;
    line-height: 48px !important;
  }
}
</style>
