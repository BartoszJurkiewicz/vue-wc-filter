<template>
  <li class="filter" :class="`filter-${filterData.slug}`">
    <el-select ref="select" v-model="value" :name="`filter-${filterData.slug}`" :id="`filter-${filterData.slug}`" :placeholder="filterData.name" @change="$emit('changed')" :clearable="filterData.slug !== 'per_page'">
      <el-option v-for="option in filterData.options" :key="`option-${option.slug}`" :label="option.name" :value="option.slug">{{option.name || option.slug}}</el-option>
    </el-select>
  </li>
</template>

<script>
export default {
  name: 'AppFilter',
  props: [ 'filterData'],
  data () {
    return {
      value: ''
    }
  },
  created () {
    if (this.filterData.slug == 'per_page') this.value = ajax_options.posts_per_page
  }
}
</script>

<style lang="scss" scoped>
.filter {
  flex: 0 20%;
}
</style>
