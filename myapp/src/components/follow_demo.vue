<template>
	<div>
		<div class="data_list">
			
		  	<div class="list" ref="list" @touchstart="startfn" @touchmove="move" @touchend="endfn" :style="itemStyle">
				<router-link :to="{name : 'follow_child',params : {id : dataCon.id}}" class="item1">
				    <img :src="dataCon.img">
				    <div class="text">
				      <h1>{{dataCon.name}}</h1>
				      <p>粉丝数 ： {{dataCon.num}}</p>
				    </div>
				 </router-link>
				    <div class="btn_follow" :style="styleRed" @click="guanZhu">
						<span v-if="lll">已关注</span><span v-if="!lll">关注</span>
					</div>	
				
			</div>
			
			<div class="deleteBtn" ref="theBtn">
				<div class="btn1" @click="Collection" v-if="collection">收藏</div>
				<div class="btn2" @click="Delete">删除</div>
			</div>
			
		</div>
	</div>
</template>
<script>
	import { mapState } from 'vuex';
	export default {
		name: 'follow_demo',
		props : ['dataCon','collection'],
		data (){
			return {
				startNum : 0,
				endNum : 0,
				itemStyle : {
				  transform : 'translate(0px,0px)'
				},
				lll : true,
				styleRed : {
					color : '#999',
					background : '#fff',
					border: '0.03125rem solid #aaa'
				}
			}
		},
		 computed : {
    		...mapState(['infor'])
  		},	
		methods : {
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
			},
			Collection(){
				this.item.push(this.dataCon)
			},
			Delete(){
//				console.log(this.dataCon)
//				console.log(this.item.splice(this.dataCon,1))
			},
			startfn(evt){
			  if(evt.touches.length == 1){
			    this.start = evt.touches[0].pageX
			  }
			},
			move(evt){
			  if(evt.touches.length == 1){
			    var num = evt.touches[0].pageX - this.start;
			    var move = num + this.endNum;
			    var offsetWidth = this.$refs.theBtn.offsetWidth;
			    var c = num + offsetWidth;
			    if(-move >= offsetWidth){
			      var move = -offsetWidth + (c *= 0.1);
			    }else if(move > 0){
			      var move = 0;
			    }else{
			      var move = num + this.endNum;
			    }
			    this.itemStyle.transform = `translate(${move}px,0px)`;
			  }
			},
			endfn(evt){
			  if(evt.changedTouches.length == 1){
			    var num = evt.changedTouches[0].pageX - this.start;
			    var move = num + this.endNum;
			    var poX = 0;
			    if(-move <= this.$refs.theBtn.offsetWidth / 2){
			      poX = 0;
			    }else{
			      poX = -this.$refs.theBtn.offsetWidth;
			    }
			    this.itemStyle.transition = 'transform .3s'
			    this.itemStyle.transform = `translate(${poX}px,0px)`
			    this.endNum = poX;
			  }
			}
		},
		mounted(){
//			console.log(this.$refs.theBtn.offsetWidth)
		}
	}
</script>

<style scoped>
		.data_list{
			position:relative;
			border-bottom: 1px solid #ccc;
		}
	  .data_list .deleteBtn{
	    position:absolute;
	    right:0;
	    top:0;
	    height:100%;
	  }
	  .data_list .deleteBtn .btn1,.data_list .deleteBtn .btn2{
	  	width: 1.875rem;
	  	height: 100%;
	  	float: left;
	  	font-size: 0.5rem;
	  	line-height: 2.8125rem;
	  	text-align: center;
	  	border: none;
	  	position: relative;
	  }
	  .data_list .deleteBtn .btn2{
	  	background: #09a727;
	  	color: #fff;
	  }
	  .data_list .list{
	  	background: #fff;
	  	position: relative;
	  	z-index: 1;
	  }
	  .data_list .list .item1{
			display: flex;
			justify-content:space-around;
		}
	.data_list .list .item1 img{
		width: 2.1875rem;
		height:2.1875rem;
		margin: 0.21875rem;
		flex-grow: 0;
	}
	.data_list .list .item1 .text{
		flex-grow: 1;
		margin-left: 0.3125rem;
	}
	.data_list .list .item1 .text h1{
		font-size: 0.5rem;
		margin-top: 0.625rem;
		margin-bottom: 0.625rem;
		color: #09a727;
	}
	.data_list .list .item1 .text p{
		color: #666;
	}
	.btn_follow{
		width: 1.5625rem;
		height: 0.625rem;
		line-height: 0.5625rem;
		border-radius: 0.15625rem;
		text-align: center;
		position: absolute;
		top: 0.9375rem;
		right: 0.9375rem;
		transition: all .3s;
	}
</style>