<template>
  <section>
    <sd-container full>
    <section-header hash="#dialogs" title="Dialogs" sub-title="The developer's worst nightmare." />

    <div class="demo__content">
      <div class="demo__triggers">
      <sd-fieldset title="Dialog Size" tip="No effect on mobile devices" tip-placement="right">
        <sd-radio v-model="modalSize" value="sm">Small</sd-radio>
        <sd-radio v-model="modalSize" value="md">Medium</sd-radio>
        <sd-radio v-model="modalSize" value="lg">Large</sd-radio>
      </sd-fieldset>
      <sd-button @click="handleModal">
        Open Dialog
      </sd-button>
      <sd-button @click="handleAside">
        Aside Dialog
      </sd-button>
        <sd-button @click="handleAsideLeft">
        Left Dialog
      </sd-button>
      </div>
      <sd-dialog :active="active" @update:active="handleModalClose" :size="modalSize">
        <sd-dialog-title title="Normal Dialog"/>
        <sd-dialog-content>
          <div>All sorts of things go in here.</div>
        </sd-dialog-content>
        <sd-dialog-footer>
          <sd-button size="sm" flat @click="handleModalClose">Button</sd-button>
        </sd-dialog-footer>
      </sd-dialog>
      <sd-dialog v-model:active="activeAside" :size="modalSize" aside>
        <sd-dialog-title title="Aside Modal" subtitle="Subtitles go here"/>
        <sd-dialog-content>
          <div>
            All sorts of things go in here.
            This model is using v-model:active`
          </div>
        </sd-dialog-content>
        <sd-dialog-footer>
          <sd-button size="sm" flat @click="handleAsideClose">Button</sd-button>
        </sd-dialog-footer>
      </sd-dialog>
      <sd-dialog :active="activeAsideLeft" @update:active="handleAsideLeftClose" :size="modalSize" aside placement="left">
        <sd-dialog-title title="Aside Modal" subtitle="Subtitles go here"/>
        <sd-dialog-content>
          <div>
            All sorts of things go in here.
          </div>
        </sd-dialog-content>
        <sd-dialog-footer>
          <sd-button size="sm" flat @click="handleAsideLeftClose">Button</sd-button>
        </sd-dialog-footer>
      </sd-dialog>
    </div>
    </sd-container>
  </section>
</template>

<script>
import { reactive, toRefs } from 'vue'
import SectionHeader from '@/components/SectionHeader'
import {
  SdButton,
  SdFieldset,
  SdRadio,
  SdDialog,
  SdDialogTitle,
  SdDialogContent,
  SdDialogFooter,
  SdContainer
} from '@/library'

export default {
  name: 'ModalDemo',
  setup () {
    const state = reactive({
      active: false,
      activeAside: false,
      activeAsideLeft: false,
      modalSize: 'md'
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
    const handleAsideLeft = () => {
      state.activeAsideLeft = !state.activeAsideLeft
    }
    const handleAsideLeftClose = () => {
      state.activeAsideLeft = false
    }
    return {
      ...toRefs(state),
      handleModalClose,
      handleModal,
      handleAside,
      handleAsideClose,
      handleAsideLeft,
      handleAsideLeftClose
    }
  },
  components: {
    SdButton,
    SdDialog,
    SdDialogTitle,
    SdDialogContent,
    SdDialogFooter,
    SdRadio,
    SdFieldset,
    SdContainer,
    SectionHeader
  }
}
</script>

<style lang="scss" scoped>
.demo__triggers{
  .sd--button{
    margin-right: 16px;
  }
}
</style>
