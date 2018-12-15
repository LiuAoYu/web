<template>
	<div class="myapp">
		<div class="adv" :style="styleAdv">
			<p><span><i class="fa fa-angle-left" @click="ret"></i></span><span>广告设置</span></p>
		</div>
		<div class="popup" @click="cacheH" v-if="flag_P">
		  	<div class="select">
		  		<p>提示</p>
		  		<p>确定要清除所有缓存吗？</p>
		  		<span>取消</span><span @click="clear">确认</span>
		  	</div>
		 </div>
	  <div id="app" :style="myStyle">
	    <div class="main">
    	 	<div class="myleft">
		  		<div class="con">
			  		<h1>下午好</h1>
			  		<p>一杯茶，一辈子！</p>
			  		<a href="">头条娱乐</a>
			  		<a href="">往期头条</a>
			  		<a href="">48小时热门</a>
			  		<a href="">趣图</a>
			  		<a href="">段子</a>
		  		</div>
	  		</div>
		  	<div class="myright">
		  		
		  		<div class="setup">
		  			<div class="st_title">设置</div>
		  			<div class="st_list" @click="cache">
		  				<span class="st_left">清除缓存</span>
		  				<span class="st_right">{{clearC}}</span>
		  			</div>
		  			<div class="st_list">
		  				<span class="st_left">提示音开关</span>
		  				<home-demo :collection="true"></home-demo>
		  			</div>
		  			<div class="st_list" @click="adv">
		  				<span class="st_left">广告设置</span>
		  				<span class="st_right"><i class="fa fa-angle-right"></i></span>
		  			</div>
		  			<div class="st_list">
		  				<span class="st_left">推送通知</span>
						<home-demo :collection="true"></home-demo>
		  			</div>
		  			<div class="st_list">
		  				<span class="st_left">夜间模式</span>
		  				<home-demo :collection="false"></home-demo>
		  			</div>
		  		</div>
		  	</div>
	  	  	<div class="mymask" @click="homing" v-if="ooo"></div>
    		<div class="header">
  				<img src="static/www.png" @click="myleft"/>
  				<h1>头条<i class="fa fa-undo"></i></h1>
  				<p><i class="fa fa-cog" @click="myright"></i></p>
		   	</div>
	    	<router-view/>
	    	
	    </div>
	    
	    <div class="nav">
	    	<ul>
	    		<li v-for="i in nav"><router-link :to="i.link"><i class="fa" :class="i.icon"></i>{{i.title}}</router-link></li>
	    	</ul>
	    </div>
	    
	  </div>
	  
  </div>     
</template>

<script>
import BScroll from 'better-scroll';
import 'swiper/dist/css/swiper.css';
import Vue from 'vue';
import vueTabbarSlide from 'vue-tabbar-slide';
import homeDemo from '@/components/home_demo.vue';
Vue.use(vueTabbarSlide)
export default {
  name : 'App',
  data (){
  	return {
  		nav : [{
				link : '/home',
				title : '首页',
				icon : 'fa-home'
			},{
				link : '/videos',
				title : '视频',
				icon : 'fa-list'
			},{
				link : '/follow',
				title : '关注',
				icon : 'fa-star'
			},{
				link : '/login',
				title : '我的',
				icon : 'fa-user'
			}],
			clearC : '159.36KB',
			myStyle : {
		      	transform : 'translate3d(0,0,0)'
		      },
			ooo : false,
			
			styleAdv : {
				left : '100%'
			},
			flag_P : false 
  	}
  },
  methods : {
  	myright(){
  		this.ooo = !this.ooo;
  		if(this.ooo){
  			this.myStyle.transform = 'translate3d(-80%,0,0)'
  		}else{
  			this.myStyle.transform = 'translate3d(0,0,0)'
  		}
  	},
  	myleft (){
  		this.ooo = !this.ooo;
  		if(this.ooo){
  			this.myStyle.transform = 'translate3d(80%,0,0)';
  		}else{
  			this.myStyle.transform = 'translate3d(0,0,0)';
  		}
  	},
  	homing (){
  		this.ooo = false;
  		this.myStyle.transform = 'translate3d(0,0,0)';
  		this.styleAdv.left = '100%';
  	},
  	adv(){
  		this.styleAdv.left = '20%';
  	},
  	ret(){
  		this.styleAdv.left = '100%';
  	},
  	cache(){
  		this.flag_P = true
  	},
  	cacheH(){
  		this.flag_P = false
  	},
  	clear(){
  		this.clearC = '0KB'
  	}
  },
  mounted (){
  	
  },
  components : {
	homeDemo
  }
}
</script>

