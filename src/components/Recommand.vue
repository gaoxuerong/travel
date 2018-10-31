<template>
  <div>
    <div class="recommand-title">热销推荐</div>
    <ul>
      <li class="item" v-for="item of recommandList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl"/>
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.where}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  name: "HomeRecommand",
  data() {
    return {
      recommandList:[{
        id: "0001",
        imgUrl: "http://img1.qunarzz.com/sight/p0/1507/36/ce3d2d6c9ab44d67ae68d940b8781829.water.jpg_200x200_0938a8f2.jpg",
        title: "北京野生动物园",
        where: "北京市大兴区一零六国道"
      },
      {
        id: "0002",
        imgUrl: "http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg",
        title: "北京欢乐谷",
        where: "北京市朝阳区东四环小武基北路"
      },
      {
        id: "0003",
        imgUrl: "http://img1.qunarzz.com/sight/p0/1410/34/f540a04367d06820af4dfeaf0ad40257.water.jpg_200x200_dd14b532.jpg",
        title: "故宫",
        where: "北京市东城区景山前街4号"
      },
      {
        id: "0004",
        imgUrl: "http://img1.qunarzz.com/sight/p0/1603/85/85c883189bf7293390.water.jpg_200x200_3165123d.jpg",
        title: "什刹海",
        where: "北京市西城区羊房胡同"
      },
      {
        id: "0005",
        imgUrl: "http://img1.qunarzz.com/sight/p0/1712/c2/c2d6eb9c771a3df3a3.img.jpg_200x200_3585386c.jpg",
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
.item
  overflow hidden
  display flex
  height 1.9rem
  .item-img
   height 1.7rem
   width 1.7rem
   padding .1rem
  .item-info
    flex 1
    padding .1rem
    min-width 0
    .item-title
      line-height .54rem
      font-size .32rem
      ellipsis()
    .item-desc
      line-height .4rem
      color #ccc
      ellipsis()
    .item-button
      line-height .44rem
      margin-top .16rem
      background #ff9300
      padding 0 .2rem
      color #fff
      border-radius .06rem
</style>


