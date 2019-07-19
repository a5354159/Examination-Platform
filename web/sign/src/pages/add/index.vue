<template>
    <form @submit="submit" report-submit class="wrap">
        <p>面试信息</p>
        <div class="cent">
            <ul class="list">
                <li>
                    <lable for>公司名称</lable>
                    <input type="text" v-model="current.company" placeholder="请输入公司名称" focus />
                </li>
                <li>
                    <lable for>公司电话</lable>
                    <input
                        type="number"
                        v-model="current.phone"
                        placeholder="请输入面试联系人电话"
                        maxlength="11"
                    />
                </li>
                <li>
                    <lable for>面试时间</lable>
                    <picker
                        mode="multiSelector"
                        :range="dateRange"
                        :value="info.date"
                        @change="dateChange"
                        @columnchange="columnChange"
                    >
                        <view class="date">{{dateShow}}</view>
                    </picker>
                    <icon @click="showTimeTip" class="tip" type="warn" color="#197DBF" size="24"></icon>
                </li>
                <li>
                    <lable for>面试地址</lable>
                    <input
                        @tap="goSearch"
                        type="text"
                        disabled
                        v-model="current.address.address"
                        placeholder="请选择面试地址"
                    />
                </li>
            </ul>
        </div>
        <p>备注信息</p>
        <div class="text">
            <textarea type="text" v-model="current.description" placeholder="备注信息(可选，100个字以内)" />
        </div>
        <div class="box_btn">
            <button :class="btnEnable?'': 'disable'" form-type="submit" >确认</button>
        </div>
    </form>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
const moment = require("moment");

const range = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23
    ],
    ["00分", "10分", "20分", "30分", "40分", "50分"]
];
export default {
    data() {
        return {
            info: {
                date: [0, 0, 0]
            }
        };
    },
    created() {
        // 如果当前时间是十一点之后，过滤掉今天
        if (moment().hour() == 23) {
            this.info.date = [1, 0, 0];
        }
    },
    computed: {
        ...mapState({
            current: state => state.interview.current
        }),
        // 按钮是否可点击
        btnEnable() {
            // 判断公司名称是否为空
            if (!this.current.company) {
                return false;
            }
            // 判断手机号是否符合规范
            if (
                !/^1(3|4|5|7|8)\d{9}$/.test(this.current.phone) ||
                !/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(this.current.phone)
            ) {
                return false;
            }
            // 判断公司地址
            if (!this.current.address.address) {
                return false;
            }
            return true;
        },
        // 处理面试日期
        dateRange() {
            let dateRange = [...range];
            // 如果时间是今天，过滤掉现在之前的小时
            if (!this.info.date[0]) {
                dateRange[1] = dateRange[1].filter(item => {
                    return item > moment().hour();
                });
            } else {
                dateRange[1] = range[1];
            }
            // 格式化小时
            dateRange[1] = dateRange[1].map(item => {
                return item + "点";
            });
            // 计算当前日期之后的十天
            dateRange[0] = dateRange[0].map(item => {
                return (
                    moment()
                        .add(item, "days")
                        .date() + "号"
                );
            });
            return dateRange;
        },
        // 显示的日期
        dateShow() {
            return moment()
                .add(
                    moment().hour() == 23
                        ? this.info.date[0] - 1
                        : this.info.date[0],
                    "d"
                )
                .add(this.info.date[1] + 1, "h")
                .minute(this.info.date[2] * 10)
                .format("YYYY-MM-DD HH:mm");
        }
    },
    methods: {
        ...mapActions({
            submitInterview: "interview/submit"
        }),
        ...mapMutations({
            updateState: "interview/updateState"
        }),
        // 监听多列选择器每列变化
        columnChange(e) {
            let { column, value } = e.target;
            let date = [...this.info.date];
            date[column] = value;
            this.info.date = date;
        },
        showTimeTip() {
            wx.showToast({
                title: "在面试前一个小时我们会通知你哦", //提示的内容,
                icon: "none" //图标,
            });
        },
        // 去选择地址
        goSearch() {
            wx.navigateTo({ url: "/pages/local/main" });
        },
        // 提交添加面试
        async submit(e) {
            // 判断是否在提交状态
            if (this.submiting) {
                return false;
            }
            // 判断公司名称是否为空
            if (!this.current.company) {
                wx.showToast({
                    title: "请输入公司名称", //提示的内容,
                    icon: "none" //图标,
                });
                return false;
            }
            // 判断手机号是否符合规范
            if (
                !/^1(3|4|5|7|8)\d{9}$/.test(this.current.phone) ||
                !/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(this.current.phone)
            ) {
                wx.showToast({
                    title: "请输入面试联系人的手机或座机", //提示的内容,
                    icon: "none" //图标,
                });
                return false;
            }
            // 判断公司地址
            if (!this.current.address.address) {
                wx.showToast({
                    title: "请选择公司地址", //提示的内容,
                    icon: "none" //图标,
                });
                return false;
            }
            // 添加时间戳到表单
            this.current.start_time = moment(this.dateShow).unix() * 1000;
            // 添加form_id
            this.current.form_id = e.target.formId;
            this.submiting = true;
            let data = await this.submitInterview(this.current);
            console.log("data...", data);
            this.submiting = false;
            // 处理添加结果
            if (data.code == 0) {
                wx.showModal({
                    title: "温馨提示", //提示的标题,
                    content: data.msg, //提示的内容,
                    showCancel: false,
                    confirmText: "确定", //确定按钮的文字，默认为取消，最多 4 个字符,
                    confirmColor: "#197DBF", //确定按钮的文字颜色,
                    success: res => {
                        if (res.confirm) {
                            this.updateState({
                                form_id: "",
                                company: "",
                                address: "",
                                phone: ""
                            });
                            wx.navigateTo({
                                url: "/pages/list/main"
                            });
                        }
                    }
                });
            } else {
                wx.showToast({
                    title: data.msg, //提示的内容,
                    icon: "fail" //图标,
                });
            }
        }
    }
};
</script>
<style scoped lang="">
.wrap {
    /* box-sizing: border-box;
    padding: 0 10px; */
    display: flex;
    flex-direction: column;
    background: #eee;
}
.wrap p {
    box-sizing: border-box;
    padding: 10px 15px;
    font-size: 17px;
}
.cent {
    background: #fff;
}
.cent ul {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0 15px;
}
/* .date{
    width: auto;
    display: flex;
} */
.list li {
    display: flex;
    height: 40px;
    color: #aaa;
    font-size: 16px;
    border-bottom: 0.5px solid #ccc;
    align-items: center;
    /* justify-content: space-between; */
}
.list li:nth-last-child(1) {
    border: none;
}
.list li input {
    margin-left: 20px;
}
.tip{
    justify-content: flex-end;
}
picker {
    margin-left: 20px;
    flex: 1;
    display: flex;
    justify-content: space-between;
}
.text {
    width: 100%;
    /* height: 100px; */
    background: #fff;
    box-sizing: border-box;
    padding: 10px 15px;
}
.text textarea {
    width: 100%;
    border: 1px solid #ccc;
    height: 100px;
    font-size: 16px;
    box-sizing: border-box;
    padding: 10px 10px;
}
.box_btn {
    background: #fff;
    padding: 10px 0;

}
button {
    width: 100%;
    border: none;
    background: #000;
    color: #fff;
    font-size: 20px;
    background: #aaa;
    background: #197dbf;
}

button.disable {
    background: #999;
}
</style>