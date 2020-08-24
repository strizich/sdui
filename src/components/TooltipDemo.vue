<template>
  <section>
    <h2>Tooltip</h2>
    <div class="demo">
      <sd-button flat>
        Tooltip Top
        <sd-tooltip placement="top">
          <span>text</span>
        </sd-tooltip>
      </sd-button>
      <sd-button flat>
        Tooltip Left
        <sd-tooltip theme="success" placement="left">
          <span>text</span>
        </sd-tooltip>
      </sd-button>
      <sd-button flat>
        Tooltip Right
        <sd-tooltip theme="danger" placement="right">
          <span>text</span>
        </sd-tooltip>
      </sd-button>
      <sd-button flat>
        Tooltip Bottom
        <sd-tooltip theme="secondary" placement="bottom">
          <span>text</span>
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
