import { shallowMount } from '@vue/test-utils'
import SdCardMedia from './SdCardMedia.vue'

describe('SdCardMedia', () => {
  it('renders media class when passed', () => {
    const wrapper = shallowMount(SdCardMedia, {
      propsData: {
        ratio: '16-9'
      }
    })
    const expected = { 'sd--card__media--16-9': true }

    expect(wrapper.vm.mediaClasses).toEqual(expected)

    wrapper.setProps({
      ratio: '16x9'
    })
    expect(wrapper.vm.mediaClasses).toEqual(expected)

    wrapper.setProps({
      ratio: '16/9'
    })

    expect(wrapper.vm.mediaClasses).toEqual(expected)
    wrapper.setProps({
      ratio: '16:9'
    })
    expect(wrapper.vm.mediaClasses).toEqual(expected)
  })
})
