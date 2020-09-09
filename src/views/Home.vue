<template>
<div class="home__nav">
  <sd-container full>
    <router-link to="#controls">Controls</router-link>
    <router-link to="#elevation">Elevation</router-link>
    <router-link to="#cards">Cards</router-link>
    <router-link to="#radios">Elevation</router-link>
    <router-link to="#checkboxes">Cards</router-link>
    <router-link to="#dialogs">Radios</router-link>
    <router-link to="#tooltips">Tooltips</router-link>
    <router-link to="#icons">Icons</router-link>
  </sd-container>
</div>
<div class="home container">
  <div class="container__content">
    <form-control-demo id="controls"/>
    <elevation-demo id="elevation" />
    <card-demo id="cards"/>
    <radio-demo id="radios"/>
    <checkbox-demo id="checkboxes"/>
    <dialog-demo id="dialogs"/>
    <tooltip-demo id="tooltips"/>
    <icon-demo id="icons"/>
  </div>
</div>
</template>

<script>
import { defineComponent, reactive, ref, toRefs } from 'vue'
import FormControlDemo from '@/components/FormControlDemo'
import RadioDemo from '@/components/RadioDemo'
import CardDemo from '@/components/CardDemo'
import ElevationDemo from '@/components/ElevationDemo'
import DialogDemo from '@/components/DialogDemo'
import CheckboxDemo from '@/components/CheckboxDemo'
import TooltipDemo from '@/components/TooltipDemo'
import IconDemo from '@/components/IconDemo'
import { SdContainer } from '@/library'
export default defineComponent({
  name: 'Home',
  components: {
    IconDemo,
    CardDemo,
    DialogDemo,
    RadioDemo,
    CheckboxDemo,
    TooltipDemo,
    ElevationDemo,
    FormControlDemo,
    SdContainer
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
  .home{
    &__nav{
      position: sticky;
      top: 50px;
      padding: 8px 24px;
      background: var(--background);
      z-index: 500;
      border-bottom: 1px solid var(--background-accent);
      @include breakpoint-down('sm'){
        display: none;
      }
      a{
        padding: 8px 16px;
        margin-right: 8px;
        display: inline-block;
        color: var(--secondary);
        border-radius: 3px;
        transition: color .1s ease-in-out, background-color .2s ease-in-out;
        &.router-link-exact-active{
          background-color: var(--background-highlight);
        }
        &:hover{
          background-color: var(--secondary);
          color: #fff;
          transition: color .3s ease-in-out;
        }
      }
    }
  }
  .container{
    padding: 24px;
    &__content{
      padding: 0;
    }
  }
  section{
    margin-bottom: 64px;
  }

</style>
