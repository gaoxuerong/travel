<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
    <city-alphabet></city-alphabet>
  </div>
</template>

<script>
import CityHeader from '../components/CityHead'
import CitySearch from '../components/Search'
import CityList from '../components/CityList'
import CityAlphabet from '../components/CityAlphabet'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      
    }
  },

  methods: {
    
  },
  mounted () {
    
  },
  
}
</script>
<style lang="stylus" scoped>

</style>


