<template>
  <div>
      <el-container>
          <el-aside width="200px">Aside</el-aside>
          <el-container>
            <el-header>
               <i class="el-icon-edit"></i>
               <i class="el-icon-share"></i>
               <i class="el-icon-delete"></i>
               <i class="el-icon-loading"></i>
               <i class="el-icon-info"></i>
               <i class="el-icon-error"></i>
               <i class="el-icon-warning"></i>
               <i class="el-icon-question"></i>
               <i class="el-icon-star-on"></i>
               <i class="el-icon-picture"></i>
               <el-button type="primary" icon="el-icon-search">搜索</el-button>

            </el-header>
            <el-main>
              <img src="../assets/logo.png" width="80">
              <el-row>
                               <el-button disabled>默认按钮</el-button>
                               <el-button type="primary" disabled>主要按钮</el-button>
                               <el-button type="success" disabled>成功按钮</el-button>
                               <el-button type="info" disabled>信息按钮</el-button>
                               <el-button type="warning" disabled>警告按钮</el-button>
                               <el-button type="danger" disabled>危险按钮</el-button>
                             </el-row>

                             <el-row>
                               <el-button plain disabled>朴素按钮</el-button>
                               <el-button type="primary" plain disabled>主要按钮</el-button>
                               <el-button type="success" plain disabled>成功按钮</el-button>
                               <el-button type="info" plain disabled>信息按钮</el-button>
                               <el-button type="warning" plain disabled>警告按钮</el-button>
                               <el-button type="danger" plain disabled>危险按钮</el-button>
                             </el-row>
              </el-main>
            <el-footer>Footer</el-footer>
          </el-container>
        </el-container>

  </div>

</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      message1: 'Hello Vue!',
      message2: '页面加载于 ' + new Date().toLocaleString(),
      seen:true,
      todos:[
        {text:'Git'},
        {text:'webpack'},
        {text:'es6'},
        {text:'element-ui'},
      ]
    }
  }
}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .el-header, .el-footer {
     background-color: #B3C0D1;
     color: #333;
     text-align: center;
     line-height: 60px;
   }

   .el-aside {
     background-color: #D3DCE6;
     color: #333;
     text-align: center;
     line-height: 200px;
   }

   .el-main {
     background-color: #E9EEF3;
     color: #333;
     text-align: center;
     line-height: 160px;
   }

   body > .el-container {
     margin-bottom: 40px;
   }

   .el-container:nth-child(5) .el-aside,
   .el-container:nth-child(6) .el-aside {
     line-height: 260px;
   }

   .el-container:nth-child(7) .el-aside {
     line-height: 320px;
   }
 </style>
