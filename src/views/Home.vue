<template>
<div class="home">
  <div class="home__nav">
    <sd-container full>
      <sd-router-link
        v-for="(link, index) in linkList"
        :key="`${link.name}-${index}`"
        :to="link.id"
        theme="secondary"
        flat
        hash
      >
        {{link.name}}
      </sd-router-link>
    </sd-container>
  </div>
  <div class="container">
    <div class="container__content">
      <form-control-demo id="controls" />
      <elevation-demo id="elevation" />
      <card-demo id="cards" />
      <radio-demo id="radios" />
      <checkbox-demo id="checkboxes" />
      <dialog-demo id="dialogs" />
      <tooltip-demo id="tooltips" />
      <icon-demo id="icons" />
    </div>
  </div>
</div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'
import FormControlDemo from '@/components/FormControlDemo'
import RadioDemo from '@/components/RadioDemo'
import CardDemo from '@/components/CardDemo'
import ElevationDemo from '@/components/ElevationDemo'
import DialogDemo from '@/components/DialogDemo'
import CheckboxDemo from '@/components/CheckboxDemo'
import TooltipDemo from '@/components/TooltipDemo'
import IconDemo from '@/components/IconDemo'
import { SdContainer, SdRouterLink } from '@/library'

const COMPONENT_SECTIONS = [
  {
    name: 'Controls',
    id: '#controls'
  }, {
    name: 'Elevation',
    id: '#elevation'
  }, {
    name: 'Cards',
    id: '#cards'
  }, {
    name: 'Radios',
    id: '#radios'
  }, {
    name: 'Checkboxes',
    id: '#checkboxes'
  }, {
    name: 'Dialogs',
    id: '#dialogs'
  }, {
    name: 'Tooltips',
    id: '#tooltips'
  }, {
    name: 'Icons',
    id: '#icons'
  }
]

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
    SdContainer,
    SdRouterLink
  },
  setup (props, context) {
    const list = ['apple', 'orange', 'pear']
    const linkList = COMPONENT_SECTIONS
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

    return {
      ...toRefs(state),
      handleClose,
      buttonClick,
      list,
      handleModalTwo,
      handleModalTwoClose,
      linkList
    }
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
      a {
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
