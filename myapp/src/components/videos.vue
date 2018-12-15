<template>
  <div class="hello">
  		<div class="cover" :style="styleCover">
  			<p>猜你喜欢 <i></i></p>
  			<div class="cover_list">
  				<ul>
  					<li>周杰伦新歌2017</li>
  					<li>郭德纲中南海视频</li>
  					<li>老师西游记解说</li>
  					<li>联通29元无限流量套餐</li>
  					<li>苹果发布会</li>
  					<li>红烧牛肉的做法</li>
  					<li>小学寒假放假时间</li>
  					<li>王者荣耀新英雄</li>
  					<li>孙杨夺冠</li>
  					<li>教育改革</li>
  				</ul>
  			</div>
  			<p>搜索记录</p>
  			<div class="cover_list">
  				<ul>
  					<li>联通29元无限流量套餐</li>
  					<li>王者荣耀新英雄</li>
  					<li>孙杨夺冠</li>
  					<li>苹果发布会</li>
  				</ul>
  			</div>
  		</div>
  		<div class="title">
  			
	   		<input type="text" placeholder="请输入搜索内容" @focus="change" @blur="changeOut" :style="styleInput" />
	   	<i class="fa fa-search"></i>
	   	<span v-if="flag">搜索</span>
	   	</div>
	   	<div class="nav_title">
	   			<span v-for="(v,i) in arr" @click="btnCut(i)" :class="{'active' : i == index}">{{v}}</span>
	   	</div>
	   	
		   	<div class="wrapper">
		 		<div class="wrap">
		 			<div>
		 			
		 				<swiper :options="swiperOption" ref="mySwiper">
		 					<swiper-slide v-for="(row,index) in v_lists" :key="index">
		 						<div class="content">
			 					<div class="list" v-for="(v,i) in row.v_list" :key="i">
			 						<div class="img">
			 							<div class="start">
			 								<i class="fa fa-play"></i>
			 							</div>
			 							<img :src="v.img_B"/>
			 						</div>
			 						<div class="item">
		 								<img :src="v.img"/>
		 								<span>{{v.name}}</span><span class="follow">关注</span>
			 							<i class="fa fa-heart-o">{{v.spot}}</i>
			 						<router-link :to="{name : 'videos_child',params : {id : v.id}}"><p class="comment"><i class="fa fa-comment-o">{{v.com}}</i>…</p></router-link>
			 						
			 						</div>
			 					</div>
		 				</div>
		 					</swiper-slide>
		 				</swiper>
		 				
		 			
		 			</div>
				</div>
			</div>
			<transition name="left">
					<router-view class="childs"></router-view>
			</transition>
   	
  </div>
   
</template>

<script>
import BScroll from 'better-scroll';
import { mapState } from 'vuex';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
export default {
  name: 'videos',
  data () {
    return {
      msg: '视频',
      swiperOption : {
      	resistanceRatio : 0,
      	autoHeight : true,
      	 on : {
				      slideChange : () => {
				      	this.index = this.$refs.mySwiper.swiper.activeIndex
				      }
				    }
      },
      arr : ['推荐','最新','热门'],	
      index : 0,
      flag : false,
      styleInput : {
      	width : '100%'
      },
      styleCover : {
      	top : '100%'
      }
    }
  },
   computed : {
		...mapState(['v_lists'])
	},	
  methods : {
  		btnCut (i){
				this.index = i;
				this.$refs.mySwiper.swiper.slideTo(i);
			},
			change (){
				this.styleInput.width = '85%'
				this.flag = true;
				this.styleCover.top = '1.25rem'
			},
  		changeOut (){
  			this.styleInput.width = '100%'
  			this.flag = false
  			this.styleCover.top = '100%'
  		}
  },
	mounted (){
				const scroll = new BScroll('.wrap',{
					click : true
				})
				
	},
	components : {
  	swiper,
  	swiperSlide
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.childs{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0rem;
		left: 0rem;
		z-index: 999;
		background: #fff;
		padding-bottom: 2.5rem;
	}
	.left-enter{
		left: 100%;
	}
	.left-to{
		left: 0rem;
	}
	.left-enter-active,
	.left-leave-active{
		transition: left .5s;
	}
	.left-leave{
		left: 0rem;
	}
	.left-leave-to{
		left: 100%;
	}
	.cover{
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0rem;
		background: #fff;
		z-index: 99;
		transition: all .3s;
	}
	.cover p{
		border-bottom: 0.03125rem solid #ccc;
		line-height: 1.25rem;
		text-indent: 0.625rem;
		color: #999;
	}
	.cover_list{
		width: 100%;
	}
	.cover_list ul{
		overflow: hidden;
		width: 100%;
	}
	.cover_list ul li{
		float: left;
		width: 50%;
		border-bottom: 0.03125rem solid #ccc;
		text-indent: 0.625rem;
		line-height: 1.125rem;
	}
	.cover_list ul li:nth-child(2n+1){
		border-right: 0.03125rem solid #ccc;
	}
	.nav_title{
		width: 100%;
		text-align: center;
		line-height: 0.9375rem;
		font-size: 0.5625rem;
		background: #09a727;
		color: #fff;
		border-top:0.03125rem dotted #fff;
		position: relative;
		z-index: 9;
	}
	.nav_title span{
		margin: 0rem 0.15625rem;
	}
		.nav_title .active{
				color: greenyellow;
		}
		.title{
		width: 100%;
		overflow: hidden;
		padding: 0.15625rem 0.625rem 0rem 0.625rem;
		background: #09a727;
		position: relative;
		height: 1.25rem;
		z-index: 99;
	}
	.title input{
		height:0.9375rem;
		border: 0.03125rem solid #ccc;
		text-indent: 0.9375rem;
		transition: all .3s;
	}
	.title span{
		height: 100%;
		line-height: 0.9375rem;
		font-size: 0.5rem;
		float: right;
		color: #fff;
	}
	.title i{
		color: #666;
		font-size: 0.4375rem;
		position: absolute;
		top:0.375rem;
		left: 0.9375rem;
	}
	.hello{
		width: 100%;
		height:100%;
		padding-bottom:2.5rem;
		position: relative;
	}
	.wrapper{
		height:100%;
		padding-bottom:1.25rem;
		overflow: hidden;
	}
	.wrap {
		width: 100%;
		height:100%;
	}
	.content{
		width: 100%;
	}
	.list{
		width: 100%;
	}
	.list .img{
		width: 100%;
		height: 5rem;
		position: relative;
	}
	.list .img img{
		width: 100%;
		height: 100%;
	}
	.item{
		padding:0.15625rem 0.3125rem;
		font-size: 0.4375rem;
	}
	.follow{
		font-size: 0.375rem;
		color: red;
		margin:0rem 0.15625rem ;
		padding-left: 0.15625rem;
		border-left: 0.03125rem solid #ccc;
	}
	.comment{
		float: right;
		margin-top: 0.15625rem;
	}
	.comment i{
		margin: 0rem 0.15625rem;
		color: #000;
	}
	.start{
		width: 1.25rem;
		height: 1.25rem;
		border-radius: 50%;
		background-color: rgba(0,0,0,0.5);
		text-align: center;
		line-height: 1.25rem;
		font-size: 0.5rem;
		color: #fff;
		position: absolute;
		top: 1.875rem;
		left: 50%;
		margin-left: -0.625rem;
	}
	.item img{
		width: 0.9375rem;
		height: 0.9375rem;
		border-radius: 50%;
		vertical-align: middle;
	}
</style>
