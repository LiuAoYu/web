<template>
  <div class="hello">
  	<transition name="top">
  		<router-view class="adds"></router-view>
  	</transition>
  	<div class="box" ref="box" :style="myStyle">
			
			<div class="swiper-container" ref="swiper4">
				
				<div class="swiper-wrapper">
					
					<div class="swiper-slide" v-for="(v,i) in str" :key="i">
						
						<img :src="v" @click="small"/>
						
					</div>
					
				</div>
				
			</div>
			
		</div>
	   	<div class="banner_nav">
	   		<!--<vue-tabbar-slide :options="options" @click="navBanner"></vue-tabbar-slide>-->
   			<div class="swiper-container top_nav" ref="swiper1">
   				<div class="swiper-wrapper">
   					<div class="swiper-slide nnn" v-for="(v,i) in arr" :key="i">{{v}}</div>
   				</div>
   			</div>
				<div class="more"><router-link to="/home/child"> +</router-link></div> 
			</div>
		  <div class="wrapper">
		 		<div class="wrap">
		 			<div>
		 				<div class="swiper-container" ref="swiper2">
		 					<div class="swiper-wrapper">
								<div class="swiper-slide" v-for="(v,i) in arr" :key="i">
									<router-link to="/content">
							 			<div class="list">
								 			<div class="item1">
								 				<h1>中共中央政治局召开会议习近平主持会议</h1>
								 				<p>新华网 999评论 刚刚</p>	
								 			</div>
							 			</div>
							 		</router-link>
							 		
									<router-link to="/content">
								 		<div class="list">
									 			<div class="item2">
									 				<div class="left">
									 					<h1>2017款朗逸1.6自动舒适和风尚版，按揭和全款各自落地价多少？</h1>
									 					<p>新华网 999评论 刚刚</p>
									 				</div>
									 				<img src="static/a2.jpg"/>
									 			</div>
								 		</div>
							 		</router-link>
							 		
									<router-link to="/content">
								 		<div class="list">  
									 			<div class="item3">
									 				<div class="top">
									 					<h1>内蒙古十强县区经济汇总：准格尔第三，鄂托克垫底</h1>
									 				</div>
									 				<div class="nav_img">
									 					<img src="static/a5.jpg"/>
									 					<img src="static/a6.jpg"/>
									 					<img src="static/a7.jpg"/>
									 					<img src="static/a8.jpg"/>
									 				</div>
									 			</div>
								 		</div>
							 		</router-link>
							 		
								
							 		
							 		<div class="list">
							 			<h1>精彩小视频 <i class="fa fa-angle-right"></i></h1>
							 			<div class="swiper-container aaa" ref="swiper3">
							 				<div class="swiper-wrapper">
												<div class="swiper-slide" v-for="(v,i) in str" :key="i">
													<img :src="v" @click="big(v)" />
												</div>
											</div>
										</div>
							 		</div>
							 		
							 		<router-link to="/content">
								 		<div class="list">
									 		<div class="item4">
									 			<h1>小米6详细评测 ： 耿直的旗舰之作</h1>
									 			<img src="static/m6.jpg"/>
									 			<p>新华网 999评论 刚刚</p>
									 		</div>
									 	</div>
							 		</router-link>
								 		
								</div>
						 	</div>
						</div>
					</div>
				</div>
			</div>
   </div>
</template>

<script>

