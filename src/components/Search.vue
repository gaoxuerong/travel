<template>
  <div class="search">
    <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或者拼音"/>
  </div>
</template>
<script>
export default {
  name: 'CitySearch',
  data () {
    return {
      keyword: ''
    }
  }
}
</script>
<style lang="stylus" scpoed>
  @import '~styles/varibles.styl'
  .search
    height: .72rem
    padding: 0 .1rem
    background: $bgColor
    .search-input
      width: 100%
      height: .62rem
      line-height: .62rem
      text-align: center
      border-radius: .06rem
      color: #666
</style>


