<template>
  <div class="hello">
    <h1>{{ count }}</h1>
    <button @click="inc">+</button>
    <button @click="sub">-</button>
    <button @click="test">test</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit, Watch } from 'vue-property-decorator'

@Component
export default class HelloWorld extends Vue {
  @Prop() count!: number

  get number() {
    return this.count
  }

  set number(val) {
    this.$emit('on-change', val)
  }

  mounted() {
    this.$logger.log(this.count)
  }

  test() {
    this.number += 10
  }

  @Emit('on-sub')
  sub() {
    return
  }

  @Emit('on-inc')
  inc() {
    return
  }

  @Watch('count', { immediate: true, deep: true })
  countChange() {
    this.$logger.info(this.count)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
