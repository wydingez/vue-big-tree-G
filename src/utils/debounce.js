export default function debounce (fn, wait = 250, immediate) {
  let timer = null
  return function () {
    let context = this
    let args = arguments

    if (immediate && !timer) {
      fn.apply(context, args)
    }

    if (timer) {
      clearTimeout(timer)
    }

    timer = setTimeout(() => {
      fn.apply(context, args)
    }, wait)
  }
}