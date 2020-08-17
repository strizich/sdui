<template>
  <div class="home">
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
      <h1>Checkboxes</h1>
      <sd-fieldset stack>
        <sd-checkbox v-model="state.simpleCheck">Simple Checkbox</sd-checkbox>
        <sd-checkbox v-model="state.valueCheck" true-value="yup" false-value="nope">Single Checkbox w/ value</sd-checkbox>
        <sd-checkbox
          v-for="(fruit, index) in list"
          :key="index"
          v-model="state.arrayCheck"
          :value="fruit"
        >
          {{fruit}}
        </sd-checkbox>
      </sd-fieldset>
      </div>
  </div>
<pre>
<code>
simpleCheck: {{state.simpleCheck}}
valueCheck: {{state.valueCheck}}
arrayCheck: {{state.arrayCheck}}
</code>
</pre>
</template>

<script>
import { defineComponent, reactive } from 'vue'
import SdButton from '@/library/components/SdButton'
import SdFieldset from '@/library/components/SdField'
import SdDialog, { SdDialogTitle, SdDialogContent, SdDialogFooter } from '@/library/components/SdDialog'
import SdCheckbox from '@/library/components/SdCheckbox'

export default defineComponent({
  components: { SdButton, SdDialog, SdDialogTitle, SdDialogContent, SdDialogFooter, SdCheckbox, SdFieldset },
  name: 'Home',
  setup () {
    const list = ['apple', 'orange', 'pear']
    const state = reactive({
      modal: false,
      simpleCheck: false,
      arrayCheck: [],
      valueCheck: ''
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
