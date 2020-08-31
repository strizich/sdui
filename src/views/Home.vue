<template>
<div class="container">
  <div class="container__content">
    <animated-icon-demo />
    <elevation-demo />
    <card-demo />
    <radio-demo />
    <checkbox-demo />
    <dialog-demo />
    <tooltip-demo />
    <icon-demo />
  </div>
</div>
</template>

<script>
import { defineComponent, reactive, ref, toRefs } from 'vue'
import AnimatedIconDemo from '@/components/AnimatedIconDemo'
import IconDemo from '@/components/IconDemo'
import RadioDemo from '@/components/RadioDemo'
import CardDemo from '@/components/CardDemo'
import ElevationDemo from '@/components/ElevationDemo'
import DialogDemo from '@/components/DialogDemo'
import CheckboxDemo from '@/components/CheckboxDemo'
import TooltipDemo from '@/components/TooltipDemo'
export default defineComponent({
  name: 'Home',
  components: {
    IconDemo,
    AnimatedIconDemo,
    CardDemo,
    DialogDemo,
    RadioDemo,
    CheckboxDemo,
    TooltipDemo,
    ElevationDemo
  },
  setup (props, context) {
    const list = ['apple', 'orange', 'pear']
    const meh = ref(null)
    const state = reactive({
      modal: false,
      modalTwo: false,
      someText: 'hey you',
      asideSize: 'sm',
      radioValue: '',
      popoverState: false
    })

    const buttonClick = () => {
      state.modal = !state.modal
    }

    const handleClose = (event) => {
      state.modal = event
    }

    const handleModalTwo = () => {
      state.modalTwo = !state.modalTwo
    }

    const handleModalTwoClose = (event) => {
      state.modalTwo = event
    }

    return { ...toRefs(state), handleClose, buttonClick, list, handleModalTwo, handleModalTwoClose, meh }
  }
})
</script>

<style lang="scss">
  .container{
    padding: 24px;
    &__content{
      padding: 32px 0;
    }
  }
  section{
    margin-bottom: 64px;
  }

</style>
