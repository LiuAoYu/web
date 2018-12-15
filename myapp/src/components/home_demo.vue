<template>
	<span class="st_right" @click="cut">
		<i class="fa" :class="{'fa-toggle-on' : www ,'fa-toggle-off' : !www}"  :style="btn_style">
			
		</i>
	</span>
</template>
<script>
	import { mapState } from 'vuex';
	export default {
		name: 'home_demo',
		props : ['collection'],
		data (){
			return {
				www : true,	
				btn_style : {
					color : '#09a727'
				}
			}
		},
		 computed : {
    		...mapState(['infor'])
  		},	
		methods : {
			cut(){
		  		this.www = !this.www
		  		if(this.www){
		  			this.btn_style.color = '#09a727'
		  		}else{
		  			this.btn_style.color = '#aaa'
		  		}
		  	},
		},
		mounted(){
			this.www = this.collection
			if(this.www){
	  			this.btn_style.color = '#09a727'
	  		}else{
	  			this.btn_style.color = '#aaa'
	  		}
//			console.log(this.$refs.theBtn.offsetWidth)
		}
	}
</script>

<style scoped>
	
</style>