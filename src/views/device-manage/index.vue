<template>
  <main class="manage">
    <layout
      @submitForm="onSubmit"
      @resetForm="onReset"
    >
      <template #form>
        <el-form
          ref="form"
          :inline="true"
          :model="searchData"
          class="demo-form-inline"
        >
          <el-form-item
            label="设备名称"
            prop="deviceName"
          >
            <el-autocomplete
              v-model="searchData.deviceName"
              :fetch-suggestions="querySearch"
              placeholder="设备名称"
            />
          </el-form-item>
          <el-form-item
            label="地图"
            prop="mapId"
          >
            <el-select
              v-model="searchData.mapId"
              placeholder="地图"
            >
              <el-option
                label="区域一"
                value="shanghai"
              />
              <el-option
                label="区域二"
                value="beijing"
              />
            </el-select>
          </el-form-item>
          <el-form-item
            label="设备类型"
            prop="deviceId"
          >
            <el-select
              v-model="searchData.deviceId"
              placeholder="设备类型"
            >
              <el-option
                label="区域一"
                value="shanghai"
              />
              <el-option
                label="区域二"
                value="beijing"
              />
            </el-select>
          </el-form-item>
          <el-form-item
            label="集成等级"
            prop="deviceLevel"
          >
            <el-select
              v-model="searchData.deviceLevel"
              placeholder="集成等级"
            >
              <el-option
                label="区域一"
                value="shanghai"
              />
              <el-option
                label="区域二"
                value="beijing"
              />
            </el-select>
          </el-form-item>
        </el-form>
      </template>
      <template #table="table">
        <el-row class="manage__btn">
          <el-button
            size="small"
            @click="addDeviceDialog = true"
          >
            <svg-icon icon-class="add"></svg-icon>
            添加
          </el-button>
          <el-button size="small">
            <svg-icon icon-class="import"></svg-icon>
            导入
          </el-button>
        </el-row>
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          height="300"
          @selection-change="handleSelectionChange"
        >
          <el-table-column
            fixed
            prop="id"
            label="设备编号"
            width="120"
          />
          <el-table-column
            fixed
            prop="name"
            label="设备名称"
            width="160"
          />
          <el-table-column
            prop="integrationLevel"
            label="集成等级"
            width="160"
          />
          <el-table-column
            prop="length"
            label="长度（mm）"
            width="120"
          />
          <el-table-column
            prop="energyLevelCritical"
            label="低电量阈值（%）"
            width="120"
          />
          <el-table-column
            prop="energyLevelGood"
            label="良好电量阈值（%）"
            width="120"
          />
          <el-table-column
            prop="energyLevelFully"
            label="充满电量阈值（%）"
            width="120"
          />
          <el-table-column
            prop="energyLevelSuff"
            label="建议充电阈值（%）"
            width="120"
          />
          <el-table-column
            prop="speedMax"
            label="最大前进速度"
            width="120"
          />
          <el-table-column
            prop="speedMin"
            label="最大后退速度"
            width="120"
          />
          <el-table-column
            prop="speedMin"
            label="最大后退速度"
            width="120"
          />
          <el-table-column
            prop="currentPosition"
            label="当前位置坐标"
            width="120"
          />
          <el-table-column
            prop="createTime"
            label="创建时间"
            width="160"
          />
          <el-table-column
            prop="modify"
            label="修改人"
            width="120"
          />
          <el-table-column
            prop="modifyTime"
            label="修改时间"
            width="160"
          />
          <el-table-column
            fixed="right"
            label="操作"
            width="260"
          >
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleChangeMap(scope.row)"
              >
                切换地图
              </el-button>
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)"
              >
                编辑
              </el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.row)"
              >
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="manage__pagination">
          <el-pagination
            background
            layout="total, prev, pager, next"
            :total="1000"
          />
        </div>
      </template>
    </layout>
    <el-dialog
      title="添加设备"
      :visible.sync="addDeviceDialog"
      append-to-body
    >
      <el-form :model="form">
        <el-form-item
          label="设备编号"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="form.device_no"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item
          label="设备名称"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="form.name"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item
          label="设备类型"
          :label-width="formLabelWidth"
        >
          <el-select
            v-model="form.region"
            placeholder="请选择活动区域"
          >
            <el-option
              label="区域一"
              value="shanghai"
            />
            <el-option
              label="区域二"
              value="beijing"
            />
          </el-select>
        </el-form-item>
        <el-form-item
          label="地图"
          :label-width="formLabelWidth"
        >
          <el-select
            v-model="form.region"
            placeholder="请选择活动区域"
          >
            <el-option
              label="区域一"
              value="shanghai"
            />
            <el-option
              label="区域二"
              value="beijing"
            />
          </el-select>
        </el-form-item>
        <el-form-item
          label="集成等级"
          :label-width="formLabelWidth"
        >
          <el-select
            v-model="form.region"
            placeholder="请选择活动区域"
          >
            <el-option
              label="区域一"
              value="shanghai"
            />
            <el-option
              label="区域二"
              value="beijing"
            />
          </el-select>
        </el-form-item>
        <el-form-item
          label="长度"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="form.name"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item
          label="低电量阈值"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="form.name"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item
          label="良好电量阈值"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="form.name"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item
          label="充满电量阈值"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="form.name"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item
          label="建议充电阈值"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="form.name"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item
          label="最大前进速度"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="form.name"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item
          label="最大后退速度"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="form.name"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item
          label="额外属性"
          :label-width="formLabelWidth"
        >
          <div
            v-for="(item, index) in form.props"
            :key="index"
            class="manage__form--input"
          >
            <el-input
              v-model="item.key"
              autocomplete="off"
              placeholder="key"
            />
            <el-input
              v-model="item.value"
              autocomplete="off"
              placeholder="value"
            />
            <i
              v-if="form.props.length === index + 1"
              class="el-icon-circle-plus-outline"
              @click="addProps"
            />
            <i
              v-else
              class="el-icon-remove-outline"
            />
          </div>
        </el-form-item>
      </el-form>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="addDeviceDialog = false">
          取 消
        </el-button>
        <el-button
          type="primary"
          @click="addDeviceDialog = false"
        >
          确 定
        </el-button>
      </div>
    </el-dialog>
    <el-dialog
      title="删除地图"
      :visible.sync="deleteDeviceDialog"
      append-to-body
    >
      <span>确定删除{{ chooseRow.name }}吗？</span>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="deleteDeviceDialog = false">
          取 消
        </el-button>
        <el-button
          type="primary"
          @click="deleteDeviceDialog = false"
        >
          确 定
        </el-button>
      </div>
    </el-dialog>
    <el-dialog
      title="切换地图"
      :visible.sync="changeMapDialog"
      append-to-body
    >
      <el-form :model="form">
        <el-form-item
          label="设备名称"
          :label-width="formLabelWidth"
        >
          {{ chooseRow.name }}
        </el-form-item>
        <el-form-item
          label="地图"
          :label-width="formLabelWidth"
        >
          <el-select
            v-model="form.region"
            placeholder="请选择活动区域"
          >
            <el-option
              label="区域一"
              value="shanghai"
            />
            <el-option
              label="区域二"
              value="beijing"
            />
          </el-select>
        </el-form-item>
      </el-form>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="changeMapDialog = false">
          取 消
        </el-button>
        <el-button
          type="primary"
          @click="changeMapDialog = false"
        >
          确 定
        </el-button>
      </div>
    </el-dialog>
  </main>
