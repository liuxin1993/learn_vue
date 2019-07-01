let defaultCity = '北京'
let id = ''
try {
	if(localStorage.city){
		defaultCity = localStorage.city
	}
} catch(e){}

export default {
	city:defaultCity,
	id : '001'
}
