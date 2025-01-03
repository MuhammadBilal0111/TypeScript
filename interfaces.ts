interface User{ // interface are loose form of class
  readonly dbId:number,
  email:string,
  userId:number,
  googleId?:string,
  startTrial:()=>string,  // 1 method
  // startTrial(): string  // 2 method
  getCoupon(couponname: string, val:number): number
}
interface User { // redefine the interface if forget some fields but type declaration generate duplicate identifier error or type cannot be change after created
  githubId?: string,
}
interface Admin extends User{
  role : "admin" | "ta" | "learner"
}
const hitest:Admin={dbId:1,email:"bilal",userId:1234, role:"admin", googleId:"m.bilal@gmail.com",startTrial:()=>{
  return "Trial started";
},
getCoupon:(name:"bilal", off: 1)=>{ // you donot have to match the parameter
  return 10;
}};
hitest.email="m.bilal0111@gmail.com";

// Difference between interfaces and types

// interfaces provides you a functionality of inheritance

// interface -> expandable
// type -> not expandable