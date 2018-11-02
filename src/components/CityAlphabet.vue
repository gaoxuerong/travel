<template>
  <ul class="alphabet">
    <li class="alphabet-item">A</li>
    <li class="alphabet-item">A</li>
    <li class="alphabet-item">A</li>
    <li class="alphabet-item">A</li>
    <li class="alphabet-item">A</li>
    <li class="alphabet-item">A</li>
    <li class="alphabet-item">A</li>
    <li class="alphabet-item">A</li>
    <li class="alphabet-item">A</li>
  </ul>
</template>
<script> 
export default {
  name: 'CityAlphabet'
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .alphabet
    display flex
    justify-content center
    flex-direction column
    width .4rem
    right 0
    bottom 0
    position absolute
    top 1.58rem
    .alphabet-item
      line-height .4rem
      text-align center
      color $bgColor
</style>


