// shoelace components
import '@shoelace-style/shoelace/dist/shoelace.js';
import '@shoelace-style/shoelace/dist/themes/light.css';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
import { createApp, reactive } from 'petite-vue/dist/petite-vue.es.js';
// Set the base path to the folder you copied Shoelace's assets to
setBasePath('../node_modules/@shoelace-style/shoelace/dist');

createApp({
  store: reactive({
    count: 0,
    inc() {
      this.count++
    }
  })
}).mount('#app')