const isPromise = maybePromise =>
  typeof maybePromise === 'object' && typeof maybePromise?.then === 'function'

const pipe = (...args) =>
  args.reduce(async (acc, next) => {
    const nextFn = typeof next === 'function' ? next : () => next
    return nextFn(isPromise(acc) ? await acc : acc)
  }, undefined)

exports.pipe = pipe
