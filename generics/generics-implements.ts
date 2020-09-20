  interface GenericInterface<U> {
    value: U
    getValue: () => U
  }
  
  class Identificator<T> implements GenericInterface<T> {
    value: T
  
    constructor(value: T) {
      this.value = value
    }
  
    getValue () : T {
      return this.value
    }
  
  }
  
  const myNumber = new Identificator<Number>(500)
  console.log(myNumber.getValue()) // 500
  
  const myString = new Identificator<string>("Hash-ASFJ!)@")
  console.log(myString.getValue()) // Hash-ASFJ!)@