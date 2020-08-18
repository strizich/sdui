<template>
  <div class="container">
    <sd-button @click="buttonClick">
      Open Modal
    </sd-button>
    <sd-button theme="default" flat href="http://www.github.com" target="_blank">
      Github.com (External Link)
    </sd-button>
     <sd-button theme="secondary" flat to="about">
      About (Router Link)
    </sd-button>

    <sd-dialog :active="state.modal" @update:active="(e) => handleClose(e)" size="sm">
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
    <div>
      <p class="sd--text__lead">Lead</p>
      <h1 class="sd--text__headline">Headline</h1>
      <sd-fieldset title="Checkboxes">
        <sd-checkbox v-model="state.simpleCheck">Simple Checkbox</sd-checkbox>
        <sd-checkbox v-model="state.objectCheck.checked">{{state.objectCheck.name}}</sd-checkbox>
        <sd-checkbox v-model="state.valueCheck" true-value="yup" false-value="nope">Single Checkbox w/ value</sd-checkbox>
      </sd-fieldset>
      <sd-fieldset title="Fruit">
        <sd-checkbox
          v-for="(fruit, index) in list"
          :key="index"
          v-model="state.arrayCheck"
          :value="fruit"
        >
          {{fruit}}
        </sd-checkbox>
      </sd-fieldset>
      <sd-fieldset title="Radios">
        <sd-radio name="radios" v-model="state.radioValue" value="Radio 1">Radio 1</sd-radio>
        <sd-radio name="radios" v-model="state.radioValue" value="Radio 2">Radio 2</sd-radio>
      </sd-fieldset>
    </div>
  </div>
<pre>
<code>
simpleCheck: {{state.simpleCheck}}
valueCheck: {{state.valueCheck}}
arrayCheck: {{state.arrayCheck}}
checkboxOptions: {{list}}
radioValue: {{state.radioValue}}
objectCheck: {{state.objectCheck}}

</code>
</pre>
</template>

<script>
import { defineComponent, reactive } from 'vue'
import SdButton from '@/library/components/SdButton'
import SdFieldset from '@/library/components/SdField'
import SdCheckbox from '@/library/components/SdCheckbox'
import SdDialog, { SdDialogTitle, SdDialogContent, SdDialogFooter } from '@/library/components/SdDialog'
import SdRadio from '@/library/components/SdRadio'

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
    SdRadio
  },
  setup () {
    const list = ['apple', 'orange', 'pear']
    const state = reactive({
      modal: false,
      simpleCheck: false,
      objectCheck: {
        name: 'Checkbox object',
        checked: false
      },
      arrayCheck: [],
      radioValue: '',
      valueCheck: 'nope'
    })
    const buttonClick = () => {
      state.modal = !state.modal
    }
    const handleClose = (event) => {
      state.modal = event
    }

    return { state, handleClose, buttonClick, list }
  }
})
</script>

<style lang="scss">
  .container{
    padding: 40px;
  }
</style>
