interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;

mySearch = function (src: string, sub: string): boolean {
  let result = src.search(sub);
  return result > -1;
};

console.log(mySearch("pato", "topa")); //false
//console.log(mySearch("pato", "pato")); //true
