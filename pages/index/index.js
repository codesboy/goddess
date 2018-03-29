//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        codes:'',
        tpl:'大坏蛋撒旦撒谎就dsasd'
    },

    onShow: function () {
        this.setData({
            codes:''
        })
        var n=0;
        clearInterval(timer)
        var timer = setInterval(()=>{
            this.setData({
                codes: this.data.tpl.substring(0, n)
            })
            n++;
            console.log(this.data.codes)
            if (this.data.codes == this.data.tpl) {
                clearInterval(timer)
            }
        },100)
        
    },

    print(){

    }
})
