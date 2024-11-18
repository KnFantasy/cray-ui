import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Collapse from './Collapse.vue'
import CollapseItem from './CollapseItem.vue'
describe('Collapse.vue', () => {
  test('mount另一种写法，可以用emitted捕获自定义事件', async () => {
    const wrapper = mount(Collapse, {
      props: {
        modelValue: ['a']
      },
      slots: {
        default:
          (<>
            <CollapseItem name="a" title="title a">
              content a
            </CollapseItem>
            <CollapseItem name="b" title="title b">
              content b
            </CollapseItem>
            <CollapseItem name="c" title="title c" disabled>
              content c
            </CollapseItem>
          </>)
      },
      global: {
        stubs: ['Icon']
      },
      attachTo: document.body
    })
    const headers = wrapper.findAll('.cray-collapse-item__header')
    const contents = wrapper.findAll('.cray-collapse-item__wrapper')

    const firstHeader = headers[0]
    const secondHeader = headers[1]
    const firstContent = contents[0]
    const secondContent = contents[1]

    // 行为
    await firstHeader.trigger('click')
    expect(firstContent.isVisible()).toBeFalsy()
    await secondHeader.trigger('click')
    expect(secondContent.isVisible()).toBeTruthy()
    expect(wrapper.emitted()).toHaveProperty('change')
    const changeEvent = wrapper.emitted('change')
    expect(changeEvent).toHaveLength(2)
    expect(changeEvent![0]).toEqual([[]])
    expect(changeEvent![1]).toEqual([['b']])
  })
})