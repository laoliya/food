<template>
    <div class="menuLeft" v-if="list[0]">
        <div class="title_box">
            <b>食谱</b>
            <span>{{list[0].mname}}</span>
        </div>
        <div class="metu_img" v-if="list[0].video==null">
            <img :src="'https://www.wz2018.top:3001/img/'+list[0].img" alt="">
        </div>
        <div class="metu_img" v-if="list[0].video">
            <video :src="'https://www.wz2018.top:3001/'+list[0].video" controls></video>
        </div>
        <div class="metu_name">
            <h1>{{list[0].mname}}</h1>
            <div class="detail_option">
                <div class="option_left">
                    <i class="iconfont icon-ai254"></i><span>{{list[0].degree}}</span>
                    <i class="iconfont icon-meishi"></i><span>{{list[0].time}}分钟</span>
                    <i class="iconfont icon-cup"></i><span>{{list[0].taste}}</span>
                </div>
                <div class="option_right" @click="collect">
                    <i class="iconfont icon-shoucang col_icon"></i><span class="col_txt">点击收藏</span>
                </div>
            </div>
        </div>
        <div class="metu_sub">
            <p>{{list[0].subtitle}}</p>
        </div>
        <metuFoods :mid="mid"></metuFoods>
        <metuSteps :mid="mid"></metuSteps>
        <div class="metuTips">
            <h1>小贴士</h1>
            <p>{{list[0].tips}}</p>
        </div>
    </div>
</template>
<script>
import metuFoods from '@/components/detail/metuFoods.vue';
import metuSteps from '@/components/detail/metuSteps.vue';
import $ from 'jquery'
export default {
    components:{metuFoods,metuSteps},
    props:{mid:""},
    data(){
        return{
            list:[],
            msg:""
        }
    },
    props:{
        mid:""
    },
    created(){
        this.loadTitle();
    },
    methods:{
        loadTitle(){
            this.axios.get("menuDetail/getTitle",{params:{mid:this.mid}}).then((result)=>{
                this.list=result.data.data;
            })
        },
        collect(){
            var colIcon=$(".col_icon");
            var colText=$(".col_txt");
            if(colIcon.hasClass("icon-shoucang1")){
                colIcon.removeClass("icon-shoucang1");
                colText.text("点击收藏");
                this.msg="reduce";
            }else{
                colIcon.addClass("icon-shoucang1");
                colText.text("取消收藏");
                this.msg="add";
            }
            this.axios.get("menuDetail/setCollect",{params:{mid:this.mid,msg:this.msg}}).then((result)=>{
                console.log(result)
            })
        }
    },
    
}
</script>
<style scoped>
    .menuLeft{width:70%}
    .title_box{margin:40px 0;}
    .title_box b{color:#ff2e64;margin-right: 10px;font-size:1rem;font-weight: bold;}
    .metu_img{width:100%;}
    .metu_img img{width:100%}
    .metu_img video{width:100%}
    .metu_name h1{font-size: 1.5rem;font-weight:600;margin:30px 0 15px;}
    .detail_option{display: flex;justify-content: space-between;margin-bottom: 30px;}
    .metu_sub{padding:30px 0;border-top:1px solid #eee;border-bottom:1px solid #eee;}
    .metu_sub p{line-height: 25px;}
    .option_left i{font-size: 30px;}
    .option_left{display: flex;}
    .option_left span,.option_right span{height:30px;line-height: 30px;margin-right: 15px;}
    .option_right span{margin-right: 0;cursor: pointer;}
    .option_right i{font-size:20px;margin-right:5px;}
    .metuTips h1{font-size: 1.25rem;padding:25px 0 20px;font-weight: 600;}
    .metuTips p{line-height: 30px;}
    .col_icon{color:#ff2e64;}
</style>
