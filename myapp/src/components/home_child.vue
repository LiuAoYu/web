<template>
  	<div class="navs">
  		<router-link to="/home"><span><i class="fa fa-angle-left"></i></span></router-link>
  			<p>暂无内容</p>
  	</div>
</template>

<script>

//import BScroll from 'better-scroll';
import { mapState } from 'vuex';
export default {
  name: 'home_child',
  data () {
    return {
    	img : ''
    }
  },
   computed : {
		...mapState(['str'])
	},	
  methods : {
  	
  	
  },
  mounted () {
//	  const scroll1 = new BScroll('.wrap1',{
//	  	click : true
//	  })
	this.img = this.str[this.$route.params.id]
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.navs{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0rem;
		left: 0rem;
		z-index: 999;
		background: #fff;
	}
	.top-enter{
		left: 100%;
	}
	.top-to{
		left: 0rem;
	}
	.top-enter-active,
	.top-leave-active{
		transition: left .5s;
	}
	.top-leave{
		left: 0rem;
	}
	.top-leave-to{
		left: 100%;
	}
	.navs img{
		width: 100%;
		height: 100%;
	}
	.navs span{
		font-size: 0.9375rem;
		position: absolute;
		top: 0rem;
		left: 0.15625rem;
		z-index: 9999;
		color: #000;
	}
	.navs p{
		font-size: 0.9375rem;
		text-align: center;
		line-height: 6.25rem;
	}
</style>
