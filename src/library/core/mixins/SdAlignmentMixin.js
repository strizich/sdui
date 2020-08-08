import SdPropValidator from '@/library/core/utilities/SdPropValidator.js'

const alignment = ['flex-start', 'flex-end', 'space-between']
const flexDirection = ['row', 'row-reverse', 'initial']
export default {
  props: {
    align: {
      type: String,
      default: 'flex-start',
      ...SdPropValidator('align', alignment)
    },
    direction: {
      type: String,
      default: 'initial',
      ...SdPropValidator('direction', flexDirection)
    }
  },
  computed: {
    alignmentStyle: function () {
      return {
        'justify-content': this.align,
        'flex-direction': this.direction
      }
    }
  }
}
