<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    num: {
      type: Number,
      default: 0,
    }
  },
  data() {
    return {
      number: this.num
    }
  },
  methods: {
    increment() {
      this.number += 1
    }
  },
})
</script>


