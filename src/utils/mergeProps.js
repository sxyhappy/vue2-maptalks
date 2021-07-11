import {omit} from "./omit";

export const mergeProps = (instance) => {
  autoDerivePropsDataValue(instance)
  return omit({
    ...instance.$props,
    ...instance.options,
    ...instance.$options.propsData
  }, 'options')
}

// 自动推导　直接写在标签上的属性的默认值　　即让他跟　prop的保持一致
function autoDerivePropsDataValue(instance) {
  Object.keys(instance.$options.propsData).forEach(propName => {
    let propsDataValue = instance.$options.propsData[propName]

    if (!propsDataValue || propsDataValue.length === 0) {
      let propValue = instance.$props[propName]
      let optionValue = instance.options[propName]
      // 如果option有值　则采用option里面的值
      if (optionValue !== null && optionValue !== undefined ) {
        instance.$options.propsData[propName] = optionValue;
      } else if (propValue  !== null && propValue !== undefined) {
        // option没有值就用prop里面的
        instance.$options.propsData[propName] = propValue;
      }
    }
  });
}
