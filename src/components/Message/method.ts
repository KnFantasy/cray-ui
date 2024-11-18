import { render, h, shallowReactive } from 'vue'
// import type { CreateMessageProps, MessageContext } from './types'
import MessageConstructor from './Message.vue'
import type { CreateMessageProps, MessageContext } from './types'
import useZIndex from '@/composables/useZIndex'

let seed = 1
const instances: MessageContext[] = shallowReactive([])

export const createMessage = (props: CreateMessageProps) => {
  const container = document.createElement('div')

  // 新增props

  // id
  const id = `message_${seed++}`

  // 自动删除
  const destory = () => {
    // 删除数组中的实例
    const idx = instances.findIndex(instance => instance.id === id)
    if (idx === -1) return
    instances.splice(idx, 1)
    // 删除元素节点
    render(null, container)
  }

  // 手动删除
  const manualDestroy = () => {
    const instance = instances.find(instance => instance.id === id)
    if (instance) {
      instance.vm.exposed!.visible.value = false
    }
  }

  const { nextZIndex } = useZIndex()

  const newProps = {
    ...props,
    id,
    zIndex: nextZIndex(),
    onDestory: destory
  }

  // 渲染
  const vnode = h(MessageConstructor, newProps)
  render(vnode, container)
  document.body.appendChild(container.firstElementChild!)

  // 数组记录
  const vm = vnode.component!
  const instance = {
    id,
    vnode,
    vm,
    props: newProps,
    destory: manualDestroy
  }
  instances.push(instance)

  return instance
}

export const getLastBottomOffset = (id: string) => {
  const idx = instances.findIndex(instance => instance.id === id)
  if (idx <= 0) {
    return 0
  }
  else {
    const prev = instances[idx - 1]
    return prev.vm.exposed!.bottomOffset.value
  }
}

export const closeAll = () => {
  instances.forEach(instance => {
    instance.destory()
  })
}