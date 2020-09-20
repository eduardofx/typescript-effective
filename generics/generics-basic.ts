function rPerson<T, N>(name: T, age: N): T{
    // console.log(name)
    // console.log(age)
    return name
}

const rperson = rPerson<string, number>("Eduardo",18)
console.log(rperson);

