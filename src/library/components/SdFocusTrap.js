import Vue from 'vue'

// Restricts the users ability to focus on elements
// eg. Keep the user from focusing on elements
// behind a model.

export default {
  name: 'SdFocusTrap',
  abstract: true,
  methods: {
    setFocus: function () {
      window.setTimeout(() => {
        if (this.$el.tagName) {
          this.$el.setAttribute('tabindex', '-1')
          this.$el.focus()
        }
      }, 20)
    }
  },
  mounted () {
    this.setFocus()
  },
  render () {
    try {
      const defaultSlot = this.$slots.default
      if (!defaultSlot) {
        return null
      }

      if (defaultSlot.length > 1) {
        throw new Error()
      }
      return defaultSlot[0]
    } catch (e) {
      Vue.util.warn('SdFocusTrap can only render once, and with only exactly one child component', this)
    }

    return null
  }
}
