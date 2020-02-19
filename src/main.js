import Vue from 'vue'

import VueHighlightJS from 'vue-highlight.js';
// import css from 'highlight.js/lib/languages/css';
import javascript from 'highlight.js/lib/languages/javascript';
import python from 'highlight.js/lib/languages/python';
import cs from 'highlight.js/lib/languages/cs';
// import vue from 'vue-highlight.js/lib/languages/vue';
import 'highlight.js/styles/default.css';
import 'highlight.js/styles/atom-one-light.css';

// import { component as VueCodeHighlight } from 'vue-code-highlight';

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'


import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Buefy)

Vue.use(VueHighlightJS, {
	// Register only languages that you want
	languages: {
		python,
		javascript,
    cs
	}
});



// Vue.use(VueCodeHighlight)

new Vue({
  render: h => h(App),
}).$mount('#app')
