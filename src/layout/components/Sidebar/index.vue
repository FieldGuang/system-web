<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      :unique-opened="$store.state.settings.uniqueOpened"
      mode="vertical"
      background-color="#ffffff"
      text-color="#515a6e"
      active-text-color="#409EFF"
    >
      <Logo :is-collapse="isCollapse" />
      <sidebar-item
        v-for="route in permission_routers"
        :key="route.path"
        :item="route"
        :base-path="route.path"
      />
    </el-menu>
  </el-scrollbar>
</template>

<script>
  import { mapGetters } from 'vuex'
  import SidebarItem from './SidebarItem'
  import Logo from './Logo'
  export default {
    components: { SidebarItem, Logo },
    computed: {
      ...mapGetters([
        'permission_routers',
        'sidebar'
      ]),
      isCollapse() {
        return !this.sidebar.opened
      }
    },
    mounted() {
      console.log('-----------', this.permission_routers)
    }
  }
</script>
