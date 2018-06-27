<template>
  <div v-if="maxPages > 1" class="pagination-container">
    <el-button v-if="activePage > 1" @click="$emit('changePage', activePage - 1)" icon="el-icon-arrow-left"></el-button>
    <el-button v-for="page in pages" :key="page" @click="$emit('changePage', page)" :type="activePage == page ? 'primary' : ''">{{page}}</el-button>
    <span>of {{maxPages}}</span>
    <el-button v-if="activePage < maxPages" @click="$emit('changePage', activePage + 1)" icon="el-icon-arrow-right"></el-button>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: [ 'activePage' ],
  computed: {
    maxPages () {
      return this.$store.state.data.max_pages
    },
    pages () {
      let pagination = [1, parseInt(this.activePage) - 1, parseInt(this.activePage), parseInt(this.activePage) + 1]
      let refined = pagination.sort().filter(page => { return page > 0 && page <= parseInt(this.maxPages) })
      return [...new Set(refined)]
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination-container {
  margin-top: 4rem;
  span {
    margin: 0 .4rem
  }
}
</style>
