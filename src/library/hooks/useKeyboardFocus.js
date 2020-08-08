import { ref, computed, onMounted } from 'vue'

const useKeyboardFocus = ($el) => {
  let hasEvents = false
  let eventTarget = null
  let supportsPassiveEvent = false
  const currentElement = ref(null)

  const checkPassiveEventSupport = () => {
    try {
      const opts = Object.defineProperty({}, 'passive', {
        get () {
          supportsPassiveEvent = { passive: true }
        }
      })
      window.addEventListener('ghost', null, opts)
    } catch (e) {}
  }

  const setKeyboardInteraction = ({ keycode, target }) => {
    currentElement.value = target
  }

  const setMouseAndTouchInteraction = (event) => {
    currentElement.value = null
  }

  const createKeyboardEvents = () => {
    eventTarget.addEventListener('keyup', setKeyboardInteraction)
  }

  const createPointerEvents = () => {
    eventTarget.addEventListener('pointerup', setMouseAndTouchInteraction)
  }

  const createMSPointerEvents = () => {
    eventTarget.addEventListener('MSPointerUp', setMouseAndTouchInteraction)
  }

  const createMouseAndTouchEvents = () => {
    eventTarget.addEventListener('mouseup', setMouseAndTouchInteraction)
    if ('ontouchend' in window) {
      eventTarget.addEventListener('touchend', setMouseAndTouchInteraction, supportsPassiveEvent)
      console.log('inwindow event')
    }
  }

  const bindEvents = () => {
    if (window.PointerEvent) {
      createPointerEvents()
    } else if (window.MSPointerEvent) {
      createMSPointerEvents()
    } else {
      createMouseAndTouchEvents()
    }

    createKeyboardEvents()
  }

  const createEvents = () => {
    if (!hasEvents) {
      eventTarget = document.body
      checkPassiveEventSupport()
      bindEvents()
      hasEvents = true
    }
  }

  const hasFocus = computed(() => {
    return currentElement.value === $el.value
  })

  onMounted(() => {
    createEvents()
  })

  return hasFocus
}

export default useKeyboardFocus
