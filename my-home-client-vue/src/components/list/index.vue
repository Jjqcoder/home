
<template>
  <!-- ======列表内容开始====== -->
  <div class="left">
    <el-button class="leftAdd" @click="AddData" type="primary">新增</el-button>
    <el-button class="leftDel" type="danger" @click="deleteData">删除</el-button>
    <el-button class="export" type="success" @click="exportTableAsImage">导出</el-button>
  </div>
  <el-table :data="dataFromFather" style="width: 100%" @selection-change="handleSelectionChange"
    ref="myTable" id="myTable" @row-dblclick="rowDblclickHandler">

    <!-- 选择框 -->
    <el-table-column type="selection" width="">
    </el-table-column>

    <!-- 下标 -->
    <el-table-column type="index" width="" label="序号">
    </el-table-column>

    <!-- 天气字段 -->
    <el-table-column prop="province" label="省/市" width=""></el-table-column>
    <el-table-column prop="city" label="地区" width=""></el-table-column>
    <el-table-column prop="weather" label="天气" width=""></el-table-column>
    <el-table-column prop="reporttime" label="发布时间" width=""></el-table-column>
    <el-table-column prop="temperature" label="气温(摄氏度)" width=""></el-table-column>

  </el-table>
  <!-- ======列表内容结束====== -->

  <!-- ======弹出框内容开始====== -->
  <!-- 我是待编辑的数据，我不会影响到列表中的数据，只有在点击确认之后我才会覆盖子组件的相应数据，并且影响父组件的数据 {{ dataTobeEdit }} -->
  <div>
    <el-dialog v-model="dialogFormVisible" title="编辑数据" width="500">
      <el-form :model="dataTobeEdit">

        <el-form-item label="省/市" :label-width="formLabelWidth">
          <el-input v-model="dataTobeEdit.province" autocomplete="off" />
        </el-form-item>

        <el-form-item label="地区" :label-width="formLabelWidth">
          <el-input v-model="dataTobeEdit.city" autocomplete="off" />
        </el-form-item>

        <el-form-item label="天气" :label-width="formLabelWidth">
          <el-input v-model="dataTobeEdit.weather" autocomplete="off" />
        </el-form-item>

        <el-form-item label="查询日期" :label-width="formLabelWidth">
          <el-input v-model="dataTobeEdit.reporttime" autocomplete="off" />
        </el-form-item>

        <el-form-item label="气温(摄氏度)" :label-width="formLabelWidth">
          <el-input v-model="dataTobeEdit.temperature" autocomplete="off" />
        </el-form-item>

      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogFormVisible = false">Cancel</el-button>
          <el-button type="primary" @click="submitHandler">
            Confirm
          </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
  <!-- ======弹出框内容结束====== -->

</template>
  <script lang="" setup>
// 引入相关依赖
import { ref, defineProps, watch } from 'vue';
import _ from 'lodash';

// 开始定义props，用于接收父组件传递来的数据、后续需要将器渲染到页面上然后进行响应式的修改。
const myProps = defineProps({
  fatherDataToSon: {
    type: Object,
    required: true,
  },
});

// 定义从父组件传递到子组件的数据（此处使用ref对其进行双向绑定，但是只有点击确认之后数据才会真正影响到父组件的自身数据）
// 为了确保每一条数据的唯一性,为每一个对象都附上一个随机值,并且该随机值不进行渲染,后续只需要使用delete进行删除接即可,后面是具体操作的网址:https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/delete
const dataFromFather = ref(myProps.fatherDataToSon); // 注意，此处不需要点vlaue就可以在页面上使用{{}}渲染出值，但是在script页面，因为数据是被ref包裹的，所以在访问这个变量的时候需要加上.value才能访问到值！！！
// dataFromFather.value是一个数组!!!!
// console.log('dataFromFather.value', dataFromFather.value);

watch(dataFromFather.value, (newVal, oldVal) => {
  // dataFromFather.value = removeDuplicates(dataFromFather.value);
  // dataFromFather.value =
  console.log(newVal, oldVal);
});

