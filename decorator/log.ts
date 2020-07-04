// annotation, adiciona funcionalidade com @

function logger(construtor: any) {
  console.log("loading...");
}

@logger
class RunLog {
  constructor() {}
}

@logger
class RunLog2 {
  constructor() {}
}

new RunLog();
new RunLog2();
