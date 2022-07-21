<template>
  <div>
    <el-table :data="tableData">
      <el-table-column prop="date" width="300" label="日期"> </el-table-column>
      <el-table-column prop="name" width="300" label="姓名"> </el-table-column>
      <el-table-column prop="address" width="300" label="地址">
      </el-table-column>
      <el-table-column prop="address" width="300" label="地址">
      </el-table-column>
      <el-table-column prop="tag" width="300" label="家"> </el-table-column>
      <el-table-column prop="tag" label="家"> </el-table-column>
      <el-table-column prop="result" fixed="right" label="结论" width="300">
        <template v-slot="{ row, $index }">
          <el-form :id="'result' + $index" :model="row" ref="result">
            <el-form-item
              prop="result"
              :rules="[
                { required: true, message: '请填写结论', trigger: 'change' },
              ]"
            >
              <el-select v-model="row.result">
                <el-option
                  v-for="(item, index) in list"
                  :value="item.value"
                  :label="item.label"
                  :key="index"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>

      <el-table-column fixed="right" prop="comment" label="意见" width="300">
        <template v-slot="{ row, $index }"
          ><el-form :id="'comment' + $index" :model="row" ref="comment">
            <el-form-item
              prop="comment"
              :rules="[{ required: true, message: '请填写意见' }]"
            >
              <el-input v-model="row.comment"></el-input>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
    </el-table>

    <el-button @click="validate" type="primary" style="margin-top: 80px"
      >button</el-button
    >
  </div>
</template>

<script>
export default {
  name: "myTable",
  component: {},
  data() {
    return {
      rules: {
        result: [{ required: true, message: "请填写结论", trigger: "change" }],
        comment: [{ required: true, message: "请填写意见" }],
      },
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
  methods: {
    validate() {
      for (let key in this.$refs) {
        if (this.$refs[key]) {
          this.$refs[key].validate();
        }
      }
      // let promiseList = [];
      // this.tableData.forEach((item, index) => {
      //   if (item.result === "") {
      //     const result = this.$refs["result" + index].validate(function (
      //       valid
      //     ) {
      //       console.log(valid);
      //     });
      //     promiseList.push(result);
      //   }
      // });
      // console.log(promiseList);
    },
  },
};
</script>
