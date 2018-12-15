<template>
  		
	<div class="forget">
		<div class="title">
			<router-link to="/success"><i class="fa fa-angle-left"></i></router-link><span>忘记密码</span>
  		</div>
  		
  		<div class="content">
  			 <div class="logo">
			  	<img src="../../static/logo_qq.png" >
			  	<img src="../../static/logo_sinaweibo.png" >
			  	<img src="../../static/logo_wechat.png" >
			</div>
  			<p><span>手机号：</span><input type="text" placeholder="请输入手机号" /></p>
  			<p class="yan"><span>短信验证码：</span><input type="text" placeholder="请输入验证码" /><button>获取</button></p>
  			<div class="btn"><button>下一步</button></div>
  		</div>
	</div>		
			
</template>

<script>
//	import BScroll from 'better-scroll';
export default {
  name: 'forget',
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
		width: 10%;
		font-size: 0.9375rem;
		text-align: center;
		color: #fff;
	}
	.title span{
		display: inline-block;
		width: 90%;
		text-align: center;
	}
	.logo{
		width: 100%;
		text-align: center;
		padding-top: 1.5625rem;
	}
	.logo img{
		width: 1.25rem;
		height:1.25rem;
		margin-bottom: 0.625rem;
	}
	.content{
		width: 100%;
		height: 100%;
		background: url('../../static/bg_morning.jpg')no-repeat;
   		background-size: 100% 100%;
	}
	.content p{
		width: 100%;
		display: flex;
		margin-bottom: 0.15625rem;
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
