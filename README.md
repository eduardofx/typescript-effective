### Typescript



> \$ npm i -g typescript@latest

> \$ tsc file.ts

> \$ node file.js

RUN

> \$ npm i -g ts-node-dev

> \$ npx ts-node-dev file.ts

#### namespace

> \$ tsc --outFile index.js index.ts

> \$ node index.js

return:

```

"Hello" - Não combinou ZipCode
"Hello" - Combinou Apenas Letras
"87020200" - Combinou ZipCode
"87020200" - Não combinou Apenas Letras
"101" - Não combinou ZipCode
"101" - Não combinou Apenas Letras
```

#### Decorator
uncomment the lines below

tsconfig.json

// "experimentalDecorators": true,

// "emitDecoratorMetadata": true
