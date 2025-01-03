// function addTwo(a,b):number{ // a and b will be any type which will be a problem 
//   return a+b;
// }

function addTwo(a:number,b:number){
  return a+b;
}
function getUpper(val:string){
  return val.toUpperCase()
}
function signUpUser(name:string,email:string,password:string,isPaid:boolean){ // all parameters can be of any type either string, boolean
}
let loginUser=(email:string,password:string,isPaid:boolean=false)=>{ // isPaid is now not a optional parameter

}
// good way of writting function
function addTwoNum(num:number):number{
  return num+2;
}
function getValue(myval:number):any{
  if(myval>5){
    return true;
  }
  return "200 Ok";
}
const getHello=(s:string):string=>{
  return "";
}

const heros1 = ["thor","spiderman","ironman"];
heros1.map((hero)=> `hero is ${hero}`); // it automatically predicts that hero is a string because heros is an array of string

const heros2 = [2, 6, 3];
heros2.map(hero=>`hero is ${hero}`);

heros2.map((hero):string => `bilal`);

function consoleError(errmsg:string):void{    // when you are not returning anything then by default return type will be void
  console.log("My name is bilal");
  // return "bilal"; // generate an error
}
// if you want to make the error robust and easily handle then use never

function consoleErrors(errmsg:string):never{
  throw new Error(errmsg);
}
getUpper("Bilal");
console.log(addTwo(3,8));
signUpUser("bilal","m.bilal0111@gmail.com","bilal",true);
loginUser("7","bilal");