</template>
<script>
	import Layout from '@/components/Layout'
  import { getDeviceList } from "@/api/device"

  export default {
		components: {
			Layout
		},
		data() {
			return {
        seta: true,
				searchData: {
					deviceName: '',
					mapId: '',
					deviceId: '',
					deviceLevel: ''
				},
				tableData: [],
				multipleSelection: [],
				addDeviceDialog: false,
				deleteDeviceDialog: false,
				changeMapDialog: false,
				chooseRow: {},
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: '',
					props: [{
						key: "",
						value: ""
					},
						{
							key: "",
							value: ""
						}, {
							key: "",
							value: ""
						}]
				},
				formLabelWidth: '140px',
				tableHeight: "100px"
			};
		},
    created() {this.tableData = [];},
		mounted() {
      this.tableData = [];
      getDeviceList().then( res => {
        if(res.code === 200) {
          this.tableData = res.data.rows;
        }
      })
		},
		methods: {
			onSubmit() {
				console.log(this.searchData)
			},
			onReset() {
				this.$refs.form.resetFields();
			},
			handleSelectionChange(val) {
				this.multipleSelection = val;
			},
			handleEdit() {
				this.addDeviceDialog = true
			},
			handleChangeMap(row) {
				this.chooseRow = row
				this.changeMapDialog = true
			},
			handleDelete(row) {
				this.chooseRow = row
				this.deleteDeviceDialog = true
			},
			addProps() {
				let o = {
					key: "",
					value: ""
				}
				this.form.props.push(o)
			},
			querySearch(queryString, cb) {
				console.log(queryString, cb);
				// var restaurants = this.restaurants;
				// var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
				// 调用 callback 返回建议列表的数据
				// cb(results);
			},
		}
	}
</script>

<style lang="scss" scoped>
	.manage {
		height: calc(100vh - 84px);
		&__btn {
			margin-bottom: 15px;
		}
		&__pagination {
			display: flex;
			justify-content: flex-end;
		}
		&__form {
			&--input {
				display: flex;
				align-items: center;
			}
		}
	}
</style>
