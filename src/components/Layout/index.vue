<template>
  <div
    id="my-component"
    ref="mycomponent"
  >
    <div
      ref="header"
      class="com-header"
    >
      <slot name="form" />
      <div class="btn-group">
        <el-button
          size="small"
          type="primary"
          @click="submitForm()"
        >
          查询
        </el-button>
        <el-button
          size="small"
          @click="resetForm()"
        >
          重置
        </el-button>
      </div>
    </div>
    <div
      ref="main"
      class="com-main"
    >
      <slot
        name="table"
        :tableHeight="tableHeight"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'Layout',
  props: ['formList'],
  data() {
    return {
      tableHeight: null
    }
  },
  watch: {

  },
  mounted() {
    const _self = this
    window.onresize = () => {
      _self.computeTableHeight()
    },
      this.$nextTick(function () {
        this.computeTableHeight()
      }, 1)
  },
  methods: {
    computeTableHeight() {
      // this.tableHeight = this.$refs.mycomponent.clientHeight - this.$refs.header.offsetHeight - 30 - 15 - 30 - 32 - 32
      // mycomponent的高度-main顶部距离mycomponent的高度-内边距-button 的高-button的下边距-分页的高-预留底部的高
      this.tableHeight = this.$refs.mycomponent.offsetHeight - this.$refs.main.offsetTop - 30 - 32 - 15 - 32 - 15
    },
    submitForm() {
      this.$emit('submitForm')
    },
    resetForm() {
      this.$emit('resetForm')
    }
  }
}
</script>
<style lang="scss">
#my-component {
  box-sizing:border-box;
  height: calc(100vh - 84px);
  background: #f2f2f2;
  padding: 15px;
  .btn-group {
    button {
      width: 79px;
    }
  }
  label.el-form-item__label {
    font-weight: normal;
  }
  .com-header,
  .com-main {
    background: #fff;
    padding: 15px 20px;
  }
  .com-header {
    margin-bottom: 15px;
  }
}
</style>
