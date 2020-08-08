<template>
  <div>
    {{state.someState}}
    {{state.computedState}}
    <button type="button" @click="someAction">Some Action</button>
    <div style="position: fixed; top: 0; left:0;">
      {{showHeader}}
    </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
import useScrollPosition from '@/library/hooks/useScrollPosition'
export default {
  setup () {
    const { showHeader, last, current } = useScrollPosition()

    const state = reactive({
      someState: 'bleh',
      computedState: computed(() => state.someState + 'boop')
    })
    const someAction = () => {
      state.someState = 'blog'
    }
    console.log(current.value)

    return { state, someAction, showHeader, last, current }
  }
}
</script>

<style lang="scss">
  body{
    height: 200vh;
  }
</style>
