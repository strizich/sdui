<template>
  <div class="demo__buttons">
    <sd-container full>
      <section-header
        title="Buttons"
        sub-title="clicky clicky"
        git="https://github.com/strizich/sdui-vite/tree/master/src/lib/components/SdButton"
      />
      <sd-row>
        <sd-cell :md="12">
          <div class="buttons__results">
            <template v-for="(color, index) in colors" :key="index">
              <sd-button
                :aria-label="`${color} button`"
                :theme="color"
                :icon="showIcon ? iconName : ''"
                :href="selectedTag === 'Link' ? '/link' : ''"
                :to="selectedTag === 'Route' ? '/route' : ''"
                :pill="selectedPill === 'Pill'"
                :rounded="selectedPill === 'Rounded'"
                :flat="selectedStyle === 'Flat'"
                :outline="selectedStyle === 'Outline'"
                :size="selectedSize"
                :block="isBlock"
                :align="selectedAlignment"
                :disabled="disabled"
                :icon-only="isIconOnly"
              >
                <span v-if="!isIconOnly">{{color}}</span>
              </sd-button>
            </template>
          </div>
        </sd-cell>
      </sd-row>
    </sd-container>
    <sd-container full>
      <sd-row class="group">
        <sd-cell class="group__options" :lg="3" :md="4" :sm="6" :xs="6">
          <sd-fieldset title="Button Size" stack>
            <sd-radio
              name="sizes"
              v-model="selectedSize"
              v-for="(size, index) in sizes"
              :key="`size-${index}`"
              :value="size.value">
              {{size.name}}
            </sd-radio>
          </sd-fieldset>
        </sd-cell>
        <sd-cell class="group__options" :lg="3" :md="4" :sm="6" :xs="6">
          <sd-fieldset title="Types" stack>
            <sd-radio
              name="pills"
              v-for="(pill, index) in pills"
              :key="`pill-${index}`"
              :value="pill"
              v-model="selectedPill">
              {{pill}}
            </sd-radio>
          </sd-fieldset>
        </sd-cell>
        <sd-cell class="group__options" :lg="3" :md="4" :sm="6" :xs="6">
          <sd-fieldset title="Style" stack>
            <sd-radio
              name="styles"
              v-for="(style, index) in boxStyle"
              :key="`style-${index}`"
              :value="style"
              v-model="selectedStyle">
              {{style}}
            </sd-radio>
          </sd-fieldset>
        </sd-cell>
        <sd-cell class="group__options" :lg="3" :md="4" :sm="6" :xs="6">
          <sd-fieldset title="Layout" stack>
            <sd-checkbox v-model="isBlock">
              Full Width
            </sd-checkbox>
            <sd-checkbox v-model="showIcon">
              Icon
            </sd-checkbox>
            <sd-checkbox v-model="disabled">
              Disabled
            </sd-checkbox>
            <sd-checkbox v-model="isIconOnly" :disabled="!showIcon">
              Icon Only
            </sd-checkbox>
          </sd-fieldset>
        </sd-cell>
        <sd-cell class="group__options" :lg="2" :md="2" :sm="6" :xs="6">
          <sd-fieldset title="Alignment" stack>
            <sd-radio
              name="Alignment"
              v-for="(align, index) in alignmentOptions"
              v-model="selectedAlignment"
              :key="`alignment-${index}`"
              :value="align.value"
              :disabled="!isBlock"
            >
              {{align.name}}
            </sd-radio>
          </sd-fieldset>
        </sd-cell>
        <sd-cell class="group__options" :lg="3" :md="4" :sm="6" :xs="6">
          <sd-field
            label="Icon Name"
            name="sizes"
            :disabled="!showIcon"
            v-model="iconName">
            {{size.name}}
          </sd-field>
        </sd-cell>
      </sd-row>
    </sd-container>
  </div>
</template>

<script>
import { reactive, toRefs, defineComponent } from 'vue'
import SectionHeader from '@/components/SectionHeader'
export default defineComponent({
  name: 'DemoButton',
  components: { SectionHeader },
  setup () {
    const state = reactive({
      iconName: 'face',
      selectedSize: 'md',
      selectedPill: 'Default',
      selectedStyle: 'Default',
      selectedTag: 'Default',
      isBlock: false,
      isIconOnly: false,
      showIcon: false,
      disabled: false,
      selectedAlignment: 'center',
      alignmentOptions: [
        { name: 'Center', value: 'center' },
        { name: 'Start', value: 'flex-start' },
        { name: 'End', value: 'flex-end' },
        { name: 'Around', value: 'space-around' },
        { name: 'Between', value: 'space-between' }
      ],
      colors: [
        'primary',
        'secondary',
        'default',
        'warning',
        'danger',
        'success'
      ],
      tagType: ['Default', 'Route', 'Link'],
      boxStyle: ['Default', 'Flat', 'Outline'],
      pills: ['Default', 'Pill', 'Rounded'],
      sizes: [
        { name: 'Small', value: 'sm' },
        { name: 'Medium (Default)', value: 'md' },
        { name: 'Large', value: 'lg' },
        { name: 'Extra Large', value: 'xl' }
      ]
    })
    return { ...toRefs(state) }
  }
})
</script>

<style lang="scss" scoped>
@import '/node_modules/@strizich/sdui/dist/scss/breakpoints';
.group__options{
  margin-bottom: 32px;
}
.buttons__results{
  padding: 64px 32px;
    @include breakpoint-down('sm'){
    padding: 64px 16px;
  }
  margin-bottom: 32px;
  background-color: var(--background-accent);
}
</style>
