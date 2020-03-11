const utils = {
	/**
	 * 获取url中的参数
	 * @param name：参数名
	 */
	getUrlQuery: (name) => {
		if ((typeof name).toLowerCase() !== 'string') {
			console.error('name参数应该为string');
		}
		const search = window.location.search.substr(1);
		const query = search.split('&');
		let result;
		for (let i = 0; i < query.length; i += 1) {
			if (query[i].indexOf(`${name}=`) > -1) {
				const arr = query[i].split(`${name}=`);
				([, result] = arr);
				break;
			}
		}
		if (result) return result;
		console.log(`${name} 参数不存在`);
		return '';
	},
	//数组去重(arr为纯数组)
	setArry: (arr) => {
		var x = Array.from(new Set(arr));
		return [...x];
	},
	//数组去重 包含对象
	Es6duplicate: (arr, type) => {
		if (arr.length == 0) {
			return arr;
		} else {
			if (type) {
				var obj = {}
				var newArr = arr.reduce((cur, next) => {
					obj[next.name] ? "" : obj[next.name] = true && cur.push(next);
					return cur;
				}, [])
				return newArr;
			} else {
				return Array.from(new Set(arr));
			}
		}
	},
	datebj:(date1, date2)=> {
		var oDate1 = new Date(date1);
		var oDate2 = new Date(date2);
		let trueOrFalse = false;
		if (oDate1.getTime() > oDate2.getTime()) {
			trueOrFalse = false;
		} else {
			trueOrFalse = true;
		}
		return trueOrFalse;
	},
	accMul:(arg1, arg2) => {
		var m = 0,
			s1 = arg1.toString(),
			s2 = arg2.toString();
		try {
			m += s1.split(".")[1].length
		} catch (e) {}
		try {
			m += s2.split(".")[1].length
		} catch (e) {
			
		}
		
		return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
	}
};
export default utils;
