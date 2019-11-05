<template>
  <main class="task">
    <layout
      @submitForm="onSubmit"
      @resetForm="onReset"
    >
      <template #form>
        <el-form
          ref="form"
          label-width="80px"
          :inline="true"
          :model="searchData"
        >
          <el-form-item label="任务类型">
            <el-select
              v-model="taskType"
              placeholder="请选择"
              value=""
            >
              <el-option
                v-for="item in searchData.type"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="任务状态">
            <el-select
              v-model="taskStatus"
              placeholder="请选择"
              value=""
            >
              <el-option
                v-for="item in searchData.status"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="指派设备">
            <el-input
              v-model="searchData.device"
            />
          </el-form-item>
          <el-form-item label="任务单号">
            <el-input
              v-model="searchData.number"
            />
          </el-form-item>
          <el-form-item label="地图">
            <el-select
              v-model="taskMap"
              placeholder="请选择"
              value=""
            >
              <el-option
                v-for="item in searchData.map"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="创建时间">
            <el-date-picker
              v-model="searchData.time"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            />
          </el-form-item>
        </el-form>
      </template>
      <template #table>
        <el-row
          class="task__btn"
        >
          <el-button size="small">
            导入
          </el-button>
        </el-row>
        <el-table
          :data="tableData"
          border
          style="width: 100%"
        >
          <el-table-column
            prop="taskNumber"
            label="任务单号"
            width="180"
          />
          <el-table-column
            prop="taskName"
            label="任务名称"
            width="180"
          />
          <el-table-column
            prop="taskType"
            label="任务类型"
            width="180"
          />
          <el-table-column
            prop="taskStatus"
            label="任务状态"
            width="180"
          />
          <el-table-column
            prop="taskID"
            label="任务序列ID"
            width="180"
          />
          <el-table-column
            prop="ID"
            label="序列ID"
            width="180"
          />
          <el-table-column
            prop="taskDevice"
            label="指派设备"
            width="180"
          />
          <el-table-column
            prop="taskDeviceNow"
            label="正在处理此任务的设备"
            width="180"
          />
          <el-table-column
            prop="mapNumber"
            label="地图编号"
            width="180"
          />
          <el-table-column
            prop="mapName"
            label="地图名称"
            width="180"
          />
          <el-table-column
            prop="createTime"
            label="创建时间"
            width="180"
          />
          <el-table-column
            prop="createPeople"
            label="创建人"
            width="180"
          />
          <el-table-column
            prop="finishTime"
            label="完成时间"
            width="180"
          />
          <el-table-column
            prop="endTime"
            label="完成期限时间"
            width="180"
          />
          <el-table-column
            prop="reject"
            label="是否拒接"
            width="180"
          />
          <el-table-column
            prop="dispatch"
            label="是否能调度"
            width="180"
          />
          <el-table-column
            prop="doingTaskID"
            label="正在执行任务明细序号"
            width="180"
          />
        </el-table>
      </template>
    </layout>
  </main>
</template>

<script>
  import layout from '@/components/Layout';
  import {searchTask} from '@/api/task'
    export default {
        name: "OrderAdmin",
        components: {
            layout
        },
        data() {
            return {
                searchData: {
                    type: [{value: '1', label: '修改'},{value: '2', label: '别的'}],
                    status: [
                        {value: '1', label: '已创建'},
                        {value: '2', label: '已激活'},
                        {value: '3', label: '可调度'},
                        {value: '4', label: '正在执行'},
                        {value: '5', label: '已撤回'},
                        {value: '6', label: '已完成'},
                        {value: '7', label: '失败'},
                        {value: '8', label: '无法路由'}
                        ],
                    device: '',
                    number: ' ',
                    map: [{value: '1', label: '博智林总部七楼地图'},{value: '2', label: '别的'}],
                    time: [new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 0, 0, 0),new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 23, 59, 59)],
                },
                taskType: '1',
                taskStatus: '1',
                taskMap: '1',
                tableData: [
                    {
                        taskNumber: 1111,
                        taskName: 'something',
                        taskType: '充电',
                        taskStatus: '正在执行',
                        taskID: '1111',
                        ID: 11,
                        taskDevice: '机器人1',
                        taskDeviceNow: '',
                        mapNumber: 222,
                        mapName: '博智林总部七楼',
                        createTime: '2019-11-4 10:00',
                        createPeople: '',
                        finishTime: '',
                        endTime: '',
                        reject: '',
                        dispatch: '',
                        doingTaskID: 111
                    },
                    {
                        taskNumber: 1111,
                        taskName: 'something',
                        taskType: '充电',
                        taskStatus: '正在执行',
                        taskID: '1111',
                        ID: 11,
                        taskDevice: '机器人1',
                        taskDeviceNow: '',
                        mapNumber: 222,
                        mapName: '博智林总部七楼',
                        createTime: '2019-11-4 10:00',
                        createPeople: '',
                        finishTime: '',
                        endTime: '',
                        reject: '',
                        dispatch: '',
                        doingTaskID: 111
                    },
                    {
                        taskNumber: 1111,
                        taskName: 'something',
                        taskType: '充电',
                        taskStatus: '正在执行',
                        taskID: '1111',
                        ID: 11,
                        taskDevice: '机器人1',
                        taskDeviceNow: '',
                        mapNumber: 222,
                        mapName: '博智林总部七楼',
                        createTime: '2019-11-4 10:00',
                        createPeople: '',
                        finishTime: '',
                        endTime: '',
                        reject: '',
                        dispatch: '',
                        doingTaskID: 111
                    },
                    {
                        taskNumber: 1111,
                        taskName: 'something',
                        taskType: '充电',
                        taskStatus: '正在执行',
                        taskID: '1111',
                        ID: 11,
                        taskDevice: '机器人1',
                        taskDeviceNow: '',
                        mapNumber: 222,
                        mapName: '博智林总部七楼',
                        createTime: '2019-11-4 10:00',
                        createPeople: '',
                        finishTime: '',
                        endTime: '',
                        reject: '',
                        dispatch: '',
                        doingTaskID: 111
                    },
                ]
            }
        },
        computed: {
        },
        methods: {
            onSubmit() {
                searchTask(this.searchData).then((res) => {
                    if (res.status === 200) {
                        console.log(res);
                    }
                })
            },
            onReset() {
                this.$refs.form.resetFields();
            }
        }
    }
</script>

<style scoped rel="stylesheet/scss" lang="scss">
@import "index";
</style>
