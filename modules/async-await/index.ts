import { PersonService } from "./service";
import { Person } from "./interface";

const createPerson = async (): Promise<Person> => {
  const person = await PersonService({
    name: "Eduardo",
    age: 18,
    city: "Maringá",
    request: false,
  });

  const person2 = await PersonService({
    name: "Adriana",
    age: 28,
    city: "Maringá",
    request: false,
  });
  // errado colocar vários awaits
  console.log(person);
  console.log(person2);

  const person3 = PersonService({
    name: "Alfredo",
    age: 18,
    city: "Maringá",
    request: false,
  });

  const person4 = PersonService({
    name: "Nick",
    age: 18,
    city: "Maringá",
    request: false,
  });
  Promise.all([person3, person4]).then((values) => {
    console.log(values);
  });
  return person;
};

createPerson();
