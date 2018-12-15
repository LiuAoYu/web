<template>
  	<div class="register">
  		<div class="title">
	  		<router-link to="/success"><i class="fa fa-angle-left"></i><span>返回</span></router-link>
	  	</div>
	  	<div class="content">
	  		<div class="tou">
	  			<span>用户注册</span>
	  		</div>
  			<p><span>手机号：</span><input type="text" placeholder="请输入手机号" /></p>
  			<p><span>密码：</span><input type="password" placeholder="6-12位的数字与英文字母组成" /></p>
  			<p><span>确认密码：</span><input type="password" placeholder="6-12位的数字与英文字母组成" /></p>
  			<p class="yan"><span>短信验证码：</span><input type="text" placeholder="请输入验证码" /><button>获取</button></p>
  			
  			<div class="btn"><button>完成</button></div>
  		</div>
  	</div>
</template>

<script>
//	import BScroll from 'better-scroll';
export default {
  name: 'register',
  data () {
    return {
    	
    }
  }
//mounted (){
//			const scroll = new BScroll('.wrap')
//}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	
	.title{
		width: 100%;
		height: 1.25rem;
		display: flex;
		font-size: 0.625rem;
		line-height: 1.25rem;
		background: #09a727;
		color: #fff;
	}
	.title a{
		font-size: 0.9375rem;
		color: #fff;
		line-height: 0.9375rem;
		padding-left:0.15625rem ;
	}
	.title a i{
		margin-right: 0.09375rem;
		vertical-align: middle;
	}
	.title a span{
		font-size: 0.625rem;
	}
	.content{
		width: 100%;
		height: 100%;
		background: url('../../static/bg_morning.jpg')no-repeat;
   		background-size: 100% 100%;
	}
	.tou{
		width: 100%;
		font-size: 0.9375rem;
		text-align: center;
		color: #09a727;
		line-height: 3.125rem;
	}
	.tou span{
		text-shadow: 0.09375rem 0.09375rem 0.09375rem #aaa;
	}
	.content p{
		width: 100%;
		display: flex;
		margin-bottom: 0.15625rem;
	}
	
	.content .get{
		width: 100%;
		padding: 0rem 0.9375rem;
		overflow: hidden;
	}
	.content p span{
		width: 30%;
		display: inline-block;
		text-align: right;
		font-size: 0.4375rem;
		color: #09a727;
		line-height: 0.9375rem;
	}
	.content p input{
		width:66%;
		height: 0.9375rem;
		border: 0.03125rem solid #fff;
		text-indent: 0.625rem;
		background-color: rgba(255,255,255,0.5);
		border-radius: 0.15625rem;
	}
	.content .yan input{
		width: 46%;
		border-top-right-radius: 0rem;
		border-bottom-right-radius: 0rem;
	}
	.content .yan button{
		width: 20%;
		line-height: 0.75rem;
		border: 0.03125rem solid #fff;
		color: #666;
		background-color: rgba(255,255,255,0.5);
		border-left-color: #ccc;
		border-top-right-radius: 0.15625rem;
		border-bottom-right-radius: 0.15625rem;
	}
	
	.btn {
		text-align: center;
	}
	.btn button{
		width: 94%;
		height: 1.25rem;
		background-color: #09a727;
		border-color: transparent;
		color: #fff;
		border-radius: 0.09375rem;
		font-size: 0.625rem;
		margin-top: 0.625rem;
	}
</style>
