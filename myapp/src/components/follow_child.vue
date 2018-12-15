<template>
  	<div class="child">
  		<div class="title">
  			<router-link to="/follow"><i class="fa fa-angle-left"></i></router-link>
  			<b>{{name}}</b>
  		</div>
  		<div class="content">
  			<img :src="img"/>
  			<div class="lists">
	  			<div class="list">
	  				<div class="item">
		  				<b>关注</b>
		  				<p>596</p>
	  				</div>
	  				<div class="item">
		  				<b>粉丝数</b>
		  				<p>{{num}}</p>
	  				</div>
	  				<div class="item">
		  				<b>发布数量</b>
		  				<p>356</p>
	  				</div>
	  			</div>
  			<p :style="styleRed" @click="guanZhu"><span v-if="lll">已关注</span><span v-if="!lll">关注</span></p>
  			</div>
  		</div>
  		<div class="intr">
  			<p><b>认证 ：</b> 自由工作者</p>
  			<p><b>地址 ：</b> 河南省郑州市</p>
  			<p><b>签名 ：</b>让我们红尘作伴，活得潇潇洒洒。</p>
  		</div>
  		<div class="subnav">
  			<span v-for="(v,i) in str" @click="btnCuts(i)" :class="{'active' : i == index}">{{v}}</span>
  		</div>
  		
  		<div class="wrapper1">
			<div class="wrap1">
				<div>
					<swiper :options="swiperOption" ref="mySwiper">
						<swiper-slide>
							<div class="content_s" v-for="(v,i) in arr_foll">
								<div class="list_n">
									<img :src="img"/>
									<div class="time">
										<b>{{name}}</b>
										<p>06-21 19:08</p>
									</div>
								</div>
								<div class="list_t">
									<b>阳光明媚，出去走一走！</b>
								</div>
								<div class="list_c">
									<img :src="v"/>
								</div>
								<div class="change">
									<i class="fa fa-comment-o"><span>387</span></i>
									<i class="fa fa-heart-o"><span>999+</span></i>
									<i class="fa fa-share"></i>
								</div>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div class="content_s" v-for="(v,i) in arr_foll">
								<div class="list_n">
									<img :src="img"/>
									<div class="time">
										<b>{{name}}</b>
										<p>06-21 19:08</p>
									</div>
								</div>
								<div class="list_c">
									<img :src="v"/>
								</div>
								<div class="change">
									<i class="fa fa-comment-o"><span>387</span></i>
									<i class="fa fa-heart-o"><span>999+</span></i>
									<i class="fa fa-share"></i>
								</div>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div class="content_s" v-for="(v,i) in arr_foll">
								<div class="list_n">
									<img :src="img"/>
									<div class="time">
										<b>{{name}}</b>
										<p>06-21 19:08</p>
									</div>
								</div>
								<div class="list_c">
									<img :src="v"/>
								</div>
								<div class="change">
									<i class="fa fa-comment-o"><span>387</span></i>
									<i class="fa fa-heart-o"><span>999+</span></i>
									<i class="fa fa-share"></i>
								</div>
							</div>
						</swiper-slide>
					</swiper>	
  				</div>
  			</div>
  		</div>
					
  	</div>
</template>

<script>
import BScroll from 'better-scroll';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
import { mapState } from 'vuex';
export default {
  name: 'follow_child',
  data () {
    return {
    	name : '',
    	img : '',
    	num : '',
    	lll : true,
    	index : 0,
    	str : ['全部','视频','文章'],
    	styleRed : {
			color : '#999',
			background : '#fff',
			border: '0.03125rem solid #aaa'
		},
		swiperOption : {
      	resistanceRatio : 0,
      	autoHeight : true,
      	on : {
	      slideChange : () => {
	      	this.index = this.$refs.mySwiper.swiper.activeIndex
	      }
	    }
      }
    }
  },
  computed : {
    ...mapState(['infor','arr_foll','loadInfor'])
  },
  methods : {
  	
	btnCuts(i){
		this.index = i;
		this.$refs.mySwiper.swiper.slideTo(i);
	},
	guanZhu(){
		this.lll = !this.lll
		if(this.lll){
			this.styleRed.color = '#999'
			this.styleRed.background = '#fff'
			this.styleRed.border = '0.03125rem solid #aaa'
		}else{
			this.styleRed.color = '#fff'
			this.styleRed.background = '#09a727'
			this.styleRed.border = '0.03125rem solid #09a727'
		}
	}
  },
  mounted (){
	const scroll1 = new BScroll('.wrap1',{
		click : true
	})
	this.name = this.loadInfor[this.$route.params.id].name
	this.img = this.loadInfor[this.$route.params.id].img
	this.num = this.loadInfor[this.$route.params.id].num
  },
  components : {
	swiper,
	swiperSlide
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	/*.child{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0rem;
		left: 0rem;
		z-index: 999;
		background: #fff;
		padding-bottom: 7.125rem;
	}*/
	.title{
		width: 100%;
		height: 1.25rem;
		position: relative;
		text-align: center;
		line-height: 1.25rem;
		border-bottom: 0.03125rem solid #ccc;
	  	background: #09a727;
		color: #fff;
	}
	.title b{
		font-size: 0.5rem;
	}
	.title>a>i{
		font-size: 1.0625rem;
		color: #fff;
		position: absolute;
		top: 0rem;
		left: 0.15625rem;
	}
	.content{
		display: flex;
		padding: 0.15625rem;
		border-bottom: 0.03125rem solid #ccc;
	}
	.content img{
		width: 1.875rem;
		height: 1.875rem;
		border-radius: 50%;
	}
	.lists{
		width: 70%;
	}
	.list {
		overflow: hidden;
	}
	.list .item{
		float: left;
		width: 30%;
		text-align: center;
	}
	.lists>p{
		margin-top: 0.3125rem;
		margin-left: 0.625rem;
		text-align: center;
		width: 1.5625rem;
		height: 0.625rem;
		line-height: 0.5625rem;
		border-radius: 0.15625rem;
		text-align: center;
		transition: all .3s;
	}
	.list .item b{
		font-size: 0.4375rem;
	}
	.list .item p{
		color: #999;
	}
	.intr{
		padding: 0.3125rem;
		border-bottom: 0.15625rem solid #ccc;
	}
	.subnav{
		text-align: center;
		padding: 0.3125rem 0rem;
		border-bottom: 0.03125rem solid #ccc;
	}
	.subnav span{
		font-size: 0.4375rem;
		margin: 0rem 0.3125rem;
	}
	.subnav span.active{
		color: #09a727;
	}
	.wrapper1{
		height:100%;
		overflow: hidden;
	}
	.wrap1{
		width: 100%;
		height:100%;
	}
	.list_n{
		display: flex;
		padding: 0.3125rem;
	}
	.list_n img{
		width: 1.25rem;
		height: 1.25rem;
		border-radius: 50%;
	}
	.list_n .time{
		margin-left: 0.625rem;
	}
	.list_n .time p{
		color: #999;
		margin-top: 0.15625rem;
	}
	.list_t{
		font-size: 0.4375rem;
		padding:0rem 0.3125rem;
		margin-bottom: 0.15625rem;
	}
	.list_c {
		height: 6.25rem;
	}
	.list_c img{
		width: 100%;
		height: 100%;
	}
	.change{
		text-align: center;
		
		height: 1.25rem;
		line-height: 1.25rem;
		border-bottom:0.09375rem solid #ccc ;
	}
	.change i{
		font-size: 0.5rem;
		margin:0rem 0.9375rem;
	}
	.change i span{
		font-size: 0.375rem;
	}
</style>
