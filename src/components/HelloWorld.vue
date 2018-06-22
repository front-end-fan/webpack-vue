<template>
  <div>
      <el-container>
          <el-aside width="200px">
             <el-col :span="24">
                <el-menu
                  default-active="2"
                  class="el-menu-vertical-demo"
                  @open="handleOpen"
                  @close="handleClose"
                  background-color="#545c64"
                  text-color="#fff"
                  active-text-color="#ffd04b">
                  <el-submenu index="1">
                    <template slot="title">
                      <i class="el-icon-location"></i>
                      <span>导航一</span>
                    </template>
                    <el-menu-item-group>
                      <template slot="title">分组一</template>
                      <el-menu-item index="1-1">选项1</el-menu-item>
                      <el-menu-item index="1-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                      <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                      <template slot="title">选项4</template>
                      <el-menu-item index="1-4-1">选项1</el-menu-item>
                    </el-submenu>
                  </el-submenu>
                  <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">导航二</span>
                  </el-menu-item>
                  <el-menu-item index="3" disabled>
                    <i class="el-icon-document"></i>
                    <span slot="title">导航三</span>
                  </el-menu-item>
                  <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span slot="title">导航四</span>
                  </el-menu-item>
                </el-menu>
              </el-col>
          </el-aside>
          <el-container>
            <el-header>
              <i class="el-icon-loading"></i>
               <i class="el-icon-edit"></i>
               <i class="el-icon-share"></i>
               <i class="el-icon-delete"></i>
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
              <el-rate
                 v-model="value5"
                 disabled
                 show-score
                 text-color="#ff9900"
                 score-template="{value}">
               </el-rate>

               <el-progress :percentage="0"></el-progress>
               <el-progress :percentage="70"></el-progress>
               <el-progress :percentage="80" color="#8e71c7"></el-progress>
               <el-progress :percentage="100" status="success"></el-progress>
               <el-progress :percentage="50" status="exception"></el-progress>
              <br/>
               <el-progress type="circle" :percentage="0"></el-progress>
               <el-progress type="circle" :percentage="25"></el-progress>
               <el-progress type="circle" :percentage="80" color="#8e71c7"></el-progress>
               <el-progress type="circle" :percentage="100" status="success"></el-progress>
               <el-progress type="circle" :percentage="50" status="exception"></el-progress>

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

                               <el-radio v-model="radio" label="1">备选项</el-radio>
                               <el-radio v-model="radio" label="2">备选项</el-radio>
                                <br/>
                               <el-checkbox v-model="checked">备选项</el-checkbox>

                               <div>
                                 <el-input placeholder="请输入内容" v-model="input3">
                                   <template slot="prepend">Http://</template>
                                 </el-input>
                               </div>
                               <div style="margin-top: 15px;">
                                 <el-input placeholder="请输入内容" v-model="input4">
                                   <template slot="append">.com</template>
                                 </el-input>
                               </div>
                               <div style="margin-top: 15px;">
                                 <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
                                   <el-select v-model="select" slot="prepend" placeholder="请选择">
                                     <el-option label="餐厅名" value="1"></el-option>
                                     <el-option label="订单号" value="2"></el-option>
                                     <el-option label="用户电话" value="3"></el-option>
                                   </el-select>
                                   <el-button slot="append" icon="el-icon-search"></el-button>
                                 </el-input>
                               </div>

                             <el-alert
                                 title="成功提示的文案"
                                 type="success"
                                 center
                                 show-icon>
                               </el-alert>
                               <el-alert
                                 title="消息提示的文案"
                                 type="info"
                                 center
                                 show-icon>
                               </el-alert>
                               <el-alert
                                 title="警告提示的文案"
                                 type="warning"
                                 center
                                 show-icon>
                               </el-alert>
                               <el-alert
                                 title="错误提示的文案"
                                 type="error"
                                 center
                                 show-icon>
                             </el-alert>


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
     radio:'1',
     checked: true,
     input3: '',
     input4: '',
     input5: '',
     select: '',
     value5: 3.7
    }
  },
  methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        }
      }
}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .el-main{padding: 50px 200px;}
   .el-alert{height:80px;margin-bottom:20px;}
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
   #app,body{margin:0 !important;}
   .el-aside {
      background-color: rgb(67, 74, 80);
   }
 </style>
