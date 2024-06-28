/*
 * @Author: Wanko
 * @Date: 2023-05-17 14:42:53
 * @LastEditors: Wanko
 * @LastEditTime: 2024-06-15 15:03:56
 * @Description: 
 */
import {
	createSSRApp
} from "vue";
import App from "./App.vue";
import store from "./store";
import 'caring-css'
import request from "./request";
export function createApp() {
	const app = createSSRApp(App);
	app.use(store)
	app.use(request)
	return {
    app,
  }
}
