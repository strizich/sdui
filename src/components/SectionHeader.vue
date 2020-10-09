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
      <sd-toast
        :placement="placement"
        :dismissable="false"
        theme="success"
        v-model:active="active"
      >
        <div class="tip__content">
          <span v-if="content">{{content}}</span>
          <small v-if="subContent">{{subContent}}</small>
        </div>
      </sd-toast>
    </sd-button>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'SectionHeader',
  props: {
    hash: {
      type: String
    },
    title: String,
    subTitle: String,
    placement: {
      type: String,
      default: 'top'
    }
  },
  setup (props) {
    const toast = reactive({
      active: false,
      content: '',
      subContent: ''
    })

    const route = useRouter()

    const handleCopy = () => {
      const host = window.location.host
      const currentRoute = route.currentRoute.value.path
      let copiedResult = ''
      if (props.hash) {
        copiedResult = host + currentRoute + props.hash
      } else {
        copiedResult = host + currentRoute
      }
      navigator.clipboard.writeText(copiedResult).then(
        () => {
          toast.theme = ''
          toast.active = true
          toast.content = 'Copied!'
          toast.subContent = 'Ready for paste.'
        }, () => {
          toast.active = true
          toast.theme = 'danger'
          toast.content = 'Something went wrong.'
          toast.subContent = 'Nothing Copied...'
        }
      )
    }

    return { ...toRefs(toast), handleCopy }
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
  }
  & > small{
    margin-top: 4px;
    display:block;
  }
}
</style>
