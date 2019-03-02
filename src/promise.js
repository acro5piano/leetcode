// function Promise(executor) {
//    return {
//         then: function(onFulfilled, onRejected) {
//
//         }
//     }
// }

class Promise {
  constructor() {
    this.onFulfilledFunctions = []
    this.onRejectedFunctions = []
  }

  resolve(value) {
    const resolver = this.onFulfilledFunctions[0]
    return resolver(value)
  }

  reject(error) {
    const rejector = this.onRejectedFunctions[0]
    return rejector(error)
  }

  then(onFulfilled, onRejected) {
    this.onFulfilledFunctions.push(onFulfilled)
    this.onRejectedFunctions.push(onRejected)
  }
}

// helpers for creating promise that resolve or reject after a delay:
function delayResolve(value, delay = 0) {
  const p = new Promise()
  setTimeout(() => p.resolve(value), delay)
  return p
}
function delayReject(error, delay = 0) {
  const p = new Promise()
  setTimeout(() => p.reject(error), delay)
  return p
}

// TEST 1: resolve
delayResolve('test 1').then(result => console.log(result))

// TEST 2: reject
delayReject('test 2').then(result => console.log('nope'), error => console.log(error))
