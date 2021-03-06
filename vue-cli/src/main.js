import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'

Vue.component('my-component', Home); // Globally registered component.

new Vue({
  el: '#app',
  render: h => h(App)
})
