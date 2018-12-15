<template>
  	<div class="hello">
		  	<div class="title">
		  		<router-link to="/success"><p>登录</p></router-link>
		  	</div>
		  	
			
			<div class="setups">
	  			<div class="st_list">
	  				<span class="st_left">我的收藏</span>
	  				<span class="st_right"><i class="fa fa-angle-right"></i></span>
	  			</div>
	  			<div class="st_list">
	  				<span class="st_left">我的评论</span>
	  				<span class="st_right"><i class="fa fa-angle-right"></i></span>
	  			</div>
	  			<div class="st_list">
	  				<span class="st_left">我的点赞</span>
	  				<span class="st_right"><i class="fa fa-angle-right"></i></span>
	  			</div>
	  			<div class="st_list">
	  				<span class="st_left">历史记录</span>
	  				<span class="st_right"><i class="fa fa-angle-right"></i></span>
	  			</div>
	  			<div class="st_list">
	  				<span class="st_left">阅读时间</span>
	  				<span class="st_right"><i class="fa fa-angle-right"></i></span>
	  			</div>
	  			<div class="st_list">
	  				<span class="st_left">我的评论</span>
	  				<span class="st_right"><i class="fa fa-angle-right"></i></span>
	  			</div>
	  			<div class="st_list">
	  				<span class="st_left">我的点赞</span>
	  				<span class="st_right"><i class="fa fa-angle-right"></i></span>
	  			</div>
	  			<div class="st_list">
	  				<span class="st_left">阅读时间</span>
	  				<span class="st_right"><i class="fa fa-angle-right"></i></span>
	  			</div>
	  		</div>
	  		<div class="icon">
	  			<span>更多登录</span>
	  			<p><i class="fa fa-qq"></i></p>
				<p><i class="fa fa-weixin"></i></p>
				<p><i class="fa fa-weibo"></i></p>
			</div>
		<transition name="left">
			<router-view class="childs"></router-view>
		</transition>
		
	  </div>
	  
</template>

<script>
//	import BScroll from 'better-scroll';
export default {
	name: 'login',
  data () {
    return {
      msg: '登录',
      isShowHeader : false
    }
  },
  methods : {
  	
  },
  mounted (){
//	const scroll = new BScroll('.wrap')
	if(localStorage.user){
		this.isShowHeader = true
		this.user = JSON.parse(localStorage.user);
		console.log(this.user.user)
	}else{
		this.isShowHeader = false
	}
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
		background: #fff;
		z-index: 999;
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
	.title{
		width: 100%;
		background: #fff;
		font-size: 0.5625rem;
		position: relative;
		z-index: 99;
		padding: 0.9375rem 0rem;
		border-bottom: 0.09375rem solid #ccc;
	}
	.title p{
		width: 2.5rem;
		height: 2.5rem;
		margin: auto;
		color: #fff;
		border-radius: 50%;
		background: #09a727;
		text-align: center;
		line-height: 2.5rem;
	}
	.icon{
		text-align: right;
		padding: 0.3125rem 0rem;
		color: #666;
	}
	.icon p{
		display: inline-block;
		width: 0.9375rem;
		height: 0.9375rem;
		border-radius: 50%;
		text-align: center;
		line-height: 0.9375rem;
		background: #ccc;	
	}
	.icon i{
		font-size: 0.4375rem;
		margin: 0.15625rem;
	}
	/*.st_title{
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
	}*/
</style>
