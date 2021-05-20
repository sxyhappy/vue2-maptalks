/**
 * omit 函数
 * @param {object} target
 * @param {string | string[]} key
 * @return {object}
 * @example omit({a: 1, b: 2}, 'a') -> {b: 2}
 */
export const omit = (target, key) => {
  let keys = [];

  switch (true) {
    case typeof key === 'string':
      keys = [key];
      break;
    case Array.isArray(key):
      keys = key;
      break;
  }

  // es6 rest omit
  const { [keys.pop()]: omitted, ...rest } = target;

  if (key.length > 0) {
    return omit(rest, keys);
  }

  return rest;
}
