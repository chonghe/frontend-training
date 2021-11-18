import axios from "axios";
import qs from "querystring";

/**
 * 处理失败的方法
 * status：状态码
 * info：信息
 */

const errorHandle = (status, info) => {
  switch (status) {
    case 400:
      console.log("当前请求无法被服务器理解");
      break;
    case 401:
      console.log("服务器认证失败");
      break;
    case 403:
      console.log("已理解，但拒绝执行");
      break;
    case 404:
      console.log("请检查网路请求地址");
      break;
    case 500:
      console.log("未曾预料的状况，导致无法完成对请求的处理");
      break;
    case 502:
      console.log("接收到了无效数据");
      break;
    default:
      console.log(info);
      break;
  }
};

/**
 * 创建axios实例对象
 */
const instance = axios.create({
  //公共配置
  // baseURL: "http://anguo.xyz",
  timeout: 5000,
});

/**
 * 处理拦截器
 */

/**
 * 请求拦截
 */
instance.interceptors.request.use(
  (config) => {
    if (config.method === "post") {
      config.data = qs.stringify(config.data);
    }
    return config;
  },
  (error) => Promise.reject(error)
);

/**
 * 响应拦截
 */
instance.interceptors.response.use(
  //finished
  (response) =>
    response.status === 200
      ? Promise.resolve(response)
      : Promise.reject(response),
  (error) => {
    const { response } = error;
    errorHandle(response.status, response.info);
  }
);
export default instance;
