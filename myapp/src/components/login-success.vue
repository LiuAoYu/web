<template>
  	<div class="hello">
		  	<div class="title">
		  		<router-link to="/login"><i class="fa fa-angle-left"></i><span></span></router-link>
		  		用户登录
		  	</div>
		  	
		    <div class="logo">
			  	<img src="../../static/logo_qq.png" >
			  	<img src="../../static/logo_wechat.png" >
			  	<img src="../../static/logo_sinaweibo.png">
			</div>
			
		 	<div class="list">
				    <p><input type="text" v-model="user" placeholder="手机号"></p>
				    <p><input type="password" v-model="pass" placeholder="密码"></p>
				    <p class="warning">{{Text}}</p>
				    <p><button @click="login">登录</button></p>
			</div>
			
		<div class="row">
				<div class="left">
					<router-link to="/register">注册</router-link>
				</div>
				<div class="right">
					<router-link to="/forget">忘记密码</router-link>
				</div>
			</div>
		
	  </div>
	  
</template>

<script>
//	import BScroll from 'better-scroll';
export default {
	name: 'success',
  data () {
    return {
      msg: '登录',
      user : '',
      pass : '',
      Text : '',
//    isShowWarning : false
    }
  },
  methods : {
  	login(){
  		this.Text = this.$store.getters.login({
  			user : this.user,
  			pass : this.pass
  		})
		if(this.Text == ''){
//			this.isShowWarning = true;
			this.$router.push({ path: 'login' })
		}else{
//			this.isShowWarning = false
		}
  	}
  },
  mounted (){
//	const scroll = new BScroll('.wrap')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.title{
		width: 100%;
		height: 1.25rem;
		background: #09a727;
		text-align: center;
		line-height: 1.25rem;
		font-size: 0.5625rem;
		color: #fff;
		position: relative;
		z-index: 99;
	}
	.title i{
		font-size: 0.9375rem;
		color: #fff;
		position: absolute;
		top: 0.15625rem;
		left: 0.15625rem;
	}
	.hello{
		width: 100%;
		height: 100%;
		background: url('../../static/bg_morning.jpg')no-repeat;
	    background-size: 100% 100%;
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
	.list{
		width: 100%;
	}
	.list p{
		width: 100%;
		text-align: center;
	}
	.list p input{
		width: 94%;
		height: 1.25rem;
		border: 0.03125rem solid #ccc;
		text-indent: 0.625rem;
		border-color: #fff;
		background-color: rgba(255,255,255,0.5);
		border-radius: 0.15625rem;
		
	}
	.list p button{
		width: 94%;
		height: 1.25rem;
		background-color: #09a727;
		border-color: transparent;
		color: #fff;
		border-radius: 0.09375rem;
	}
	.row{
		width: 100%;
		display: flex;
		
	}
	.row .left,.row .right{
		width: 50%;
		margin-top: 0.9375rem;
	}
	.row .left a,.row .right a{
		color: #09a727;
	}
	.row .left{
		text-align: left;
		margin-left: 0.3125rem;
	}
	.row .right{
		text-align: right;
		margin-right: 0.3125rem;
	}
	.list .warning{
		height: 0.625rem;
		margin: 0.3125rem 0rem;
		padding: 0rem 0.3125rem;
		text-align: left;
		color: red;
	}
</style>
