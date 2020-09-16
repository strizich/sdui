<template>
  <div class="demo__header">
    <slot v-if="!title && !subTitle" />
    <div class="demo__header--group" v-if="title || subTitle">
      <p class="sd--text__caption" v-if="subTitle">{{subTitle}}</p>
      <h2 class="sd--text__header" v-if="title">{{title}}</h2>
    </div>
    <sd-button
      @click="handleCopy"
      :active="active"
      icon-only
      rounded
      flat
    >
      <sd-icon name="link"/>
      <sd-tooltip
        placement="right"
        :theme="theme"
        :auto-open="false"
        :active="active"
      >
        <div class="tip__content">
          <span v-if="content">{{content}}</span>
          <small v-if="subContent">{{subContent}}</small>
        </div>
      </sd-tooltip>
    </sd-button>
  </div>
</template>

<script>
import { defineComponent, reactive, watch, nextTick, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { SdTooltip, SdButton, SdIcon } from '@/library'

export default defineComponent({
  name: 'SectionHeader',
  components: { SdTooltip, SdButton, SdIcon },
  props: {
    hash: {
      type: String,
      required: true
    },
    title: String,
    subTitle: String
  },
  setup (props) {
    const tooltip = reactive({
      active: false,
      theme: 'primary',
      content: '',
      subContent: ''
    })

    const route = useRouter()

    const handleCopy = () => {
      const host = window.location.host
      const currentRoute = route.currentRoute.value.path
      const copiedResult = host + currentRoute + props.hash
      navigator.clipboard.writeText(copiedResult).then(
        () => {
          tooltip.theme = ''
          tooltip.active = true
          tooltip.content = copiedResult
          tooltip.subContent = 'Ready for paste!'
        }, () => {
          tooltip.active = true
          tooltip.theme = 'danger'
          tooltip.content = 'Something went wrong.'
          tooltip.subContent = 'Nothing Copied...'
        }
      )
    }

    watch(() => tooltip.active, (newValue) => {
      nextTick().then(() => {
        setTimeout(() => {
          tooltip.active = false
        }, 2500)
      })
    })
    return { ...toRefs(tooltip), handleCopy }
  }
})

</script>

<style lang="scss" scoped>
.demo{
  &__header{
    display:flex;
    margin-bottom: 32px;
    &--group{
      margin-right: 16px;
    }
  }

}
.tip__content{
  & > span {
    display:block;
    text-align: center;
  }
  & > small{
    margin-top: 4px;
    display:block;
    text-align: center;
  }
}
</style>