/*
 * @Author: Wanko
 * @Date: 2023-05-17 14:42:53
 * @LastEditors: Wanko
 * @LastEditTime: 2023-07-07 16:53:00
 * @Description: 
 */
import {
	createSSRApp
} from "vue";
import App from "./App.vue";
import store from "./store";

import request from "./request";
export function createApp() {
	const app = createSSRApp(App);
	app.use(store)
	app.use(request)
	return {
    app,
  }
}