<style>
	*{
		box-sizing: border-box;
	}
	.main{
		width: 100%;
		height:100%;
	}
	#app{
		width: 100%;
		height: 100%;
		transition: all .3s;
		position: relative;
	}
	#app .nav{
		width: 100%;
		font-size: 0.4rem;
		position: absolute;
		bottom: 0;
		left: 0;
	}
	.nav ul{
		display: flex;
		justify-content:space-around;
		padding: 0.15625rem 0rem;
		background: #eee;
	}
	.nav ul li a{
		display: flex;
		flex-direction:column;
		text-align: center;
		color: #666;
	}
	.nav ul li a i{
		font-size: 0.5625rem;
	}
	.nav ul li .router-link-active{
		color: #09a727;
	}
	a:hover{
		text-decoration: none!important;
	}
	.header{
		width: 100%;
		height:1.25rem;
		display: flex;
		justify-content:space-around;
		overflow: hidden;
		position:absolute;
		top:0;
		left:0;
		padding: 0.15625rem;
		box-sizing: border-box;
		background: #09a727;
		color: #fff;
		z-index:9;
	}
	.header img{
		width: 0.75rem;
		height: 0.75rem;
	}
	.header h1{
		font-size: 0.5625rem;
		font-weight: bold;
		width: 80%;
		text-align: center;
	}
	.header h1 i{
		font-size: 0.4375rem;
		margin-left: 0.15625rem;
	}
	.header p i{
		font-size: 0.625rem;
	}
	.myapp{
		width: 100%;
		height: 100%;
		position: relative;
		overflow: hidden;
	}
	.adv{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0rem;
		transition: all .3s;
		background: #fff;
		z-index: 99;
	}
	.adv p{
		border-bottom: 0.03125rem solid #ccc;
		padding: 0.15625rem 0.3125rem;
	}
	.adv p span i{
		font-size: 0.9375rem;

	}
	.adv p span{
		vertical-align: middle;
		display: inline-block;
		text-align: center;
		font-size: 0.5625rem;
		margin-right: 0.3125rem;
	}
	.myleft{
		width: 100%;
		height: 100%;
		background: url('../static/bg_morning.jpg')no-repeat;
		background-size: 100% 100%;
		position: absolute;
		top: 0rem;
		right: 100%;
	}
	.con{
		margin-left: 20%;
		padding: 0.3125rem;
		color: #fff;
	}
	.con h1{
		font-size: 0.5rem;
	}
	.con p{
		font-size: 0.4375rem;
		margin-bottom: 0.625rem;
	}
	.con a{
		display: block;
		color: #09a727;
		width: 100%;
		font-size: 0.4375rem;
		height: 1.125rem;
		background: rgba(255,255,255,0.2);
		border: 0.03125rem solid #fff;
		line-height: 1.125rem;
		text-indent: 0.625rem;
	}
	.myright{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0rem;
		left: 100%;
	}
	.popup{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0rem;
		left: 0rem;
		background: rgba(0,0,0,0.3);
		z-index: 9999;
	}
	.select{
		width: 6.25rem;
		height: 3.75rem;
		margin:6.25rem auto 0rem;
		background: #fff;
		padding: 0.46875rem;
	}
	.select p{
		margin-bottom: 0.625rem;
	}
	.select span{
		float: right;
		color: #09a727;
		margin:0rem 0.3125rem;
	}
	.setup{
		margin-right: 20%;
	
	}
	.st_title{
		text-align: center;
		font-size: 0.5625rem;
		height: 1.25rem;
		line-height: 1.25rem;
		border-bottom:0.03125rem solid #ccc ;
	}
	.st_list{
		height: 1.25rem;
		padding:0.15625rem 0.3125rem;
		border-bottom:0.03125rem solid #ccc;
		overflow: hidden;
		line-height: 0.875rem;
	}
	.st_left{
		float: left;
		font-size: 0.5rem;
	}
	.st_right{
		float: right;
		color: #666;
	}
	.st_right i{
		font-size: 0.9375rem;
	}
	.mymask{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0rem;
		left: 0rem;
		z-index: 999;
	}
</style>
