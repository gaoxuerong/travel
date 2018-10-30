<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-item" :src="item.imgUrl"/>
          </div>
          <p class="icon-desc">{{item.imgDesc}}</p>
        </div>
      </swiper-slide>
     </swiper>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  name: "HomeIcons",
  data() {
    return {
      iconsList: [
        {
          id: "0001",
          imgUrl:
            "https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          imgDesc: "景点门票"
        },
        {
          id: "0002",
          imgUrl:
            "https://imgs.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
          imgDesc: "北京必游"
        },
        {
          id: "0003",
          imgUrl:
            "https://imgs.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
          imgDesc: "一日游"
        },
        {
          id: "0004",
          imgUrl:
            "https://imgs.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png",
          imgDesc: "文化古迹"
        },
        {
          id: "0005",
          imgUrl:
            "https://imgs.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",
          imgDesc: "动植物园"
        },
        {
          id: "0006",
          imgUrl:
            "https://imgs.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png",
          imgDesc: "故宫"
        },
        {
          id: "0007",
          imgUrl:
            "https://imgs.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png",
          imgDesc: "野生动物园"
        },
        {
          id: "0008",
          imgUrl:
            "https://imgs.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png",
          imgDesc: "泡温泉"
        },
        {
          id: "0009",
          imgUrl:
            "https://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png",
          imgDesc: "打卡圣地"
        },
        {
          id: "0010",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png",
          imgDesc: "全部玩乐"
        }
      ]
    };
  },
  computed: {
    pages () {
      const pages = []
      this.iconsList.forEach((item, index) => {
        const page = Math.floor(index/8)
        if(!pages[page]){
          pages[page] =[]
        }
        pages[page].push(item)
      })
      return pages
    }
  }
};
</script>
<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  @import '~@/assets/styles/mixins.styl'
  .icons >>> .swiper-slide 
    height: 0;
    padding-bottom: 50%;  
    display: flex;
    flex-flow: row wrap;
  .icon {
    position: relative;
    width: 25%;
    padding-bottom: 25%;

    .icon-img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.44rem;
      padding: 0.1rem;

      .icon-img-item {
        height: 100%;
      }
    }

    .icon-desc {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 0.44rem;
      line-height: 0.44rem;
      text-align: center;
      color: $darkTextColor;
      ellipsis()
    }
  }
</style>


