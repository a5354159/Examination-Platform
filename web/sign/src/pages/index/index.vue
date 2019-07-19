<template>
    <div class="wrap">
        <div class="mapbox">
            <map
                id="map"
                :longitude="longitude"
                :latitude="latitude"
                scale="14"
                subkey="X7RBZ-MMOKR-UQEWJ-WSCXC-IVXVK-IFFLL"
                show-location
                style="width: 100%; height: 100%;"
            ></map>
        </div>
        <div class="icon">
            <span>
                <img src="/static/images/location.png" alt />
            </span>
            <span>
                <img src="/static/images/my.png" @click="my" alt />
            </span>
        </div>
        <div class="mapbutton">
            <button @click="click">添加面试题</button>
        </div>
    </div>
</template>

<script>
import QQMapWX from "@/utils/qqMap";
export default {
    props: {},
    components: {},
    data() {
        return {
            longitude: "113.324520",
            latitude: "23.099994",
            flag: false
        };
    },
    computed: {},
    methods: {
        click() {
            wx.navigateTo({
                url: "/pages/add/main"
            });
        },
        my() {
            wx.navigateTo({
                url: "/pages/my/main"
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

<style scoped>
.wrap {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
}
.mapbox {
    flex: 1;
    display: flex;
    flex-direction: column;
}
.map {
    width: 100%;
    flex: 1;
}
.mapbutton {
    height: auto;
    display: flex;
    flex-direction: column;
    /* position: relative; */
}
.icon {
    width: 100%;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 20px;
    position: absolute;
    left: 0;
    /* top: 100px; */
    bottom: 70px;
    z-index: 999;
}
.icon span {
    width: 34px;
    height: 34px;
}
.icon img {
    width: 100%;
    height: 100%;
}
button {
    width: 100%;
    /* height: 43px; */
    /* display: flex; */
    border: none;
    background: #000;
    color: #fff;
    font-size: 20px;
}
</style>
