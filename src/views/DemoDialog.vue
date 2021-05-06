<template>
  <section>
    <sd-container full>
    <section-header
      title="Dialogs"
      sub-title="The developer's worst nightmare."
      hash="#dialogs"
      git="https://github.com/strizich/sdui-vite/tree/master/src/lib/components/SdDialog"
    />
    <div class="demo__content">
      <div class="demo__triggers">
        <sd-fieldset
          title="Dialog Size"
          tip="No effect on mobile devices"
          tip-placement="right"
        >
          <sd-radio v-model="modalSize" value="sm">Small</sd-radio>
          <sd-radio v-model="modalSize" value="md">Medium</sd-radio>
          <sd-radio v-model="modalSize" value="lg">Large</sd-radio>
        </sd-fieldset>
        <sd-button @click="handleModal">
          Open Dialog (Modal)
        </sd-button>
        <sd-button
          @click="handleAsideLeft"
        >
          Left Aside
        </sd-button>
        <sd-button
          @click="handleAside"
        >
          Right Aside
        </sd-button>
      </div>
      <sd-dialog
        :active="active"
        :size="modalSize"
        @update:active="handleModalClose"
      >
        <sd-dialog-header title="Here be the title" subtitle="Here be the subtitle"/>
        <sd-dialog-content>
          <div>All sorts of things go in here.</div>
        </sd-dialog-content>
        <sd-dialog-footer>
          <sd-button
            size="sm"
            @click="handleModalClose"
            theme="default"
          >
            Dismiss
          </sd-button>
        </sd-dialog-footer>
      </sd-dialog>

      <sd-dialog
        v-model:active="activeAside"
        :size="modalSize"
        aside
      >
        <sd-dialog-header title="Aside Modal" subtitle="Subtitles go here"/>
        <sd-dialog-content>
          <div>
            All sorts of things go in here.
            This model is using v-model:active`
          </div>
        </sd-dialog-content>
        <sd-dialog-footer>
          <sd-button size="sm"
            theme="default"
            @click="handleAsideClose"
          >
            Dismiss
          </sd-button>
        </sd-dialog-footer>
      </sd-dialog>

      <sd-dialog
        :active="activeAsideLeft"
        :size="modalSize"
        placement="left"
        aside
        @update:active="handleAsideLeftClose"
      >
        <sd-dialog-header
          title="Aside Modal"
          subtitle="Subtitles go here"
        />
        <sd-dialog-content>
          <div>
            All sorts of things go in here.
          </div>
        </sd-dialog-content>
        <sd-dialog-footer>
          <sd-button
            size="sm"
            theme="default"
            @click="handleAsideLeftClose"
          >
            Dismiss
          </sd-button>
        </sd-dialog-footer>
      </sd-dialog>
    </div>
    </sd-container>
  </section>
</template>

<script>
import { reactive, toRefs } from 'vue'
import SectionHeader from '@/components/SectionHeader'

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
    SectionHeader
  }
}
</script>

<style lang="scss" scoped>
.demo__triggers{

}
</style>
