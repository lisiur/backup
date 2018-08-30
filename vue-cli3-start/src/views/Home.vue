<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld 
      :counts="[1,2]"
      @on-inc="onInc"
      @on-sub="onSub"
      @on-change="onChange"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue'

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  count: number = 0

  onInc() {
    this.count += 1 
  }
  onSub() {
    this.count -= 1
  }
  onChange(cnt: number) {
    this.count = cnt
  }
}
</script>
