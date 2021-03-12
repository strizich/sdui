<template>
  <section class="demo__tooltips">
    <sd-container full>
      <section-header
        title="Tooltips"
        sub-title="Just the tip."
        git="https://github.com/strizich/sdui-vite/blob/master/src/lib/components/SdTooltip/SdTooltip.vue"
      />
      <div class="demo">
        <sd-fieldset title="Tooltips" tip="Tooltip in here too..." stack inline-label>
        <sd-button>
          Tooltip Top
          <sd-tooltip placement="top">
            <span>Primary (default)</span>
          </sd-tooltip>
        </sd-button>
        <sd-button flat>
          Tooltip Left
          <sd-tooltip theme="success" placement="left">
            <span>Success</span>
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
        </sd-fieldset>
      </div>
    </sd-container>
  </section>
</template>

<script>
import { defineComponent } from 'vue'
import SectionHeader from '@/components/SectionHeader'

export default defineComponent({
  components: { SectionHeader }
})
</script>

<style lang="scss" scoped>

</style>
