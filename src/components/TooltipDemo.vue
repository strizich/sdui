<template>
  <section>
    <h2>Tooltip</h2>
    <div class="demo">
      <sd-button>
        Tooltip Top
        <sd-tooltip placement="top">
          <span>Primary (default)</span>
        </sd-tooltip>
      </sd-button>
      <sd-button flat>
        Tooltip Left
        <sd-tooltip theme="success" placement="left">
          <span>Success Tooltip</span>
        </sd-tooltip>
      </sd-button>
      <sd-button flat>
        Tooltip Right
        <sd-tooltip theme="danger" placement="right">
          <span>Danger Tooltip</span>
        </sd-tooltip>
      </sd-button>
      <sd-button flat>
        Tooltip Bottom
        <sd-tooltip theme="secondary" placement="bottom">
          <span>Secondary</span>
        </sd-tooltip>
      </sd-button>
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue'
import SdButton from '@/library/components/SdButton'
import SdTooltip from '@/library/components/SdTooltip'

export default defineComponent({
  components: { SdTooltip, SdButton }
})
</script>

<style lang="scss" scoped>

</style>
