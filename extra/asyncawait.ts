const lists = [1, 2, 3, 4, 5]; //...an array filled with values

const functionThatReturnsAPromise = (item: number) => {
  //a function that returns a promise
  return Promise.resolve(item);
};

const doSomethingAsync = async (item: number) => {
  return functionThatReturnsAPromise(item);
};

const getData = async () => {
  return Promise.all(lists.map((item) => doSomethingAsync(item)));
};

getData().then((data) => {
  console.log(data);
});
