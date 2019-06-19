export default {
	changCity (state, city) {
			console.log(city)
			state.city = city
			localStorage.city = city
		}
}
