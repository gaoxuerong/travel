let defaultCity = '上海'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {
  defaultCity = '上海'
}
export default {
  city: defaultCity
}