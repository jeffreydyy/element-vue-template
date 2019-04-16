<template> 
<div>
  <div data-v-c28012ce="" class="sidebar-logo-container">
    <a data-v-c28012ce="" href="#/" class="sidebar-logo-link router-link-active">
      <img data-v-c28012ce="" src="http://cdn.img.telefen.com/cms_new/UploadFiles/jfcms/20190320/20190320133902147.png" class="sidebar-logo"> <h1 data-v-c28012ce="" class="sidebar-title">积分收银台管理系统</h1></a></div>

  <el-scrollbar wrap-class="scrollbar-wrapper" style="height: 100%;">

    <el-menu
      :default-active="$route.path"
      :collapse="isCollapse"
      :background-color="variables.menuBg"
      :text-color="variables.menuText"
      :active-text-color="variables.menuActiveText"
      :collapse-transition="false"
      mode="vertical"
    >
      <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path"/>
    </el-menu>
  </el-scrollbar></div>
</template>

<script>
import { mapGetters } from 'vuex'
import variables from '@/styles/variables.scss'
import SidebarItem from './SidebarItem'

export default {
  components: { SidebarItem },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    routes() {
      return this.$router.options.routes
    },
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

.sidebar-logo-container[data-v-c28012ce] {
    position: relative;
    width: 100%;
    height: 50px;
    line-height: 50px;
    background: #2b2f3a;
    text-align: center;
    overflow: hidden
}

.sidebar-logo-container .sidebar-logo-link[data-v-c28012ce] {
    height: 100%;
    width: 100%
}

.sidebar-logo-container .sidebar-logo-link .sidebar-logo[data-v-c28012ce] {
    width: 28px;
    height: 28px;
    vertical-align: middle;
    margin: -5px 4px 0 -4px;
}

.sidebar-logo-container .sidebar-logo-link .sidebar-title[data-v-c28012ce] {
    display: inline-block;
    margin: 0;
    color: #f4d249;
    font-weight: 300;
    line-height: 50px;
    font-size: 14px;
    font-family: Avenir,Helvetica Neue,Arial,Helvetica,sans-serif;
    vertical-align: middle
}

.sidebar-logo-container.collapse .sidebar-logo[data-v-c28012ce] {
    margin-right: 0
}

</style>
