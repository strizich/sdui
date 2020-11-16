<template>
  <div class="demo">
    <div id="chicklets" class="demo__chicklets">
      <section-header
        title="Chicklets"
        sub-title="Chewy"
        hash="#chicklets"
        git="https://github.com/strizich/sdui/blob/master/src/library/components/SdChicklet/SdChicklet.vue"
      />
      <div class="demo__content">
        <section>
          <h5>Themes</h5>
          <sd-chicklet
            v-for="theme in state.themes"
            :key="`1-${theme.color}`"
            :theme="theme.color"
          >
            {{theme.label}}
          </sd-chicklet>
        </section>
        <section>
          <h5>Dismissable</h5>
          <sd-chicklet
            v-for="theme in state.themes"
            :key="`2-${theme.color}`"
            :theme="theme.color"
            dismissable
          >
            {{theme.label}}
          </sd-chicklet>
        </section>
        <section>
          <h5>Chicklets with icons</h5>
          <sd-chicklet
            v-for="theme in state.themes"
            :key="`3-${theme.color}`"
            :theme="theme.color"
            :icon="theme.icon"
          >
            {{theme.label}}
          </sd-chicklet>
        </section>
      </div>
    </div>
    <div id="sheets" class="demo__sheets" >
      <section-header
        title="Sheets"
        sub-title="Construction Paper"
        hash="#sheets"
        git="https://github.com/strizich/sdui/blob/master/src/library/components/SdSheet/SdSheet.vue"
      />
        <h4>Default Sheets</h4>
        <sd-row gutterless style="margin-bottom: 32px">
          <sd-col
            v-for="theme in state.themes"
            :sm="4"
            :key="`sheet-${theme.color}`"
            style="height: 75px"
          >
            <sd-sheet :theme="theme.color">
              Custom content here
            </sd-sheet>
          </sd-col>
        </sd-row>
        <h4>Padded Sheets</h4>
        <sd-row gutterless>
          <sd-col
            v-for="theme in state.themes"
            :sm="4"
            :key="`sheet-${theme.color}`"
          >
            <sd-sheet :theme="theme.color" padded>
              <h3>Lorem ipsum dolor sit amet</h3>
              <p>Consectetur adipiscing elit.
                Aliquam finibus nisi ipsum, eu varius nulla euismod efficitur.
                Donec ultricies, augue a dictum dictum.</p>
              <p>Consectetur adipiscing elit.
                Donec ultricies, augue a dictum dictum.</p>
            </sd-sheet>
          </sd-col>
        </sd-row>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import SectionHeader from '@/components/SectionHeader'
export default {
  components: { SectionHeader },
  setup () {
    const state = reactive({
      themes: [{
        color: 'primary',
        label: 'Primary',
        icon: 'add_box'
      }, {
        color: 'secondary',
        label: 'Secondary',
        icon: 'add_circle'
      }, {
        color: 'success',
        label: 'Success',
        icon: 'check'
      }, {
        color: 'danger',
        label: 'Danger',
        icon: 'not_interested'
      }, {
        color: 'warning',
        label: 'Warning',
        icon: 'access_alarm'
      }, {
        color: 'dark',
        label: 'Dark',
        icon: 'wb_cloudy'
      }]
    })
    return { state }
  }
}
</script>

<style lang="scss" scoped>
.demo{
  padding:40px;
}
</style>
