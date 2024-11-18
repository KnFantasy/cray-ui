import { describe, test, expect, vi, beforeEach } from 'vitest'
import { DOMWrapper, mount, VueWrapper } from '@vue/test-utils'
import Tooltip from './Tooltip.vue'

vi.mock('@popperjs/core')
const onVisibleChange = vi.fn()

let wrapper: VueWrapper
let triggerArea: DOMWrapper<HTMLElement>

describe('Tooltip.vue', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    wrapper = mount(() =>
      <div>
        <div id="outside"></div>
        <Tooltip content="hello tooltip" trigger='click' onVisibleChange={onVisibleChange}>
          <button id="trigger">Trigger</button>
        </Tooltip>
      </div>
      , {
        attachTo: document.body
      })
    triggerArea = wrapper.find('#trigger')
  })

  test('静态', async () => {
    expect(triggerArea.exists()).toBeTruthy()
    expect(wrapper.find('.cray-tooltip__popper').exists()).toBeTruthy()
    expect(wrapper.find('.cray-tooltip__popper').isVisible()).toBeFalsy()
  })

  test('点击', async () => {
    triggerArea.trigger('click')
    await vi.runAllTimers()
    expect(wrapper.find('.cray-tooltip__popper').isVisible()).toBeTruthy()
    expect(wrapper.get('.cray-tooltip__popper').text()).toBe('hello tooltip')
    expect(onVisibleChange).toHaveBeenCalledWith(true)

    wrapper.get('#outside').trigger('click')
    await vi.runAllTimers()
    expect(wrapper.find('.cray-tooltip__popper').isVisible()).toBeFalsy()
    expect(onVisibleChange).toHaveBeenLastCalledWith(false)
  })
})