<template>
  <div class="child">
  	<div class="child_con">
  		<router-link to="/videos"><i class="fa fa-angle-left"></i></router-link>
  		<img :src="img_B"/>
  		<div class="start">
				<i class="fa fa-play"></i>
			</div>
  	</div>
  	<div class="child_item">
  		<img :src="img"/>
  		<span>{{name}}</span>
  		<i class="fa fa-heart-o"></i>
  		<div class="flollow" @click="guanZhu" :style="styleRed">
  			<span v-if="!lll">已关注</span><span v-if="lll">关注</span>
  		</div>
  	</div>
  	
  	<div class="wrapper1">
		 		<div class="wrap1">
		 			<div>
		 				
		 				<div class="list">
		 					<img src="../../static/ic_ (2).png"/>
		 					<div class="item">
			 					<p>繁华落尽</p>
			 					<p>这个视频很棒！</p>
			 					<p>05-03 10:12 <span>回复</span></p>
		 					</div>
		 						<i class="fa fa-thumbs-o-up"></i>
		 				</div>
		 				<div class="list">
		 					<img src="../../static/ic_ (2).png"/>
		 					<div class="item">
			 					<p>繁华落尽</p>
			 					<p>这个视频很棒！</p>
			 					<p>05-03 10:12 <span>回复</span></p>
		 					</div>
		 						<i class="fa fa-thumbs-o-up"></i>
		 				</div>
		 				<div class="list">
		 					<img src="../../static/ic_ (2).png"/>
		 					<div class="item">
			 					<p>繁华落尽</p>
			 					<p>这个视频很棒！</p>
			 					<p>05-03 10:12 <span>回复</span></p>
		 					</div>
		 						<i class="fa fa-thumbs-o-up"></i>
		 				</div>
		 				<div class="list">
		 					<img src="../../static/ic_ (2).png"/>
		 					<div class="item">
			 					<p>繁华落尽</p>
			 					<p>这个视频很棒！</p>
			 					<p>05-03 10:12 <span>回复</span></p>
		 					</div>
		 						<i class="fa fa-thumbs-o-up"></i>
		 				</div>
		 				<div class="list">
		 					<img src="../../static/ic_ (2).png"/>
		 					<div class="item">
			 					<p>繁华落尽</p>
			 					<p>这个视频很棒！</p>
			 					<p>05-03 10:12 <span>回复</span></p>
		 					</div>
		 						<i class="fa fa-thumbs-o-up"></i>
		 				</div>
		 				<div class="list">
		 					<img src="../../static/ic_ (2).png"/>
		 					<div class="item">
			 					<p>繁华落尽</p>
			 					<p>这个视频很棒！</p>
			 					<p>05-03 10:12 <span>回复</span></p>
		 					</div>
		 						<i class="fa fa-thumbs-o-up"></i>
		 				</div>
		 				<div class="list">
		 					<img src="../../static/ic_ (2).png"/>
		 					<div class="item">
			 					<p>繁华落尽</p>
			 					<p>这个视频很棒！</p>
			 					<p>05-03 10:12 <span>回复</span></p>
		 					</div>
		 						<i class="fa fa-thumbs-o-up"></i>
		 				</div>
		 				<div class="list">
		 					<img src="../../static/ic_ (2).png"/>
		 					<div class="item">
			 					<p>繁华落尽</p>
			 					<p>这个视频很棒！</p>
			 					<p>05-03 10:12 <span>回复</span></p>
		 					</div>
		 						<i class="fa fa-thumbs-o-up"></i>
		 				</div>
		 				<div class="list">
		 					<img src="../../static/ic_ (2).png"/>
		 					<div class="item">
			 					<p>繁华落尽</p>
			 					<p>这个视频很棒！</p>
			 					<p>05-03 10:12 <span>回复</span></p>
		 					</div>
		 						<i class="fa fa-thumbs-o-up"></i>
		 				</div>
		 				<div class="list">
		 					<img src="../../static/ic_ (2).png"/>
		 					<div class="item">
			 					<p>繁华落尽</p>
			 					<p>这个视频很棒！</p>
			 					<p>05-03 10:12 <span>回复</span></p>
		 					</div>
		 						<i class="fa fa-thumbs-o-up"></i>
		 				</div>
		 				<div class="list">
		 					<img src="../../static/ic_ (2).png"/>
		 					<div class="item">
			 					<p>繁华落尽</p>
			 					<p>这个视频很棒！</p>
			 					<p>05-03 10:12 <span>回复</span></p>
		 					</div>
		 						<i class="fa fa-thumbs-o-up"></i>
		 				</div>
		 				<div class="list">
		 					<img src="../../static/ic_ (2).png"/>
		 					<div class="item">
			 					<p>繁华落尽</p>
			 					<p>这个视频很棒！</p>
			 					<p>05-03 10:12 <span>回复</span></p>
		 					</div>
		 						<i class="fa fa-thumbs-o-up"></i>
		 				</div>
		 				<div class="list">
		 					<img src="../../static/ic_ (2).png"/>
		 					<div class="item">
			 					<p>繁华落尽</p>
			 					<p>这个视频很棒！</p>
			 					<p>05-03 10:12 <span>回复</span></p>
		 					</div>
		 						<i class="fa fa-thumbs-o-up"></i>
		 				</div>
		 				<div class="list">
		 					<img src="../../static/ic_ (2).png"/>
		 					<div class="item">
			 					<p>繁华落尽</p>
			 					<p>这个视频很棒！</p>
			 					<p>05-03 10:12 <span>回复</span></p>
		 					</div>
		 						<i class="fa fa-thumbs-o-up"></i>
		 				</div>
		 				<div class="list">
		 					<img src="../../static/ic_ (2).png"/>
		 					<div class="item">
			 					<p>繁华落尽</p>
			 					<p>这个视频很棒！</p>
			 					<p>05-03 10:12 <span>回复</span></p>
		 					</div>
		 						<i class="fa fa-thumbs-o-up"></i>
		 				</div>
		 				<div class="list">
		 					<img src="../../static/ic_ (2).png"/> 
		 					<div class="item">
			 					<p>繁华落尽</p>
			 					<p>这个视频很棒！</p>
			 					<p>05-03 10:12 <span>回复</span></p>
		 					</div>
		 						<i class="fa fa-thumbs-o-up"></i>
		 				</div>
		 				
		 				
		 				
  				</div>
  			</div>
  	</div>
  	
  	
  	<div class="bottom">
  		<span>评论：</span>
  		<input type="text" placeholder="写评论" />
  		<i class="fa fa-star-o"></i>
  		<i class="fa fa-share"></i>
  	</div>
   </div>
