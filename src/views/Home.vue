<template>
  <div class="container">
    <sd-button @click="buttonClick">
      Open Modal
    </sd-button>
    <sd-button @click="handleModalTwo">
      Other Modal
    </sd-button>
    <sd-button theme="default" flat href="http://www.github.com" target="_blank">
      Github.com (External Link)
    </sd-button>
     <sd-button theme="secondary" flat to="about">
      About (Router Link)
    </sd-button>

    <sd-dialog :active="modal" @update:active="(e) => handleClose(e)" size="sm">
      <sd-dialog-title>
        head
      </sd-dialog-title>
      <sd-dialog-content>
        <div>
          <div>
            <input type="text"/>
          </div>
          <div>
            <input type="text"/>
          </div>
          <div>
            <input type="text"/>
          </div>
          <div>
          <input type="text"/>
          </div>
          <div>
            <input type="text"/>
          </div>
        </div>
      </sd-dialog-content>
      <sd-dialog-footer>
        <sd-button size="sm" flat @click="buttonClick">Button</sd-button>
      </sd-dialog-footer>
    </sd-dialog>

    <sd-dialog
      aside
      :fullscreen="false"
      :active="modalTwo"
      :size="asideSize"
    >
      <sd-dialog-title>
        head
      </sd-dialog-title>
      <sd-dialog-content>
        <div>
          <sd-fieldset title="Aside Size Test">
            <sd-radio name="radios" v-model="asideSize" value="sm">Small</sd-radio>
            <sd-radio name="radios" v-model="asideSize" value="md">Medium</sd-radio>
            <sd-radio name="radios" v-model="asideSize" value="lg">Large</sd-radio>
          </sd-fieldset>
        </div>
      </sd-dialog-content>
      <sd-dialog-footer>
        <sd-button size="md" flat @click="buttonClick">Button</sd-button>
      </sd-dialog-footer>
    </sd-dialog>
    <div>
      <p class="sd--text__lead">Lead</p>
      <h1 class="sd--text__headline">Headline</h1>
      <sd-fieldset title="Checkboxes">
        <sd-checkbox v-model="simpleCheck">Simple Checkbox</sd-checkbox>
        <sd-checkbox v-model="objectCheck.checked">{{objectCheck.name}}</sd-checkbox>
        <sd-checkbox v-model="valueCheck" true-value="yup" false-value="nope">Single Checkbox w/ value</sd-checkbox>
      </sd-fieldset>
      <sd-fieldset title="Fruit">
        <sd-checkbox
          v-for="(fruit, index) in list"
          :key="index"
          v-model="arrayCheck"
          :value="fruit"
        >
          {{fruit}}
        </sd-checkbox>
      </sd-fieldset>
      <sd-fieldset title="Radios">
        <sd-radio name="radios" v-model="radioValue" value="Radio 1">Radio 1</sd-radio>
        <sd-radio name="radios" v-model="radioValue" value="Radio 2">Radio 2</sd-radio>
      </sd-fieldset>
    </div>
  </div>
  <div class="some__container" style="display:flex; justify-content: center;">
    <sd-button @click="someText = 'your an all star'">
      Yay
      <sd-tooltip placement="top" theme="default">
        <span>{{someText}}</span>
      </sd-tooltip>
    </sd-button>

  </div>

<pre>
<code>
simpleCheck: {{simpleCheck}}
valueCheck: {{valueCheck}}
arrayCheck: {{arrayCheck}}
checkboxOptions: {{list}}
radioValue: {{radioValue}}
objectCheck: {{objectCheck}}

</code>
</pre>
</template>

<script>
import { defineComponent, reactive, ref, toRefs } from 'vue'
import SdButton from '@/library/components/SdButton'
import SdFieldset from '@/library/components/SdField'
import SdCheckbox from '@/library/components/SdCheckbox'
import SdDialog, { SdDialogTitle, SdDialogContent, SdDialogFooter } from '@/library/components/SdDialog'
import SdRadio from '@/library/components/SdRadio'
import { SdTooltip } from '@/library/components/SdPopover'
export default defineComponent({
  name: 'Home',
  components: {
    SdButton,
    SdDialog,
    SdDialogTitle,
    SdDialogContent,
    SdDialogFooter,
    SdCheckbox,
    SdFieldset,
    SdRadio,
    SdTooltip
  },
  setup (props, context) {
    const list = ['apple', 'orange', 'pear']
    const meh = ref(null)
    const state = reactive({
      modal: false,
      modalTwo: false,
      simpleCheck: false,
      objectCheck: {
        name: 'Checkbox object',
        checked: false
      },
      someText: 'hey you',
      asideSize: 'sm',
      arrayCheck: [],
      radioValue: '',
      valueCheck: 'nope',
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
  }

</style>
