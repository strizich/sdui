<template>
<div class="demo">
  <section-header title="Toast Notifications" sub-title="mmmmm tasty..."/>
  <sd-container>
    <sd-row>
      <sd-col :md="4">
        <sd-field label="Content" v-model="state.toast.content" :disabled="state.toast.active"/>
        <sd-field label="Delay (ms)" type="number" v-model.number="state.toast.duration" :disabled="state.toast.active"/>
        <sd-fieldset title="Placement">
          <sd-checkbox v-model="state.toast.dismissable" :disabled="state.toast.active">Dismissable</sd-checkbox>
          <sd-checkbox v-model="state.toast.persistant" :disabled="state.toast.active">Persistant</sd-checkbox>
        </sd-fieldset>
      </sd-col>
      <sd-col :md="3">
        <sd-fieldset title="Placement">
          <sd-radio
            name="placement"
            v-for="placement in state.toastPlacement"
            :key="placement.value"
            v-model="state.toast.placement"
            :value="placement.value"
            :disabled="state.toast.active"
          >
            {{placement.label}}
          </sd-radio>
        </sd-fieldset>
      </sd-col>
      <sd-col :md="3">
        <sd-fieldset title="Theme">
          <sd-radio
            name="themes"
            v-for="theme in state.toastThemes"
            :key="theme.value"
            v-model="state.toast.theme"
            :value="theme.value"
            :disabled="state.toast.active"
          >
            {{theme.label}}
          </sd-radio>
        </sd-fieldset>
      </sd-col>
    </sd-row>
  </sd-container>
  <sd-button
    @click="state.toast.active = true"
    :theme="primary"
    :disabled="state.toast.active"
    size="lg"
  >
    Toggle Toast
  </sd-button>
  <sd-toast
    v-model:active="state.toast.active"
    :theme="state.toast.theme"
    :placement="state.toast.placement"
    :dismissable="state.toast.dismissable"
    :persistant="state.toast.persistant"
    :duration="state.toast.duration"

  > <div class="custom-toast">
      <span>
        {{state.toast.content}}
      </span>
      <sd-button size="sm" theme="dark">Button</sd-button>
    </div>
  </sd-toast>
</div>

</template>

<script>
import SectionHeader from '@/components/SectionHeader'
import { reactive } from 'vue'
export default {
  components: { SectionHeader },
  setup () {
    const state = reactive({
      toast: {
        theme: 'dark',
        placement: 'top',
        active: false,
        content: 'mmmm toasty.',
        dismissable: false,
        persistant: false,
        duration: 3000
      },
      toastThemes: [
        {
          label: 'Primary',
          value: 'primary'
        }, {
          label: 'Secondary',
          value: 'secondary'
        }, {
          label: 'Success',
          value: 'success'
        }, {
          label: 'Danger',
          value: 'danger'
        }, {
          label: 'Warning',
          value: 'warning'
        }, {
          label: 'Dark',
          value: 'dark'
        }
      ],
      toastPlacement: [{
        label: 'Top',
        value: 'top'
      }, {
        label: 'Top Left',
        value: 'top-left'
      }, {
        label: 'Top Right',
        value: 'top-right'
      }, {
        label: 'Bottom',
        value: 'bottom'
      }, {
        label: 'Bottom Left',
        value: 'bottom-left'
      }, {
        label: 'Bottom Right',
        value: 'bottom-right'
      }]
    })
    return {
      state
    }
  }
}
</script>

<style lang="scss" scoped>
.demo{
  padding:40px;
}
.custom-toast{
  display:flex;
  justify-content: space-between;
  align-items:center;
  width:100%;
}
</style>