</template>

<script>
import BScroll from 'better-scroll';
import { mapState } from 'vuex';
export default {
  name: 'videos_child',
  data () {
    return {
    	img : '',
    	img_B : '',
    	name : '',
   		lll : true,
    	styleRed : {
				color : '#fff',
				background : 'red',
				border: '0.03125rem solid red'
			}
    }
  },
  computed : {
		...mapState(['v_lists'])
	},	
  methods : {
  	guanZhu(){
  		this.lll = !this.lll
				if(this.lll){
					this.styleRed.color = '#fff'
					this.styleRed.background = 'red'
					this.styleRed.border = '0.03125rem solid red'
				}else{
					this.styleRed.color = '#999'
					this.styleRed.background = '#fff'
					this.styleRed.border = '0.03125rem solid #aaa'
				}
  	}
  },
	mounted (){
		const scroll1 = new BScroll('.wrap1',{
			click : true
		})
		
		this.v_lists.forEach((v,i)=>{
				v.v_list.forEach((m,n)=>{
						if(this.$route.params.id == m.id){
							this.img = m.img
							this.img_B = m.img_B
							this.name = m.name
						}
				})
		})
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.child_con{
		width: 100%;
		height: 6.25rem;
		position: relative;
	}
	.child_con>a>i{
		font-size: 1.25rem;
		position: absolute;
		color: #000;
		top: 0.15625rem;
		left: 0.21875rem;
	}
	.child_con img{
		width: 100%;
		height: 100%;
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
		top: 2.5rem;
		left: 50%;
		margin-left: -0.625rem;
	}
	.child_item{
		width: 100%;
		padding:0.15625rem 0.3125rem;
		font-size: 0.4375rem;
		border-bottom: 0.03125rem solid #ccc;
	}
	.child_item img{
		width: 0.9375rem;
		height: 0.9375rem;
		border-radius: 50%;
		vertical-align: middle;
	}
	.flollow{
		width: 1.4375rem;
		text-align: center;
		line-height: 0.625rem;
		border-radius: 0.15625rem;
		float: right;
		margin:0.15625rem 0.15625rem 0rem 0rem;
		transition: all .3s;
	}
	.list{
		display: flex;
		padding: 0.15625rem 0.3125rem;
		
	}
	.list i{
		font-size: 0.625rem;
	}
	.list img{
		width: 0.9375rem;
		height: 0.9375rem;
		border-radius: 50%;
	}
	.list .item{
		width: 80%;
		margin-left: 0.3125rem;
		border-bottom: 0.03125rem solid #eee;
	}
	.list .item p {
		margin-bottom: 0.15625rem;
	}
	.list .item p:first-child{
		color: #09a727;
		font-size: 0.4375rem;
	}
	.list .item p:nth-child(2){
		font-size:0.4375rem;
	}
	.list .item p:last-child{
		color: #aaa;
	}
	.bottom{
		width: 100%;
		position: fixed;
		bottom: 0rem;
		left: 0rem;
		line-height: 1.25rem;
		height: 1.25rem;
		font-size: 0.4375rem;
		border-top: 0.03125rem solid #ccc;
		background: #fff;
		padding:0rem 0.3125rem;
	}
	.bottom input{
		width: 6.25rem;
		height: 0.8125rem;
		font-size: 12px;
		border-radius: 0.9375rem;
		border: 0.03125rem solid #ccc;
		text-indent: 0.3125rem;
		background: #ddd;
	}
	.bottom i{
		font-size: 0.5rem;
		margin-left:0.15625rem;
	}
	.wrapper1{
		width: 100%;
		height: 100%;
		padding-bottom: 6.25rem;
		overflow: hidden;
	}
	.wrap1{
		width: 100%;
		height:100%;
	}
</style>
