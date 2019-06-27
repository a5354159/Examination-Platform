//加载子模块count
import Count from "./modules/count/index";
import Order from "./modules/order/index";
//引入日志
import { autorun } from "mobx";
let count = new Count();
let order = new Order();
autorun(() => {
  console.log("count change....", count.count);
});
export default {
  count,
  order
};
