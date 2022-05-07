<template>
  <div>
    <el-container>
      <el-aside width="240px">
        <el-menu :default-active="$route.path" class="el-menu-vertical-demo" router>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>项目资源</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/student">商户信息</el-menu-item>
              <el-menu-item index="/hello">推广团队</el-menu-item>
              <el-menu-item index="/C-Management/C-Management">插件管理</el-menu-item>
              <el-menu-item index="/D-customer/D-customer">我的客户</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
export default {
};
</script>
<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
  height: 100%;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  height: 100vh;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}
</style>
