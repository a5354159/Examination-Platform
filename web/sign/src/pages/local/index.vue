<template>
    <div class="wrap">
        <div class="top">
            <span>北京</span>
            <input type="text" placeholder="面试地点" v-model="address" focus />
        </div>
        <div class="local_list">
            <ul class="list">
                <li
                    v-for="(item, index) in suggestion"
                    :key="index"
                    hover-class="hover"
                    @click="select(index)"
                >
                    <span>
                        <img src="/static/images/location.svg" alt />
                    </span>
                    <div>
                        <p>{{item.title}}</p>
                        <p>{{item.address}}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import { debounce } from "@/utils/index.js";
import { mapMutations } from "vuex";

export default {
    data() {
        return {
            address: "",
            suggestion: []
        };
    },

    watch: {
        // 监听input框变化，调用智能提示
        address(val, oldVal) {
            this.search(val);
        }
    },

    methods: {
        ...mapMutations({
            updateState: "interview/updateState"
        }),
        select(index) {
            console.log("index...", index);
            // 更新当前地址
            this.updateState({
                address: this.suggestion[index]
            });
            // 返回上一页
            wx.navigateBack();
        }
    },

    created() {
        var that = this;
        // 使用函数防抖控制事件触发频率
        this.search = debounce(val => {
            this.$map.search({
                keyword: val,
                region: "北京",
                success: function(res) {
                    console.log(res);
                    that.suggestion = res.data;
                }
            });
        }, 300);
    }
};
</script>
<style scoped lang="">
.wrap {
    display: flex;
    flex-direction: column;
    /* background: #eee; */
}

.top {
    width: 100%;
    border-bottom: 1px solid rgb(241, 240, 240);
    border-top: 1px solid rgb(241, 240, 240);
    display: flex;
    box-sizing: border-box;
    padding: 10px 15px;
}
.top input {
    margin-left: 20px;
    border-left: 1px solid #ddd;
    box-sizing: border-box;
    padding-left: 10px;
}
.list li span {
    width: 30px;
    height: 30px;
    display: flex;
}
.list li span img {
    width: 30px !important;
    height: 30px !important;
}
.list li {
    display: flex;
    height: 40px;
    font-size: 16px;
    border-bottom: 0.5px solid rgb(241, 240, 240);
    align-items: center;
    padding: 5px 15px;
}
.list li div {
    flex: 1;
    margin-left: 30rpx;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.list li p:nth-child(1) {
    font-size: 34rpx;
}
.list li p:nth-child(2) {
    font-size: 24rpx;
    color: #c0c0c0;
}
.content {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-left: 10px;
}
.content p:nth-child(2) {
    font-size: 14px;
    color: #aaa;
}

/* li{ */
/* height: 100rpx;
  padding: 10rpx 0 10rpx 60rpx;
  box-sizing: border-box;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  flex-direction: row;
  image{
    width: 44rpx;
    height: 44rpx;
  }
  div{
    flex: 1;
    margin-left: 30rpx;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  p:nth-child(1){
    font-size: 34rpx;
  }
  p:nth-child(2){
    font-size: 24rpx;
    color: #c0c0c0;
  }
} */
</style>