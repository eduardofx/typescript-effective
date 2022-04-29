type NonNullableType = string | number | null | undefined

function showTypeNonNullable(args: NonNullable<NonNullableType>) {
  console.log(args)
}

showTypeNonNullable("test")
// Output: "test"

showTypeNonNullable(1)
// Output: 1

//showTypeNonNullable(null)
// Error: Argument of type 'null' is not assignable to parameter of type 'string | number'.

//showTypeNonNullable(undefined)
// Error: Argument of type 'undefined' is not assignable to parameter of type 'string | number'.