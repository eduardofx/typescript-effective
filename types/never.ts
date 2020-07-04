function error(message: string): never {
  throw new Error(message);
}

function fail() {
  return error("Something failed");
}

// function infiniteLoop(): never {
//   while (true) {}
// }

fail();
