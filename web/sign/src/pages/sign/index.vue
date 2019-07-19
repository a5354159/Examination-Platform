<template>
    <div class="wrap">
        <!-- 首页地图模块 -->
        <div class="map">
            <Map
                id="map"
                :markers="markers"
                :updateDistance="updateDistance"
                :longitude="longitude"
                :latitude="latitude"
                scale="14"
                subkey="X7RBZ-MMOKR-UQEWJ-WSCXC-IVXVK-IFFLL"
                show-location
                style="width: 100%; height: 100%;"
            />
        </div>
        <!-- 打卡按钮 -->
        <cover-view class="current">
            <button class="add" @click="goSign">打卡</button>
        </cover-view>
    </div>
</template>

<script>
import QQMapWX from "@/utils/qqMap";
import { mapState, mapActions } from "vuex";

export default {
    props: {},
    components: {},
    data() {
        return {
            longitude: "113.324520",
            latitude: "23.099994"
        };
    },
    computed: {},
    methods: {
        ...mapActions({
            updateDetail: "sign/updateDetail"
        }),
        goSign() {
          console.log('111')
            wx.showModal({
                title: "提示",
                content: "确定放弃面试吗",
                success: async res => {
                  
                  if (res.confirm) {
                  console.log('22222')
                        await this.updateDetail({
                            id: this.data.id,
                            params: { status: 0 }
                        });

                        wx.navigateBack({
                            url: "/pages/list/main"
                        });
                    }else{
          console.log('333')

                    }
                }
            });
        }
    },
    created() {
        let qqmapsdk = new QQMapWX({
            key: "X7RBZ-MMOKR-UQEWJ-WSCXC-IVXVK-IFFLL"
        });
        let that = this;
        wx.getLocation({
            type: "wgs84",
            success(res) {
                console.log("res...", res);
                that.latitude = res.latitude;
                that.longitude = res.longitude;
                const speed = res.speed;
                const accuracy = res.accuracy;
            }
        });
    },
    mounted() {}
};
</script>
<style lang="scss" scoped>
.wrap {
    height: 100%;
}
.map {
    width: 100%;
    height: 100%;
    padding-bottom: 100rpx;
    box-sizing: border-box;
}
.current {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 240rpx;
}
.location {
    position: fixed;
    bottom: 160rpx;
    width: 80rpx;
    height: 80rpx;
    left: 20rpx;
}
.add {
    position: fixed;
    width: 100%;
    height: 100rpx;
    background: #000;
    color: #fff;
    font-weight: 500;
    bottom: 0;
    left: 0;
    font-size: 40rpx;
}
.my {
    position: fixed;
    display: inline-block;
    bottom: 150rpx;
    right: 0;
    width: 120rpx;
    height: 100rpx;
    cover-image {
        width: 80rpx;
        height: 80rpx;
        margin-top: 10rpx;
        margin-left: 10rpx;
        background: #000;
        border-radius: 50%;
    }
}
map {
    width: 100%;
    height: 100%;
}
</style>
