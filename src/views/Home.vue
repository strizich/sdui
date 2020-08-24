<template>
<div class="container">
  <sd-button
    type="link"
    href="https://github.com/strizich/v3-jsdesign"
    target="_blank"
  >
    Github
  </sd-button>

  <div class="container__content">
    <Suspense>
      <template #default>
        <card-demo/>
        <dialog-demo/>
        <radio-demo/>
        <checkbox-demo/>
        <tooltip-demo/>
      </template>
      <template #fallback>
        <div class="is--loading">
          <p>Loading spinner goes here</p>
        </div>
      </template>
    </Suspense>

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
        <input type="text" placeholder="geh" />
        <sd-error error="err"/>
      </sd-field>
    </sd-fieldset>
  </div>
</div>
</template>

<script>
import { defineComponent, reactive, ref, toRefs, defineAsyncComponent } from 'vue'
import SdButton from '@/library/components/SdButton'
import SdField, { SdFieldset, SdError } from '@/library/components/SdField'

const CardDemo = defineAsyncComponent(
  () => import('@/components/CardDemo')
)
const DialogDemo = defineAsyncComponent(
  () => import('@/components/DialogDemo')
)
const CheckboxDemo = defineAsyncComponent(
  () => import('@/components/CheckboxDemo')
)
const TooltipDemo = defineAsyncComponent(
  () => import('@/components/TooltipDemo')
)
const RadioDemo = defineAsyncComponent(
  () => import('@/components/RadioDemo')
)

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
    SdButton
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
    padding: 40px;
    &__content{
      padding: 32px 0;
    }
  }
  .is--loading{
    background: pink;
    height: 300px;
    color: #000;
    display:flex;
    align-items: center;
    justify-content: center;;
  }
  section{
    margin-bottom: 64px;
  }

</style>
