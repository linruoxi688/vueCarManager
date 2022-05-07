<template>
    <el-container><!--右侧主体部分 -->
    <el-header style="text-align: left; font-size: 20px"><!--header加载了角色列表一行 -->
         <span>学生列表</span>
    </el-header>
    <br>
    <div style="text-align:right">
     <el-button type="primary" @click="dialogFormVisible = true">添加学生信息</el-button><!--这个div中编写了添加角色的按钮 -->
     <el-dialog title="新建角色" :visible.sync="dialogFormVisible"><!--使用dialog表单进行记载 -->
          <el-form :model="form" ref="UserRef">
               <el-form-item label="姓名" :label-width="120">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
               </el-form-item>
               <el-form-item label="学号" :label-width="120">
                    <el-input v-model="form.id" autocomplete="off"></el-input>
               </el-form-item>
                <el-form-item label="院系" :label-width="120">
                    <el-input v-model="form.dep" autocomplete="off"></el-input>
               </el-form-item>
                <el-form-item label="班级" :label-width="120">
                    <el-input v-model="form.cla" autocomplete="off"></el-input>
               </el-form-item>
                <el-form-item label="年级" :label-width="120">
                    <el-input v-model="form.grade" autocomplete="off"></el-input>
               </el-form-item>
               <el-form-item label="性别" :label-width="120">
                    <el-input v-model="form.sex" autocomplete="off"></el-input>
               </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
               <el-button @click="closeDialog">取 消</el-button>
               <el-button type="primary" @click="add();closeDialog()">确 定</el-button>
          </div>
     </el-dialog>
    </div>
    <el-main><!--最下侧，角色列表主体部分 -->
      <el-table :data="tableData">
        <el-table-column prop="name" label="姓名" width="250">
        </el-table-column>
        <el-table-column prop="time" label="学号" width="250">
        </el-table-column>
        <el-table-column prop="dep" label="院系" width="250">
        </el-table-column>
        <el-table-column prop="class" label="班级" width="250">
        </el-table-column>
        <el-table-column prop="grade" label="年级" width="250">
        </el-table-column>
        <el-table-column prop="sex" label="性别" width="250">
        </el-table-column>
        <el-table-column prop="action" label="操作">
               <template slot-scope="scope">
                    <el-button type="danger" icon="el-icon-delete" @click="del(scope.row.id)">删除</el-button><!--删除角色 -->
               </template>
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</template>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
export default {
    data() {
      var item =[
           {
          name: '系统管理员',
          time: '2021-2-01',
          id: '1'
      },
      {
          name: '普通用户',
          time: '2021-2-01',
          id: '2'
      },
      {
          name: '游客',
          time: '2021-2-01',
          id: '3'
      },
      {
          name: '禁止访问',
          time: '2021-2-01',
          id: '4'
      },
      {
          name: '游客',
          time: '2021-2-01',
          id: 'Lori'
      },
      ]//初始几条已存在数据
      return {
        tableData: item,//存放所有角色数据的动态数组
        dialogFormVisible: false,//增加角色的dialog表单隐藏与否
        editFormVisible:false,//编辑角色的dialog表单
        form: {//暂时存放name和id的数组
          name: '',
          id: ''
        }
      }
    },
    methods:{
         add:function(){
              alert("添加角色成功！")
              this.tableData.push(this.form)
              this.form={
                    name: '',
                    id: ''
               }//还原临时表单
         },
         del:function(id){
          //     alert(this.tableData[id-1].name+'已从列表中删除')
          //     this.tableData.splice(id-1,1)
          //由于id不一定为顺序值，弃用，采用循环字符串比较
              for(let i=0;i<this.tableData.length;i++)//循环比较
              {
                   if(this.tableData[i].id==id)
                   {
                        alert(this.tableData[i].name+'已从列表中删除')
                        this.tableData.splice(i, 1)
                   }
              }
         },
         edit:function(id){
              for(let i=0;i<this.tableData.length;i++)//循环比较
              {
                   if(this.tableData[i].id==id)
                   {
                    this.tableData[i]=this.form
                    alert("修改成功！")
                    this.form={
                    name: '',
                    id: ''
                              }
                   }
              }
         },
         closeDialog:function(){
               this.dialogFormVisible=false
               this.form={
                    name: '',
                    id: ''}
               this.$refs.UserRef.resetFields()
         },//关闭新建角色
         closeEdit:function(){
              this.editFormVisible=false
              this.form={
                    name: '',
                    id: ''
                              }
         },//关闭编辑角色
}
}
</script>
<style>
.el-header {
    background-color: #f5f7fa;
    color: #333;
    line-height: 60px;
  }
</style>
