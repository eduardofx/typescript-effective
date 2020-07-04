interface Person {
  name: string;
  age: number;
  born: Date;
}

// function showPerson(data: Person) {
//     console.log(data);
//     return data;
//   }

function showPerson(data: Person): Person {
  console.log(data);
  return data;
}

const obj = { name: "Eduardo", age: 1, born: new Date("2020/06/06") };
showPerson(obj);
