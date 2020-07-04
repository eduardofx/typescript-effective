// annotation, adiciona funcionalidade com @

function logger(construtor: any) {
  console.log("loading...");
}

@logger
class RunLog {
  constructor() {}
}

new RunLog();
