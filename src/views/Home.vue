<template>
<div class="container">
  <div class="container__content">
    <elevation-demo/>
    <card-demo/>
    <radio-demo/>
    <checkbox-demo/>
    <dialog-demo/>
    <tooltip-demo/>

    <h3>Work in progress</h3>
    <p class="sd--text__lead">Lead</p>
    <h1 class="sd--text__headline">Headline</h1>
    <sd-fieldset title="Input Fields">
      <sd-field>
        <label>behh</label>
        <input type="text" placeholder="geh"/>
        <sd-error error="err"/>
      </sd-field>
      <sd-field>
        <label>behh</label>
        <input type="text" placeholder="geh"/>
        <sd-error error="err"/>
      </sd-field>
    </sd-fieldset>
  </div>
</div>
</template>

<script>
import { defineComponent, reactive, ref, toRefs } from 'vue'
import RadioDemo from '@/components/RadioDemo'
import CardDemo from '@/components/CardDemo'
import ElevationDemo from '@/components/ElevationDemo'
import DialogDemo from '@/components/DialogDemo'
import CheckboxDemo from '@/components/CheckboxDemo'
import TooltipDemo from '@/components/TooltipDemo'
import SdField, { SdFieldset, SdError } from '@/library/components/SdField'
export default defineComponent({
  name: 'Home',
  components: {
    CardDemo,
    DialogDemo,
    RadioDemo,
    CheckboxDemo,
    SdFieldset,
    SdField,
    SdError,
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
