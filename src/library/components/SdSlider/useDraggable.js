import { reactive, computed, watch } from 'vue'

const useDraggable = (root, element) => {
  const position = reactive({
    init: false,
    x: 0,
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
    height: 0
  })

  const thumbStyle = computed(() => {
    return {
      position: 'absolute',
      left: position.x + 'px',
      // top: position.y + 'px',
      transition: 'transform .23s ease-in-out',
      transform: position.isDragging ? 'scale(1.1)' : '',
      cursor: position.isDragging ? 'grab' : 'pointer'
    }
  })

  const containerStyle = computed(() => {
    return {
      width: position.width + 'px',
      height: position.height + 'px'
    }
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
    position.x = Math.max(0, Math.min(clientX - position.dragStartX, position.maxX))
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

  watch(root, (root, prevRoot, onCleanup) => {
    if (root instanceof HTMLElement) {
      const rect = root.getBoundingClientRect(root)
      position.maxX = Math.round(rect.width - position.width)
      position.minX = 0
    }

    onCleanup(() => {
      // cleanup
    })
  })

  watch(element, (element, prevElement, onCleanup) => {
    if (element instanceof HTMLElement) {
      const handle = element.getBoundingClientRect(element)
      position.init = true
      position.width = Math.round(handle.width)
      position.height = Math.round(handle.height)
      element.addEventListener('mousedown', onMouseDown)
      onCleanup(() => {
        // cleanup
      })
    }
  })
  return { position, thumbStyle, containerStyle }
}

export default useDraggable
