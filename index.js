// 配置高德地图定位、腾讯地图定位、JSSDK地图定位、钉钉JSAPI定位配置参数
let config_Amap = {
	el: null,
	key: "",
	isRequired: false,
	enable: false,
	map: null,
	geolocation: null,

	enableHighAccuracy: true, //是否使用高精度定位，默认:true
	timeout: 5000, //超过10秒后停止定位，默认：5s
	buttonPosition: "RB", //定位按钮的停靠位置
	buttonOffset: new AMap.Pixel(10, 20), // new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
	zoomToAccuracy: true, //定位成功后是否自动调整地图视野到定位点
};

let config_qq = {
	el: null,
	key: "",
	isRequired: false,
};
let config_wx_JSSDK = {
	el: null,
	key: "",
	isRequired: false,
};
let config_dingding_JSAPI = {
	el: null,
	key: "",
	isRequired: false,
};

/**
 * 检测地图是否绑定 div 元素
 *
 * @param {String} el
 */
function check_el(el) {
	// 不存在绑定关系
	if (typeof el !== "string" && /^\#a-zA-Z0-9+&/.test(el)) {
		console.error("地图服务未正确绑定到html元素容器上，请检查配置！否者地图将不会在页面正常显示。");
	}
	return typeof el === "string" ? el : "";
}

/**
 * 高德地图定位服务初始化
 *
 * @param {String} config
 * @param {*} cbSuccess
 * @param {*} cbError
 */
export function initAmapService(config, cbSuccess, cbError) {
	let [elment] = [check_el(config.el)];

	// 地图对象初始化
	if (!config_Amap.map) {
		config_Amap.map = new AMap.Map(elment, {
			resizeEnable: true,
		});
	}

	// 地图服务环境配置及定位
	AMap.plugin("AMap.Geolocation", function() {
		// 初始化地图定位geolocation对象
		if (!config_Amap.geolocation) {
			config_Amap.geolocation = new AMap.Geolocation({
				enableHighAccuracy: config.enableHighAccuracy,
				timeout: config.timeout,
				buttonPosition: config.buttonPosition,
				buttonOffset: config.buttonOffset,
				zoomToAccuracy: config.zoomToAccuracy,
			});
			map.addControl(config_Amap.geolocation);
		}
	});
}

// 获取当前定位
export function getAmapCurrentPosition(geolocation) {
	return new Promise((resolve, reject) => {
		geolocation.getCurrentPosition((status, result) => {
			// location success
			if (status == "complete") {
				resolve(result);
			} else {
				// location success
				reject(result);
			}
		});
	});
}

/**
 * 腾讯地图定位服务初始化
 *
 * @param {String} config
 * @param {*} cbSuccess
 * @param {*} cbError
 */
function initAmapService(config, cbSuccess, cbError) {}

/**
 * JSSDK地图定位服务初始化
 *
 * @param {String} config
 * @param {*} cbSuccess
 * @param {*} cbError
 */
function initAmapService(config, cbSuccess, cbError) {}

/**
 * DDJSAPI地图定位服务初始化
 *
 * @param {String} config
 * @param {*} cbSuccess
 * @param {*} cbError
 */
function initAmapService(config, cbSuccess, cbError) {}
