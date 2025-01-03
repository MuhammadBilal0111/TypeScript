// Union is the combination of many types of data
let score:number | string=7;

score=5;
score="bilal";
// score={} generate an exception
type User = {
  name:string;
  email:string;
}
type Admin = {
  username:string;
  email:string;
}
let hitesh:User | Admin; // hitesh will be either User or Admin

hitesh={
  name:"hitesh",
  email:"h@gmail.com",
}
function getDbId(id:number| string){
  // id is treated as new data type in between string and number
  // id.toUpperCase(); // Property 'toUpperCase' does not exist on type 'string | number'. Property 'toUpperCase' does not exist on type 'number'
  if (typeof id==="string") {
    id.toLowerCase();
  }
  console.log("DB id is ",id)
}
// Array 
const data:number[]=[1,2,4];
const data2:string[]=["1","2","4"];
const data3:number[] | string[]=["1","2","3"]; // it means that either all numbers or all strings in an array
// or
// const data3:(number | string)[]=["1","2","3"];
getDbId(5);
getDbId("7");

let seatAllotment:"aisle" | "middle" | "window"; // you can assign the "aisle", "middle", "window" in seatAllotment
seatAllotment="aisle";