<template>
  <div class="wrapper">
    <div class="item" v-for="item in items" :key="item.id">
      {{ item.name }}
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      items: [{
        id: 1,
        name: 1,
      }, {
        id: 2,
        name: 2,
      }]
    }
  }
}
</script>
