// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import '../theme/index.css'
import ElementUI from 'element-ui'

//引入element-ui
//import ElementUI from 'element-ui';
//import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
//按需引入
/*Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };//全局配置

import { Button, Select } from 'element-ui';
Vue.use(Button)
Vue.use(Select)*/

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
