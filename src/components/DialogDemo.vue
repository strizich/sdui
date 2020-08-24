<template>
  <section>
    <h2>Dialogs</h2>
    <div class="demo__content">
      <sd-button @click="handleModal">
        Open Dialog
      </sd-button>
      <sd-button @click="handleAside">
        Open Aside Modal
      </sd-button>
      <sd-dialog :active="active" @update:active="handleModalClose" size="md">
        <sd-dialog-title>
          Header
        </sd-dialog-title>
        <sd-dialog-content>
          <div>
            All sorts of things go in here.
          </div>
        </sd-dialog-content>
        <sd-dialog-footer>
          <sd-button size="sm" flat @click="handleModalClose">Button</sd-button>
        </sd-dialog-footer>
      </sd-dialog>
      <sd-dialog :active="activeAside" @update:active="handleAsideClose" size="sm" aside>
        <sd-dialog-title>
          Aside Dialog Header
        </sd-dialog-title>
        <sd-dialog-content>
          <div>
            All sorts of things go in here.
          </div>
        </sd-dialog-content>
        <sd-dialog-footer>
          <sd-button size="sm" flat @click="handleAsideClose">Button</sd-button>
        </sd-dialog-footer>
      </sd-dialog>
    </div>
  </section>
</template>

<script>
import { reactive, toRefs } from 'vue'
import SdButton from '@/library/components/SdButton'
import SdDialog, { SdDialogTitle, SdDialogContent, SdDialogFooter } from '@/library/components/SdDialog'
export default {
  name: 'ModalDemo',
  setup () {
    const state = reactive({
      active: false,
      activeAside: false
    })

    const handleModal = () => {
      state.active = !state.active
    }
    const handleModalClose = () => {
      state.active = false
    }
    const handleAside = () => {
      state.activeAside = !state.activeAside
    }
    const handleAsideClose = () => {
      state.activeAside = false
    }
    return { ...toRefs(state), handleModalClose, handleModal, handleAside, handleAsideClose }
  },
  components: { SdButton, SdDialog, SdDialogTitle, SdDialogContent, SdDialogFooter }
}
</script>

<style lang="scss" scoped>
.sd--button{
  margin-right: 16px;
}
</style>
