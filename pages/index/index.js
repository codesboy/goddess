//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        codes:'',
        tpl:'长青王子拿着宝剑跪在她的床前说：“如果你死了，我就立刻随你而去，永远和你在一起”，珠儿含着眼泪，笑了笑，在她的灵魂即将出壳的时候，佛祖出现了，珠儿哭着对佛祖说：“既然你为我和甘鹿安排了这段姻缘，为什么你不让我们在一起？”佛祖笑着说：“你错了，长春王子才是我为你安排的姻缘”，珠儿吃惊的问:“为什么”？佛祖说：“你一直认为应该和甘鹿在一起，因为和他相守了一千年，其实把甘露带到网上的是风，把他带走的也是风，所以和甘露在一起的一直是风，理应风和甘露在一起，风就是长风公主，长春王子就是你网下的一颗小草，已经默默的守护了你三千年，只是你不知道而已……你应该和长青王子在一起。”珠儿：“我明白了，世界上最珍贵的不是得不到和已失去的，而是珍惜眼前的幸福，”佛祖笑了笑。珠儿醒来后，长春王子扔掉宝剑，握住她的手，说：“太好了，我真的很怕失去你……”珠儿：“我会好好珍惜这份失而复得的感情的……”从此，他们幸福的生活在一起。'
    },

    onLoad: function () {
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
