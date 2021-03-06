const toString = Object.prototype.toString

export const isDate = (val: any): val is Date => toString.call(val) === '[object Date]'

export const isObject = (val: any): val is Object => val && typeof val === 'object'

export const isPlainObject = (val: any): val is Object => toString.call(val) === '[object Object]'

export const extend = <T, U>(to: T, form: U): T & U => {
  for (const key in form) {
    ;(to as T & U)[key] = form[key] as any
  }

  return to as T & U
}
