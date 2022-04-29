type LeftType = {
    id: number
    left: string
  }
  
  type RightType = {
    id: number
    right: string
  }
  
  type IntersectionType = LeftType & RightType
  
  function showTypeIntercetion(args: IntersectionType) {
    console.log(args)
  }
  
  showTypeIntercetion({ id: 1, left: "test", right: "test" })
  // Output: {id: 1, left: "test", right: "test"}