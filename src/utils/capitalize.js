/**
 * 字符串首字母大写
 * @param {string} str
 * @return {string}
 */
export const capitalize = (str) => {
  if (!str) return '';

  const [first, ...rest] = str;

  return `${first.toUpperCase()}${rest.join('')}`
}
