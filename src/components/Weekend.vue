<template>
  <div>
    <div class="recommand-title">周末去哪儿</div>
    <ul>
      <li class="item" v-for="item of recommandList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl"/>
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.where}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  name: "Weekend",
  data() {
    return {
      recommandList:[{
        id: "0001",
        imgUrl: "http://img1.qunarzz.com/sight/source/1509/81/0412da9c4db66a.jpg_r_640x214_8e23871e.jpg",
        title: "北京野生动物园",
        where: "北京市大兴区一零六国道"
      },
      {
        id: "0002",
        imgUrl: "http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg",
        title: "北京欢乐谷",
        where: "北京市朝阳区东四环小武基北路"
      },
      {
        id: "0003",
        imgUrl: "http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg",
        title: "故宫",
        where: "北京市东城区景山前街4号"
      },
      {
        id: "0004",
        imgUrl: "http://img1.qunarzz.com/sight/source/1505/ce/bc89bc2f0e33ea.jpg_r_640x214_3e408453.jpg",
        title: "什刹海",
        where: "北京市西城区羊房胡同"
      },
      {
        id: "0005",
        imgUrl: "http://img1.qunarzz.com/sight/source/1505/b2/fde1bfcd057a52.jpg_r_640x214_bbf3fa44.jpg",
        title: "古北水镇",
        where: "北京市密云县古北口镇司马台村古北水镇"
      }]
    }
  },
};
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
.recommand-title
  margin-top: .2rem
  line-height: .8rem
  background: #eee
  text-indent: .2rem
.item-img-wrapper
  height 0
  overflow hidden
  padding-bottom 33.9%
  .item-img
    width: 100%;
.item-info
  padding .1rem
  .item-title
    line-height .54rem
    font-size .32rem
    ellipsis()
  .item-desc
    line-height .4rem
    color #ccc
    ellipsis()
</style>


