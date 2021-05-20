import { capitalize } from "./capitalize";
import { omit } from "./omit";

/**
 * 地图属性监听绑定
 * @param {Vue} instance vue 实例
 * @param {Object} element 地图实例
 * @param {string | string[] | undefined } props 不需要监听的属性,如果没有默认使用 vue 实例上的属性
 * @param {object} options 地图元素的options, 如果 props 变化,而没有对应的方法,整体设置 options
 */
export const watchProps = (instance, element, props, options) => {
  let currentProps = instance.$options.props;

  if (props) {
    currentProps = omit(currentProps, props);
  }

  Object.entries(currentProps).forEach(([propKey, propVal]) => {
    const deep = propVal.type === Object || propVal.type === Array || Array.isArray(propVal.type);
    const methodName = `set${capitalize(propKey)}`;

    switch (true) {
      case propVal.custom && !!instance[methodName]:
        instance.$watch(propKey, (val, oldVal) => { instance[methodName](val, oldVal) }, { deep });
        break;
      case !!element[methodName] && propKey !== 'options':
        instance.$watch(propKey, val => element[methodName](val), { deep });
        break;
    }
  })
}
