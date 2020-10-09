<template>
<div class="demo">
  <section-header title="Toast Notifications" sub-title="mmmmm tasty..."/>

  <sd-button @click="state.toastOne = true" theme="dark">Dark Toast!</sd-button>
  <sd-button @click="state.toastTwo = true" theme="primary">PrimaryToast!</sd-button>
  <sd-button @click="state.toastThree = true" theme="warning">Warning Toast!</sd-button>
  <sd-button @click="state.toastFour = true" theme="default">Default Toast!</sd-button>
  <sd-button @click="state.toastFive = true" theme="success">Success Toast!</sd-button>
  <sd-button @click="state.toastSix = true" theme="danger">Danger Toast!</sd-button>

  <sd-toast
    v-model:active="state.toastOne"
    theme="dark"
    placement="top-right"
    dismissable
  >
    Dark Toast
  </sd-toast>

   <sd-toast
    v-model:active="state.toastTwo"
    theme="primary"
    placement="top-left"
    dismissable
  >
    Primary Toast
  </sd-toast
>
  <sd-toast
    v-model:active="state.toastThree"
    theme="warning"
    placement="top"
    dismissable
  >
    Warning Toast
  </sd-toast
>
  <sd-toast
    v-model:active="state.toastFour"
    theme="default"
    placement="bottom"
    dismissable
  >
    Default Toast
  </sd-toast>

  <sd-toast
    v-model:active="state.toastFive"
    theme="success"
    placement="bottom-left"
    dismissable
  >
    Success Toast
  </sd-toast>

   <sd-toast
    v-model:active="state.toastSix"
    theme="danger"
    placement="bottom-right"
  > <div class="custom-toast">
      <span>
        Danger Toast w/ action button.
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
      toastOne: false,
      toastTwo: false,
      toastThree: false,
      toastFour: false,
      toastFive: false,
      toastSix: false
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
