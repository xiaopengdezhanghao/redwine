/*
	封装uni-app请求
*/
import $store from "../store";
import service from "common/service.js";
import md5 from 'js-md5';
let user_token = uni.getStorageSync("user_token") || '';
/**
 * 组装加密参数
 * @param {Object} jsonObj
 */
function jsonSort(jsonObj) {
	let arr = [];
	for (var key in jsonObj) {
		arr.push(key)
	}
	arr.sort();
	let str = '';
	for (var i in arr) {
		str += arr[i] + "=" + jsonObj[arr[i]] + "&"
	}
	return str
}
/**
 * 加密请求参数
 * @param {Object} data
 */
function sign(data) {
	if (uni.getStorageSync("user_token")) {
		data.time = Math.round(new Date() / 1000)
		let str = jsonSort(data);
		str += uni.getStorageSync("user_token");
		data.sign = md5(str)
	}
	return data
}
function request(params, method) {
	return new Promise(function(resolve, reject) {
		if (!service.api_baseurl || !service.app_config) {
			console.log('service.js 中参数配置不全');
			reject('service.js 中参数配置不全');
			return
		}
		params.data = sign(params.data);
		// 添加必要参数 根据具体业务定
		// $store.commit("switch_loading", true)
		uni.request({
			url: service.api_baseurl + params.url,
			data: params.data,
			method: method,
			header: {
				"accept": "application/json",
				"content-type": "application/json;charset=UTF-8",
				"XX-Api-Version": service.app_config.api_version,
				"XX-Token": uni.getStorageSync("user_token"),
				"XX-Device-Type": 'mobile'
			},
			success(res) {
				if (res.statusCode == 200) {
					if (res.data.code == 10001) {
						setTimeout(()=>{
							uni.reLaunch({
								url: '../login/login'
							});
						},500);
						uni.showToast({
							title: res.data.msg,
							icon: "none"
						})
						return false;
					}
					if (res.data.code == 0 || res.data.code == -995) {
						uni.showToast({
							title: res.data.msg,
							icon: "none"
						})
					}
					// 成功回调
					resolve(res)
				}
			},
			fail() {
				// uni.showToast({
				// 	title: '系统繁忙,请稍后重试!',
				// 	icon: "none"
				// })
				// 失败回调
			},
			complete() {
				// 无论成功或失败 只要请求完成的 回调
				$store.commit("switch_loading", false)
			}
		})
	})
};
export default {
	async get(params) {
		return await request(params, "GET")
	},
	async post(params) {
		return await request(params, "POST")
	},

}
