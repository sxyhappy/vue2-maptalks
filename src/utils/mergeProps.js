import { omit } from "./omit";

export const mergeProps = (instance) => {
  return omit({
    ...instance.$props,
    ...instance.options,
    ...instance.$options.propsData
  }, 'options')
}
