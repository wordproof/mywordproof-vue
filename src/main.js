import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/css/tailwind.css";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
import VModal from 'vue-js-modal'

const requireComponent = require.context(
  "./components/",
  false,
  /Base[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, "$1"))
  );

  Vue.component(componentName, componentConfig.default || componentConfig);
});

Vue.use(VModal)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