import BScroll from 'better-scroll';
import { mapState } from 'vuex';
//import { swiper, swiperSlide } from 'vue-awesome-swiper';   
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css';
import Vue from 'vue';
import vueTabbarSlide from 'vue-tabbar-slide';
Vue.use(vueTabbarSlide)
export default {
  name: 'home',
  data () {
    return {
      msg: '首页',
      index : 0,
      myStyle : null,
      imgs : 'nihao'
    }
  },
   computed : {
		...mapState(['arr','str','arrAdd'])
	},	
  methods : {
//	_initScroll(){
//	  	var scroll = new BScroll('wrap', {
//	  			click : true
//      })
//	  }
			small (){
				this.myStyle = {
					transition : 'all .5s',
					transform:'scale(0.4)'
				}
				setTimeout(()=>{
						this.$refs.box.style.display = 'none';
				},300)
			
//				this.$refs.box.style.top = this.$refs.swiper3.offsetTop + 'px';
				
			},
			big(v){
				this.imgs = v
				this.$refs.box.style.display = 'block';
//				this.$refs.box.style.top = this.$refs.swiper3.offsetTop + 'px';
				this.myStyle = {
					transition : 'all .5s',
					transform :'scale(1)'
				}
			}
  },
  mounted() {
  	
  	
		var swiper1 = new Swiper(this.$refs.swiper1,{
			 	spaceBetween: 10,
			 	watchSlidesVisibility: true,
		  	slidesPerView : 5,
		  	freeMode : true
		})
		var swiper2 = new Swiper(this.$refs.swiper2,{
			spaceBetween: 10,
			thumbs: {
			    swiper: swiper1,
			    slideThumbActiveClass: 'my-slide-thumb-active'
			 }
		})
		
		
  	var swiper3 = new Swiper(this.$refs.swiper3,{
			spaceBetween: 0,
			watchSlidesVisibility: true,
  		slidesPerView : 1.5,
  		freeMode : true
  	})
		var swiper4 = new Swiper(this.$refs.swiper4,{
			spaceBetween: 0,
			thumbs: {
			    swiper4: swiper3
			},
			pagination : '.swiper-pagination', 
			paginationClickable : true, 
			longSwipesRatio: 0.3, 
			touchRatio:1, 
			observer:true,
			observeParents:true
		})
		
	  const scroll = new BScroll('.wrap',{
	  	click : true
	  })
//	  console.log(this.$route.path)
//		setTimeout(() => {
//      this._initScroll()
//   },20)
	  
}
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.hello{
		width: 100%;
		height:100%;
		padding-top:1.25rem;
		padding-bottom:1.40625rem;
		position: relative;
	}
	.box{
		width:100%;
		height:100%;
		position:fixed;
		top: 0rem;
		left: 0rem;
		z-index: 999;
		display: none;
		transform:scale(0.5);
	}
	.box .swiper-container{
		height: 100%;
	}
	.box img{
		width: 100%;
		height: 100%;
	}
	.adds{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0rem;
		left: 0rem;
		background: #fff;
		z-index: 99;
	}
	.adds img{
		width: 6.25rem;
		height: 7.5rem;
	}
	.top_nav{
		width: 95%;
	}
	.banner_nav{
		width: 100%;
		position:absolute;
		background: #eee;
		display: flex;
		z-index: 2;
		font-size: 0.4375rem;
		height: 0.9375rem;
		line-height: 0.9375rem;
	}
	.banner_nav .nnn{
			width: 1.84375rem!important;
			margin-right: 0rem!important;
			text-indent: 0.3125rem;
	}
	.banner_nav .my-slide-thumb-active{
		color: #09a727;
	}
	.more{
		width: 10%;
		text-align: center;
		font-size: 0.5625rem;
		border-left: 0.03125rem solid #ccc;
		color: #333;
	}
	.more a{
		color: #000;
	}
	.wrapper{
		height:100%;
		overflow: hidden;
		padding-top:0.9375rem;
	}
	.wrap{
		width: 100%;
		height:100%;
	}
	
	.list{
		padding:0.15625rem 0.3125rem;
		border-bottom: 0.03125rem solid #ccc;
		color: #000;
	}
	.list h1{
		padding: 0.15625rem 0rem;
	}
	.item1 h1,.top h1,.item4 h1{
		font-size: 0.5rem;
	}
	.item1 p{
		font-size: 0.15625rem;
		color: #999;
	}
	.item2 {
		display: flex;
	}
	.item2 .left{
		width: 60%;
		font-size: 0.4375rem;
	}
	.item2 .left p{
		font-size: 0.15625rem;
		color: #999;
		margin-top: 0.3125rem;
	}
	.item2 img{
		width: 30%;
		height: 1.875rem;
		margin-left: 0.9375rem;
	}
	.nav_img{
		overflow: hidden;
	}
	.nav_img img{
		display: block;
		width: 25%;
		float: left;
	}
	.aaa {
		width: 100%;
		height: 7.5rem;
		
	}
	.aaa img{
		width:100%;
		height: 100%;
	}
	.item4 img{
		width: 100%;
	}
	
</style>
