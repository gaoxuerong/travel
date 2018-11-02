<template>
  <ul class="alphabet">
    <li
      class="alphabet-item"
      v-for="(item, key) of cities"
      :key="key"
    >
      {{key}}
    </li>
  </ul>
</template>
<script> 
export default {
  name: 'CityAlphabet',
  data () {
    return {
      
    }
  },
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for(let i of this.cities) {
        letters.push(i)
      }
      return letters
    }
  },

  methods: {
    handleTouchStart () {
      
    },
    handleTouchMove () {
      
    },
    handleTouchEnd () {
      
    },
    handleLetterClick () {
      
    }
    
  }
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


