import { ref, reactive, computed, watch, onUpdated } from 'vue'

const useDraggable = (rootEl, handleEl, initValue, step, min, max) => {
  const thing = ref(initValue)
  console.log('huh', thing.value)
  const position = reactive({
    init: false,
    x: 207,
    y: 0,
    minX: 0,
    maxX: 0,
    minY: 0,
    maxY: 0,
    isMax: false,
    isMin: false,
    dragStartX: null,
    dragStartY: null,
    isDragging: false,
    width: 0,
    height: 0,
    rootWidth: 0,
    rootHeight: 0,
    initValue: initValue,
    pctComplete: 0,
    step,
    min,
    max
  })
  const onMouseDown = e => {
    const { clientX, clientY } = e
    position.dragStartX = clientX - position.x
    position.dragStartY = clientY - position.y
    position.isDragging = true
    document.addEventListener('mouseup', onMouseUp)
    document.addEventListener('mousemove', onMouseMove)
  }

  const onMouseMove = e => {
    const { clientX, clientY } = e
    position.x = Math.max(1, Math.min(clientX - position.dragStartX, position.maxX))
    position.y = clientY - position.dragStartY
  }

  const onMouseUp = e => {
    // const { clientX, clientY } = e
    position.dragStartX = null
    position.dragStartY = null
    position.isDragging = false
    document.removeEventListener('mouseup', onMouseUp)
    document.removeEventListener('mousemove', onMouseMove)
  }
  // const getInitalValue = (value, max, width) => {
  //   return (value / max) * width
  // }
  watch(rootEl, (rootEl, prevRootEl, onCleanup) => {
    if (rootEl instanceof HTMLElement) {
      const rect = rootEl.getBoundingClientRect(rootEl)
      position.maxX = Math.round(rect.width - (2 / position.width))
      position.minX = 0
      position.rootWidth = rect.width
      position.rootHeight = rect.height
    }
  })

  watch(handleEl, (handleEl, prevHandleEl, onCleanup) => {
    if (handleEl instanceof HTMLElement) {
      const handle = handleEl.getBoundingClientRect(handleEl)
      position.init = true
      position.width = Math.round(handle.width)
      position.height = Math.round(handle.height)
      handleEl.addEventListener('mousedown', onMouseDown)
      onCleanup(() => {
        // cleanup
      })
    }
  })

  onUpdated(() => {
    console.log(initValue)
  })

  const quantize = (value) => {
    const numSteps = Math.round(value / step)
    return numSteps * step
  }

  const result = computed(() => {
    // const delta = props.step || (props.max - props.min) / 100
    position.pctComplete = position.x / position.rootWidth
    const value = min + position.pctComplete * (max - min)
    if (value !== max && value !== min) {
      return quantize(value)
    }
    if (position.initValue > value) {
      return position.initValue
    }
    return value
  })

  return { position, result }
}

export default useDraggable
