export default {
	login (state){
		return function(data){
			var userArr = state.loginInfor.filter(function(v,i){
				return v.user == data.user
			})
			var passArr = userArr.filter(function(v,i){
				return v.pass == data.pass
			})
			if(data.user == ''){
				return '账号不能为空！'
			}else if(data.pass == ''){
				return '密码不能为空！'
			}
			if(userArr.length == 0){
				return '账号错误';
			}else if(passArr.length == 0){
				return '密码错误！';
			}else{
				localStorage.user = JSON.stringify(passArr[0])
				console.log(localStorage.user)
				return '';
			}
		}
	}
}


