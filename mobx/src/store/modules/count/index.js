import { observable, action } from "mobx";
export default class Count {
  @observable count = 10000;
  @action changeCount(type) {
    type === "+" ? this.count++ : this.count--;
  }
}
