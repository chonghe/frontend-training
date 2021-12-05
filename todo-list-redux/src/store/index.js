import { createStore } from "redux";

import reducer from "./reducer";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;

/**
 * 1 创建store by createStore方法
 * 2 reducer文件内 创建初始参数 Reducer 是一个函数，它接受Action 和当前State 作为参数，返回一个新的State
 * 3 reducer作为参数传入该方法，导出store
 * 4 开发的组件获取store内的state， this.state=store.getState()
 * 5 获取更新数据 创建fn this.setState(store.getState());
 * 6 构造函数内订阅store，当store的数据发生变化，就会被自动执行，store.subscribe(fn)
 * 7
 */
