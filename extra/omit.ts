interface PickType {
    id: number
    firstName: string
    lastName: string
  }
  
  function showTypeOmit(args: Omit<PickType, "firstName" | "lastName">) {
    console.log(args)
  }
  
  showTypeOmit({ id: 7 })
  // Output: {id: 7}
  
 // showType({ firstName: "John" })
  // Error: Object literal may only specify known properties, and 'firstName' does not exist in type 'Pick<PickType, "id">'
  