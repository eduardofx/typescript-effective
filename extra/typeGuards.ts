  function showTypeGuard(x: number | string) {
    if (typeof x === 'number') {
      console.log(`The result is ${x + x}`)
      return `The result is ${x + x}`
    }
    throw new Error(`This operation can't be done on a ${typeof x}`)
  }
  
  //showTypeGuard("I'm not a number")
  // Error: This operation can't be done on a string
  
  showTypeGuard(7)
  // Output: The result is 14