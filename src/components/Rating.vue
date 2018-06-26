<template>
  <div class="rating-container">
    <div class="empty-container">
      <div v-for="index in 5" :key="index" class="star empty"></div>
    </div>
    <div class="full-container" :style="`width: ${percentage}%`">
      <div v-for="index in 5" :key="index" class="star full"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Rating',
  props: ['rating'],
  computed: {
    percentage () {
      return this.rating / 5 * 100
    }
  }
}
</script>

<style lang="scss" scoped>
.rating-container {
  position: relative;
  display: inline-block;
}

.empty-container, .full-container {
  display: flex;
}

.full-container {
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
}

.star {
  margin: 0 .2rem;
  font-size: 1.3rem;
  color: #FF6B00;
  &.empty {
    &:before {
      content: '\2606'
    }
  }
  &.full {
    &:before {
      content: '\2605';
    }
  }
}
</style>
