/*
 * @Author: Wanko
 * @Date: 2023-05-17 14:42:53
 * @LastEditors: Wanko
 * @LastEditTime: 2023-05-18 15:26:22
 * @Description: 
 */
import {
	createSSRApp
} from "vue";
import App from "./App.vue";

import request from "./request";
export function createApp() {
	const app = createSSRApp(App);
	app.use(request)
	return {
		app,
	}
}
