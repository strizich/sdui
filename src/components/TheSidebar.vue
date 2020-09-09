<template>
  <div class="sidebar">
    <ul class="sidebar__list">
      <li class="sidebar__item">
        <router-link
          to="/"
          exact-active-class="sidebar__link--exact-active"
          active-class="sidebar__link--active"
          class="sidebar__link"
        >
          <sd-icon name="home"/>
          <span>Home</span>
        </router-link>
      </li>
      <li class="sd--nav__list-item">
        <router-link
          to="/about"
          exact-active-class="sidebar__link--exact-active"
          active-class="sidebar__link--active"
          class="sidebar__link"
        >
          <sd-icon name="info"/>
          <span>About</span>
        </router-link>
      </li>
    </ul>
    <div class="sidebar__options">
      <color-scheme />
      <hr class="sd--divider" />
      <sd-fieldset stack>
        <sd-select label="Sidebar Type" v-model="sidebarType" block>
          <option value="fixed">Fixed</option>
          <option value="floating">Floating</option>
        </sd-select>
      </sd-fieldset>
    </div>
  </div>
</template>

<script>
import ColorScheme from '@/components/ColorScheme'
import { reactive, toRefs, watch } from 'vue'
import { SdIcon, SdFieldset, SdSelect } from '@/library'
export default {
  name: 'TheSidebar',
  components: {
    ColorScheme,
    SdIcon,
    SdFieldset,
    SdSelect
  },
  emits: ['update:type'],
  props: {
    type: String
  },
  setup (props, { emit }) {
    const state = reactive({
      sidebarType: props.type
    })

    watch(() => state.sidebarType, (newValue) => {
      emit('update:type', newValue)
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar{
  position: sticky;
  top: 50px;
  left:0;
  bottom:0;
  align-self: stretch;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  max-height: calc(100vh - 50px);
  &__list{
    margin:32px 0 0 0;
    padding:0;
  }
  &__item{
    margin:0;
    padding:0;
  }
  &__link{
    display: flex;
    align-items: center;
    padding: 4px 8px;
    margin: 0 16px;
    color: var(--primary-highlight);
    border-radius: 3px;
    position: relative;
    &:hover{
      transition:background-color .23s ease-in-out;
      background-color: var(--background-highlight)
    }
    &:after{
      transition: left .23s ease-in-out;
      content:'';
      position: absolute;
      top:0;
      right:0;
      left:100%;
      bottom:0;
      background: var(--primary);
      z-index: 99;
    }
    &--active{
      color: #fff;
      &:after{
        background: var(--primary);
        left:0%;
      }
    }
    & > .sd--icon{
      position: relative;
      z-index: 100;
    }
    & > span{
      margin-left: 8px;
      position: relative;
      z-index: 100;
    }
  }
  &__options{
    margin: 8px 16px;

  }
}
</style>
