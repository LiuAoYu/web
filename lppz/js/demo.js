(function(){
	$(function(){
		setTimeout(()=>{    
			if($('html,body').scrollTop() >= 600){
				$('.go_top').show()
			}else{
				$('.go_top').hide()
			}
		})
	});
	$(document).on('scroll',function(){
		if($('html,body').scrollTop() <= 600){
			$('.go_top').hide()
			
		}else{
			$('.go_top').show()
		}
	});
	$('.go_top').click(function(){
		
		var time = setInterval(function(){
			document.documentElement.scrollTop -= 30
			if($('html,body').scrollTop() <= 600){
				$('.go_top').hide()
			}
			if($('html,body').scrollTop() <= 0){
				clearInterval(time);
			}
		},10)
	})
})();
(function(){
	var aaa = location.search.substr(1)
	if(aaa == '0'){
		$('.list_liB0').addClass('liB')
	}else if(aaa == '1'){
		$('.list_liB1').addClass('liB')
	}else if(aaa == '2'){
		$('.list_liB2').addClass('liB')
	}else if(aaa == '3'){
		$('.list_liB3').addClass('liB')
	}else if(aaa == '4'){
		$('.list_liB4').addClass('liB')
	}else if(aaa == '5'){
		$('.list_liB5').addClass('liB')
	}else if(aaa == '6'){
		$('.list_liB6').addClass('liB')
	}
})();