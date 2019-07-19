<template>
    <div class="wrap">
        <header>
            <div class="avatar">
                <img src="/static/images/my.png" lazy-load="false" />
            </div>
            <!-- <p>{{formatPhone}}</p> -->
            <p>{{iphone&&iphone}}</p>
        </header>
        <ul>
            <li @click="goList">
                <icon type="waiting" size="18px" />
                <span>我的面试</span>
                <img src="/static/images/arrow.svg" />
            </li>
            <button open-type="contact" class="concat">
                <icon type="info" size="18px" />
                <span>客服中心</span>
                <img src="/static/images/arrow.svg" />
            </button>
        </ul>
        <div class="phone" v-if="!showPhoneDialog" >
            <button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">需要获取手机号码</button>
        </div>
    </div>
</template>

<script>
import { getLocation, getAuth } from "@/utils/index.js";
import { mapState, mapMutations, mapActions } from "vuex";
import {decrypt} from '@/api/index'
export default {
    data() {
        return {
            showPhoneDialog: false,
            iphone: 0
        };
    },
    methods: {
        //跳转到list页面
        goList() {
            wx.navigateTo({
            url: "/pages/list/main"
            });
        },
        async getPhoneNumber(e) {
            // console.log('e',e,e.target)
            if(e.target.errMasg!='getPhoneNumber:fail user deny'){
              // 授权成功
              console.log(e.target)
              let data=await decrypt({
                encryptedData:e.target.encryptedData,
                iv:e.target.iv
              })
                this.iphone=data.data.phoneNumber
                this.showPhoneDialog = true;
                console.log(this.iphone)
                var a=this.iphone.splice(0,1,222)
                console.log(a)

            }else{
              // this.showSetting=true
            }
        }
    },
    created() {
        // var that = this;
        // //获取授权状态
        // wx.getSetting({
        //     success(res) {
        //         console.log("auth", res.authSetting);
        //         if (res.authSetting["scope.userInfo"]) {
        //             // 用户已经授权
        //             wx.getUserInfo({
        //                 withCredentials: true,
        //                 success(res) {
        //                     //调用api获取用户信息
        //                     that.showPhoneDialog = true;
        //                     console.log("授权", res);
        //                     console.log(that.showPhoneDialog);
        //                 }
        //             });
        //         } else {
        //             //没有授权
        //             that.showPhoneDialog=false
        //         }
        //         // that.iphone = res.data.phone;
        //         // console.log(that.iphone);
        //     }
        // });
    }
    // mounted() {
    //     var that = this;
    //     wx.getStorage({
    //         key: "use",
    //         success(res) {
    //             // console.log(res.data);
    //             that.iphone = res.data.phone;
    //             // console.log(that.iphone);
    //         }
    //     });
    // }
};
</script>

<style lang="scss" scoped>
header {
    background: #f4f6f9;
    width: 100%;
    height: 350rpx;
    box-sizing: border-box;
    padding: 50rpx 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    .avatar {
        width: 100rpx;
        height: 100rpx;
        background: #fff;
        text-align: center;
        padding: 20rpx;
        border-radius: 50%;
    }
    image {
        width: 90%;
        height: 90%;
    }
}
.phone {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
        border-top-left-radius: 20rpx;
        border-top-right-radius: 20rpx;
        width: 70%;
        background: #fff;
        padding: 20rpx 15rpx;
        line-height: 1.5;
        font-size: 34rpx;
        box-sizing: border-box;
    }
    button {
        width: 70%;
        background: #197dbf;
        color: #fff;
        border-bottom-left-radius: 20rpx;
        border-bottom-right-radius: 20rpx;
    }
}
li,
button.concat {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 30rpx 40rpx;
    border-bottom: 1rpx solid #eee;
    span:nth-child(2) {
        flex: 1;
        margin-left: 40rpx;
        color: #666;
        font-size: 36rpx;
        background: transparent;
        text-align: left;
    }
    image {
        width: 40rpx;
        height: 40rpx;
    }
}
</style>
