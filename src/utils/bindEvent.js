import { omit } from "./omit";

/**
 * map/geometry 等事件绑定
 * @param {object} element 需要绑定的元素 eg: map/circle/path
 * @param {Vue} instance vue 实例,eg: this
 * @param {string[] | undefined} omitEvent 需要监听的事件
 */
export const bindEvent = (element, instance, omitEvent) => {
  const listeners = omit(instance.$listeners, omitEvent)
  element.addEventListener(listeners);

  instance.$once('hook:beforeDestroy', () => {
    element.removeEventListener(listeners)
  })
}
