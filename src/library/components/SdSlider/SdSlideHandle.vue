<template>
    <div class="sd--slider__thumb-container" ref="handle">
      <svg class="sd--slider__thumb" width="24" height="24">
        <circle cx="12" cy="12" r="12"></circle>
      </svg>
      <!-- <sd-tooltip
        attach-to-parent
        :active="isDragging"
        :auto-open="false"
        :show-arrow="false"
        :offset="[0, 8]"
      >
        <div class="sd--center">
          {{value}}
        </div>
      </sd-tooltip> -->
    </div>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
// import { SdTooltip } from '@/library'

export default defineComponent({
  name: 'SdTooltip',
  // components: {
  //   SdTooltip
  // },
  props: {
    isDragging: {
      type: Boolean,
      default: false
    },
    value: [Number, String]
  },
  setup (props, { emit }) {
    const handle = ref(null)
    onMounted(() => {
      emit(handle)
    })
    return { handle }
  }
})
</script>

<style lang="scss" scoped>
  @import '../SdElevation/mixins';

  .sd--slider{
    &__thumb-container{
      width: 24px;
      height:24px;
      position: absolute;
      z-index: 1000;
    }
    &__thumb{
      fill: var(--primary);
    }
  }
  .sd--center{
    text-align:center;
    font-size: 16px;
  }
</style>
