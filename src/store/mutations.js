export default {
  handlecityname (state, cityname) {
    state.city = cityname
    try {
      localStorage.city = cityname
    } catch (e) {}
  } 
}
