<template>
  <div class="home">
    <sd-button flat @click="buttonClick">Button</sd-button>
    <sd-dialog :active="state.modal" @update:active="(e) => handleClose(e)" size="sm">
      <sd-dialog-title>
        head
      </sd-dialog-title>
      <sd-dialog-content>
        <div>
          content
        </div>
      </sd-dialog-content>
      <sd-dialog-footer>
        <sd-button size="sm" flat @click="buttonClick">Button</sd-button>
      </sd-dialog-footer>
    </sd-dialog>
    <div>
      other thing
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'

import SdButton from '@/library/components/SdButton/SdButton'
import SdDialog from '@/library/components/SdDialog/SdDialog'
import SdDialogTitle from '@/library/components/SdDialog/SdDialogTitle'
import SdDialogContent from '@/library/components/SdDialog/SdDialogContent'
import SdDialogFooter from '@/library/components/SdDialog/SdDialogFooter'

export default {
  components: { SdButton, SdDialog, SdDialogTitle, SdDialogContent, SdDialogFooter },
  name: 'Home',
  setup () {
    const state = reactive({
      modal: true
    })
    const buttonClick = () => {
      state.modal = !state.modal
    }
    const handleClose = (event) => {
      state.modal = event
    }
    return { buttonClick, state, handleClose }
  }
}
</script>
