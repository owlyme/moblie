<template>
  <div>
      <template v-if="showSearch">
        <Search></Search>
      </template>
      <template v-if="showCaterogy">
        <Category></Category>
      </template>
      <div v-else>
        <MainHeader></MainHeader>
        <MainList></MainList>
        <FlexFooter></FlexFooter>
      </div>
  </div>
</template>

<script>
import MainHeader from './main-header'
import MainList from './main-list'
import Search from './Search'
import FlexFooter from '@/components/flex-footer'
import Category from './category'

export default {
  name: 'main',
  components: {
    MainHeader,
    Search,
    FlexFooter,
    MainList,
    Category
  },
  data () {
    return {
      showSearch: false,
      showCaterogy: false
    }
  },
  created () {
    this.$BUS.$on('cancleSearch', (param) => {
      this.showSearch = false
    })

    this.$BUS.$on('openSearchPage', () => {
      this.showSearch = true
    })

    this.$BUS.$on('openCategory', () => {
      this.showCaterogy = true
    })

    this.$BUS.$on('categoryClose', () => {
      this.showCaterogy = false
    })
  },
  methods: {

  }
}
</script>

<style lang="stylus">
@import '~@/assets/stylus/index';
</style>