// 开始实现新增功能，点击新增之后，dataFromFather会产生一个新对象
const AddData = () => {
  dataFromFather.value.push({
    // name: '默认数据（请修改,若不需要请删除）',
    province: '默认省份',
    city: '默认city',
    weather: '默认weather',
    reporttime: '默认reporttime',
    temperature: '默认temperature',
    age: Math.random(100),
  });
};

// 定义一个用于存储将要被删除的数组
let dataToBeDel = ref([]);

// 选中选框，触发下方函数
const handleSelectionChange = (val) => {
  // console.log('选框发生变化！', val);
  // 覆盖`待删除的数据的数组`的值
  dataToBeDel.value = val;
  // dataToBeDel.value是一个数组
  // console.log("dataToBeDel", dataToBeDel.value[1].name);
};

// 定义一个函数，传入两个对象，判断两个对象是否相等，如果相等，则返回true，否则返回false
const objCompare = (o1, o2) => JSON.stringify(o1) === JSON.stringify(o2);

// 点击删除按钮，触发下方的函数
// 需要进行比对的两个数组分别是：dataToBeDel.value   dataFromFather.value
const deleteData = () => {
  let i = 0; // dataToBeDel.value的下标
  let j = 0; // dataFromFather.value的下标
  // 定义一个数组，用于存放剩余的

  for (i = 0; i < dataToBeDel.value.length; i++) {
    for (j = 0; j < dataFromFather.value.length; j++) {
      if (objCompare(dataToBeDel.value[i], dataFromFather.value[j])) {
        // 如果二者相等，就删除dataFromFather.value中的下标为j的数据
        dataFromFather.value.splice(j, 1);
        dataToBeDel.value.splice(i, 1);
        i = -1;
        j = -1;
        continue;
      }
    }
  }
  // 删除完数据之后，不需要重置dataToBeDel，因为数据已经一个个全部删除完了
};

// 弹出框内容开始===========
const dialogTableVisible = ref(false);
const dialogFormVisible = ref(false);
const formLabelWidth = '140px';

// 创建一个响应式数据，用于进行数据的编辑
// 当双击列表中的一行的时候触发的回调
// 记录当前双击的列表行的数据所在dataFromFather.value中的下标
const dbclickIndex = ref(-1);
// 创建一个对象，用于实现数据的编辑
const dataTobeEdit = ref(null);
const rowDblclickHandler = (val) => {
  // 首先需要获取当前双击选中的数据在dataFromFather中下下标是什么
  for (let i = 0; i < dataFromFather.value.length; i++) {
    if (objCompare(dataFromFather.value[i], val)) {
      // 定义当前双击的数据下标为当前的i
      dbclickIndex.value = i;
      // 给dataTobeEdit赋值,注意，需要深拷贝！
      dataTobeEdit.value = _.cloneDeep(dataFromFather.value[i]);
      // 结束循环
      break;
    }
  }
  dialogFormVisible.value = true;
};
// 弹出框内容结束===========

// 点击提交按钮触发的回调
const submitHandler = () => {
  // 将正在编辑的数据覆盖到子组件本地的数据
  dialogFormVisible.value = false; // 首先将对话框设置为不可见
  // 再将修改后的数据覆盖到子组件本地的数据
  dataFromFather.value[dbclickIndex.value] = dataTobeEdit.value;
};

// 将天气数据导出为图片
// 导出表格为图片
import html2canvas from 'html2canvas';
const exportTableAsImage = () => {
  const tableElement = document.getElementById('myTable'); // 获取表格元素
  html2canvas(tableElement).then((canvas) => {
    const link = document.createElement('a'); // 创建一个 a 标签
    link.href = canvas.toDataURL('image/png'); // 将 canvas 转换为图片的 Base64 数据
    link.download = 'myWeatherData.png'; // 设置下载文件名
    link.click(); // 模拟点击下载
  });
};
</script>

  <style scoped>
/* 新增、删除按钮靠左对齐 */
.left {
  display: flex;
  justify-content: flex-start;
}
</style>