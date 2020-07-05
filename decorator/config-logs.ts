interface Config {
  config: string;
}

@logClassWithArgs({ config: "8f4031bfc7640c5f267b11b6fe0c2507" })
class Person {
  constructor(public name: string) {}
}

@logClassWithArgs({ config: "47bce5c74f589f4867dbd57e9ca9f808" })
class Animal {
  constructor(public name: string) {}
}

function logClassWithArgs(filter: Config) {
  return (target: Object) => {
    console.log(target);
    console.log(filter);
    // implemente as fincionalidades do decorator
    // Tem acesso ao argumento (filter)

    if (filter.config === "47bce5c74f589f4867dbd57e9ca9f808") {
      console.log("oi");
    }
  };
}

const me = new Person("Eduardo");
const dog = new Animal("Cachorro");
console.log(me);
console.log(dog);
