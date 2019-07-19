<template>
    <div class="wrap">
        <ul>
            <li>
                <label for>面试地址：</label>
                <span>{{data.address.address}}</span>
            </li>
            <li>
                <label for>面试时间：</label>
                <span>{{data.start_time}}</span>
            </li>
            <li>
                <label for>联系方式：</label>
                <span>{{data.phone}}</span>
            </li>
            <li>
                <label for>是否提醒：</label>
                <span>{{data.remind?'未提醒':'已提醒'}}</span>
            </li>
            <li>
                <label for>面试状态：</label>
                <span>{{data.status==-1?'未开始':data.status==0?'已打卡': '已放弃'}}</span>
            </li>
            <li v-if="data.status==-1 && !data.view">
                <label for>取消提醒：</label>
                <switch :checked="data.remind===1" @change="cancelRemind" />
            </li>
        </ul>
        <section v-if="data.status==-1 && !data.view" class="action">
            <button @click="goSign">去打卡</button>
            <button @click="giveup">放弃面试</button>
        </section>
    </div>
</template>


<script>
import { mapState, mapActions } from "vuex";
export default {
    props: {},
    components: {},
    data() {
        return {
            data: [],
            date: { view: 0 }
        };
    },
    computed: {
        // ...mapState({
        //     active: state => state.sign.active,
        //     list: state => state.sign.list,
        //     page: state => state.sign.page,
        //     hasMore: state => state.sign.hasMore
        // })
    },
    onLoad: function(options) {
        this.data = JSON.parse(options.id);
        console.log("data.view", this.data);
        console.log("options.view", options);
        // this.$set(this.date,'view',options.view||false)
    },
    methods: {
        ...mapActions({
            updateDetail: "sign/updateDetail"
        }),
        goSign() {
            console.log(this.data)
            // wx.navigateTo({
            //     url: "/pages/sign/main"
            // });
            // ?id="+JSON.stringify(this.data)
            wx.showModal({
                title: "提示",
                content: "确定打卡吗",
                success: async res => {
                    if (res.confirm) {
                        await this.updateDetail({
                            id: this.data.id,
                            params: { status: 0 }
                        });

                        wx.navigateBack({
                            url: "/pages/list/main"
                        });
                    }
                }
            });
        },
        giveup() {
            wx.showModal({
                title: "提示",
                content: "确定放弃面试吗",
                success: async res => {
                    if (res.confirm) {
                        await this.updateDetail({
                            id: this.data.id,
                            params: { status: 1 }
                        });

                        wx.navigateBack({
                            url: "/pages/list/main"
                        });
                    }
                }
            });
        }
    },
    created() {
        console.log("a");
    },
    mounted() {
        console.log(this);
    }
};
</script>
<style lang="scss" scoped>
ul {
    border-top: 1rpx solid #eee;
    border-bottom: 1rpx solid #eee;
    background: #fff;
}
li {
    width: 720rpx;
    min-height: 88rpx;
    margin-left: 30rpx;
    border-bottom: 1rpx solid #eee;
    display: flex;
    align-items: center;
    justify-content: space-between;
    label {
        color: #666;
        width: 170rpx;
        font-size: 30rpx;
    }
    span,
    switch {
        flex: 1;
        font-size: 30rpx;
        color: #333;
        padding-right: 30rpx;
        box-sizing: border-box;
    }
}
li:last-child {
    border-bottom: none;
}
.action {
    display: flex;
    margin: 50rpx 15rpx;
    button {
        flex: 1;
        color: #fff;
        margin: 15rpx;
    }
    button:first-child {
        background: #197dbf;
    }
    button:last-child {
        background: #dc4e42;
    }
}
</style>