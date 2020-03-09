<template>
 <div class="home">
   <nav-bar class="home-nav"><div slot="center">蘑菇街</div></nav-bar>
   <home-swiper :banners="banners"/>
   <recommend-view :recommends="recommends"/>
   <feature-view/>

   <tab-control class="tab-control" :titles="['流行','新款','精选']"/>
   <ul>
     <li>000</li>
     <li>000</li>
     <li>000</li>
     <li>000</li>
     <li>000</li>
     <li>000</li>
     <li>000</li>
     <li>000</li>
     <li>000</li>
     <li>000</li>
     <li>000</li>
     <li>000</li>
     <li>000</li>
     <li>000</li>
     <li>000</li>
     <li>000</li>
     <li>000</li>
     <li>000</li>
     <li>000</li>
     <li>000</li>
     <li>000</li>
     <li>000</li>
     <li>000</li>
     <li>000</li>
     <li>000</li>
     <li>000</li>
     <li>000</li>
     <li>000</li>
     <li>000</li>
     <li>000</li>
   </ul>
 </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

import TabControl from 'components/content/tabControl/TabControl'

import {getHomeMultidata,getHomeGoods} from 'network/home'




export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl
    },
    data() {
      return {
        banners : [],
        recommends: [],
        goods: {
          'pop': {page: 0,list: []},
          'new': {page: 0,list: []},
          'sell': {page: 0,list: []}
        }
      }
    },
    created() {
      // 请求banner数据,方法在methods,函数名如果和methods里一样,则使用this
      this.getHomeMultidata()
      // 请求商品数据
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
    },
    methods: {
      getHomeMultidata() {
        getHomeMultidata().then(res => {
        console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
      },
      getHomeGoods(type) {
        // type = pop/news/sell,this.goods[type] = goods对象里面选择pop/news/sell
        const page = this.goods[type].page + 1;
        getHomeGoods(type,page).then(res => {
        console.log(res);
        // ...解构数组,把里面的元素每个解构出来push到指定数组,等同于for循环+push
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1
        })
      }
    }
}
</script>

<style>
.home {
  padding-top: 44px;
}
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .tab-control {
    position: sticky;
    top: 44px;
  }
</style>
