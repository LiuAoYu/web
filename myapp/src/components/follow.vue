<template>
  <div class="hello">
  		<div class="title">
  			
	   		<span v-if="flag">关注</span>
	   		<input type="text" v-if="!flag" @blur="Blur" />
	   		<div class="title_sw" @click="Search"><i class="fa fa-search" v-if="flag"></i><span v-if="!flag">搜索</span></div>
	   	</div>
		   	<div class="wrapper">
		 		<div class="wrap">
		 			<div>
		 				
		 				<follow-demo  v-for="(row,index) in loadInfor" :key="index" v-if="left" :data-con="row" :collection="false"></follow-demo>
		 				<div class="loading" v-if="isLoading"><i class="fa fa-spinner fa-spin"></i></div>
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
import followDemo from '@/components/follow_demo.vue';
export default {
  name: 'follow',
  data () {
    return {
      msg: '关注',
      left : true,
      flag : true,
      isLoading : false
    }
  },
  computed : {
    ...mapState(['infor','loadInfor'])
  },
  methods : {
  	Search(){
  		this.flag = !this.flag
  	},
  	Blur(){
  		this.flag = true
  	},
  	initScroll (){
  		this.scroll = new BScroll('.wrap',{
				click : true,
				pullUpLoad : {
					threshold : -30
				}
			})
  	},
  	loadData (){
			var _this = this
			this.$store.commit('addLoadInfor',this.infor.splice(0,7));
			this.scroll.on('pullingUp',(pos)=>{
					if(this.infor.length){
						_this.isLoading = true;
						setTimeout(function(){
							_this.isLoading = false;
							_this.loadData();
							_this.scroll.finishPullUp(); // 终止加载
							_this.scroll.refresh();
						},500)
						
					}
		  			
			})
  	},
  	refresh (){
			this.scroll.refresh();
		}
  },
	mounted (){
			this.initScroll();
			this.loadData();
//			console.log(this.loadInfor)
	},
	components : {
    followDemo
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.title{
		width: 100%;
		height: 1.25rem;
		background: #09a727;
		font-size: 0.5625rem;
		color: #fff;
		display: flex;
		position: relative;
		z-index: 99;
		padding:0.15625rem 0rem 0rem 0.15625rem;
	}
	.title>span{
		display: inline-block;
		width: 80%;
		text-align: center;
	}
	.title input{
		width: 80%;
		height: 0.9375rem;
		border: none;
		text-indent: 0.3125rem;
	}
	.title .title_sw{
		width: 20%;
		text-align: center;
	}
	.hello{
		width: 100%;
		height:100%;
		padding-bottom:2.5rem;
	}
	 .wrapper{
			height:100%;
			overflow: hidden;
		}
	.wrap {
		width: 100%;
		height:100%;
	}
	.list{
		position: relative;
	}
	.lists img{
		float: left;
		width: 1.875rem;
		height: 1.875rem;
		border-radius: 50%;
	}
	.lists .item {
		float: left;
		margin:0.3125rem 0rem 0rem 0.625rem;
	}
	.lists .item h1{
		font-size: 0.5rem;
	}
	.lists .item p{
		color: #999;
	}
	.btn_follow{
		float: right;
		width: 1.5625rem;
		height: 0.625rem;
		border: 1px solid #aaa;
		border-radius: 0.15625rem;
		text-align: center;
		color: #999;
		margin-top: 0.625rem;
		margin-right: 0.625rem;
	}
	.childs{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0rem;
		left: 0rem;
		z-index: 999;
		background: #fff;
		padding-bottom: 7.125rem;
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
	.loading{
		text-align: center;
		font-size: 0.9375rem
	}
</style>
