// string
const greetings:string = "Hello World";

// number
const num : number = 100;
console.log("num" , num);
// or
// const num = 100; // number datatype is obvious. TypeScript is smart enough to detect the number
// console.log("num" , num);

num.toFixed();
// boolean
let isLogged : boolean = false;
console.log("isLogged" , isLogged);

// Any
let hero; // you can insert whatever value you want
// any is used to turn off the type checking
function getHero() : string{
  return "Thor";
}
hero = getHero(); // hero is inferred as any
export {} // temporarily removes the error