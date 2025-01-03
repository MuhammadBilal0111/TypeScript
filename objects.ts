const user = { 
  username:"Bilal",
  email:"m.bilal0111@gmail.com",
  isActive:true
}

function createUser({name:string,isActive:boolean}){}
// createUser({name:"bilal",isActive:true,email:"m.bilal0111@gmail.com"}); // generate error as you've define the name and isActive in an object therefore define the separate object
const newUser = {name:"bilal",isActive:true,email:"m.bilal0111@gmail.com"}
createUser(newUser)

function createCourse():{}{
  return {name:"Bilal",isActive:false}
}
createCourse();
export {}