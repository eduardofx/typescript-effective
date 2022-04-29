type StringMap<T> = {
    [P in keyof T]: string
  }
  
  function showMappedType(arg: StringMap<{ id: number; name: string }>) {
    console.log(arg)
  }
  
  //showMappedType({ id: 1, name: "Test" })
  // Error: Type 'number' is not assignable to type 'string'.
  
  showMappedType({ id: "testId", name: "This is a Test" })
  // Output: {id: "testId", name: "This is a Test"}