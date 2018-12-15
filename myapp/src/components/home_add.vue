<template>
  	<div class="add">
  		<p><router-link to="/home">×</router-link></p>
  		
  			<div class="wrapper1">
			 		<div class="wrap1">
			 			<div>
  		
				  		<div class="add_con">
				  			<p>我喜欢<span @click="Delete"><i class="fa fa-trash-o" v-if="!flag"></i><span v-if="flag">完成</span></span></p>
				  			<ul>
				  				<li  v-for="(v,i) in arr" :key="i">{{v}}<span v-if="flag">×</span></li>
				  			</ul>
				  		</div>
				  		
				  		<div class="add_con">
				  			<p>推荐</p>
				  			<ul>
				  				<li  v-for="(v,i) in arrAdd" :key="i">{{v}}</li>
				  			</ul>
				  		</div>
			  		
			  		</div>
			  	</div>
			  </div>
  	</div>
</template>

<script>

import BScroll from 'better-scroll';
import { mapState } from 'vuex';
export default {
  name: 'home_add',
  data () {
    return {
      index : 0,
      flag : false
    }
  },
   computed : {
		...mapState(['arr','str','arrAdd'])
	},	
  methods : {
  	Delete(){
  		this.flag = !this.flag
  	}
  },
  mounted () {
	  const scroll1 = new BScroll('.wrap1',{
	  	click : true
	  })
//	  console.log(this.$route.path == '/home/child')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.add{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0rem;
		left: 0rem;
		background: #fff;
		z-index: 99;
	}
	.top-enter{
		top: 100%;
	}
	.top-to{
		top: 0rem;
	}
	.top-enter-active,
	.top-leave-active{
		transition: top .5s;
	}
	.top-leave{
		top: 0rem;
	}
	.top-leave-to{
		top: 100%;
	}
	.wrapper1{
		height:100%;
		overflow: hidden;
		padding-bottom:1.875rem;
	}
	.wrap,.wrap1{
		width: 100%;
		height:100%;
	}
	.hello{
		width: 100%;
		height:100%;
		padding-top:1.25rem;
		padding-bottom:1.40625rem;
		position: relative;
	}
	
	.add>p{
		font-size: 0.9375rem;
		border-bottom: 0.03125rem solid #ccc;
		padding-left: 0.3125rem;
	}
	.add_con>p>span{
		text-align: center;
		float: right;
		width: 1.25rem;
	}
	.add_con p{
		font-size: 0.5rem;
		padding: 0.3125rem;
	}
	.add_con ul{
		overflow: hidden;
	}
	.add_con ul li{
		width: 21%;
		height: 0.9375rem;
		text-align: center;
		float: left;
		line-height: 0.9375rem;
		margin: 2%;
		background: #ddd;
		border-radius: 0.15625rem;
		position: relative;
	}
	.add_con ul li span{
		width: 0.46875rem;
		height: 0.46875rem;
		border-radius: 50%;
		background: #aaa;
		color: #fff;
		text-align: center;
		line-height: 0.46875rem;
		position: absolute;
		top: -0.09375rem;
		right: -0.09375rem;
	}
</style>
