const superHeros = []; // array of type never
// superHeros.push("spider"); // you cannot push string in the array of type never
// never means no execution

const heros:string[]=[];
const heroPower:number[]=[];
// or 
// const heroPower:Array<number>=[];
heros.push("spider");
heroPower.push(9);

type User={
  name:string;
  password:string;
}
const allUsers:User[]=[];
allUsers.push({name:"bilal",password:"bilal"});

const MLModel:number[][]=[[200,90],[8,9]]