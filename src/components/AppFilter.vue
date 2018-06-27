<template>
  <li class="filter" :class="`filter-${filterData.slug}`">
    <el-select ref="select" v-model="value" :name="`filter-${filterData.slug}`" :id="`filter-${filterData.slug}`" :placeholder="filterData.name" @change="$emit('changed')" clearable>
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
  }
}
</script>

<style lang="scss" scoped>

</style>
