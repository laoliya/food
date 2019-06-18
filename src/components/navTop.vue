<template>
    <!-- header start-->
    <div class="header">
        <div class="header_second">
            <div>
                <img src="../assets/logo.png" class="img w-100">
            </div>
            <div class="word">
                <ul class="header_ul">
                    <li><router-link to="/">首页</router-link></li>
                    <li><router-link to="/menuList" target="_blank">一日三餐</router-link></li>
                    <li><router-link to="/">瘦身食谱</router-link></li>
                    <li><router-link to="/">瘦身日记</router-link></li>
                    <li><router-link to="/">明星食谱</router-link></li>
                    <li><router-link to="/">瘦身课堂</router-link></li>
                    <li>
                        <el-button type="text" size="medium" @click="centerDialogVisible = true" @close="myclose" :myclose="myclose">登录/注册</el-button>
                    </li>
                    <li>
                        <el-button type="text" size="medium"></el-button>
                    </li>
                </ul>
            </div>
        </div>
        <login :centerDialogVisible="centerDialogVisible"></login>
        <!-- 手机端导航开始 -->
        <div class="phone_nav_box">
            <div class="phone_nav_top">
                <div class="logo">
                    <a href="#"><img src="../assets/logo.png" alt=""/></a>
                </div>
                <div class="phone_nav_btn" @click="openNav">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div class="phone_nav">
                <ul>
                    <li><a href="index.html">首页</a></li>
                    <li><a href="">一日三餐</a></li>
                    <li><a href="">瘦身食谱</a></li>
                    <li><a href="">瘦身日记</a></li>
                    <li><a href="">明星食谱</a></li>
                    <li><a href="">瘦身课堂</a></li>
                </ul>
            </div>
        </div>
        <!-- 手机端导航结束 -->
        
    </div>
    <!-- header end --> 
</template>
<script>
import $ from 'jquery'
import login from '@/views/login.vue'
export default {
    data(){
        return{
            centerDialogVisible:false,
            uname:""
        }
    },
    components:{login},
    mounted(){
        window.addEventListener("scroll",this.changeColor)
    },
    methods:{
        changeColor(){
            //获取屏幕滚动的高度
            var top=document.documentElement.scrollTop;
            //获取需要改变的元素：导航栏
            var header=document.querySelector(".header");
            if(top>600){
                header.style.backgroundColor="rgba(0,0,0,0.4)";
            }else{
                header.style.background="linear-gradient(-180deg,rgba(0,0,0,.2),transparent)";
            }
        },
        openNav(){
            $(".phone_nav").fadeToggle();
        },
        // 作为父组件关闭登录或者注册对话框
        myclose(){
            this.centerDialogVisible=false;
        },
        // 页面加载时判断是否登录
        isLogin(){
            
        }
    }
}
</script>
<style>
/* header样式 */
.header{position: fixed;top:0;z-index: 99999;width: 100%;background:linear-gradient(-180deg,rgba(0,0,0,.2),transparent);display: flex;background-clip: padding-box;;}
.header_second{position: relative;display: flex;font-size:17px;max-width: 1100px;width:80%;margin: 0 auto;justify-content: space-between;}
.img{margin-top:20px;}
.header_ul>li{list-style-type: none;float: left;padding:0 10px;height:80px;line-height: 80px;color: #fff;}
.header_ul li a{color: #fff;text-decoration: none;font-size: 1rem;}
.header_ul li a:hover{color:#ff2e64;}
.phone_nav_box{display:none;background: rgba(0,0,0,0.8);width:100%}
.phone_nav_btn{margin-top:15px;}
.phone_nav_btn span{width:35px;height:4px;background: #fff;border-radius: 2px;display: block;margin-top:5px;}
.phone_nav{position: absolute;width:100%;left:0;display:none;}
.phone_nav ul{background:rgba(0,0,0,0.8);}
.phone_nav ul li a{width:80%;display:block;border-bottom:1px solid #333;border-top:1px solid #666;color:#ccc;font-size: 0.9rem;height:50px;line-height: 50px;margin:0 auto;}
.phone_nav_top{display: flex;justify-content: space-between;width:80%;margin:0 auto;}
.logo img{margin-top:10px;}
.el-button--text{color:#fff !important;}
.el-button--medium{font-size: 1rem !important;}
.el-button--text:hover{color:#ff2e64 !important;}
@media (max-width:960px){
    .header_second{display: none;}
	.logo{height:60px;line-height: 60px;}
	.logo img{height:40px;width:auto;}
	.nav_height{height:65px;}
	.phone_nav_box{display:block;}
}
/* header end */
</style>
