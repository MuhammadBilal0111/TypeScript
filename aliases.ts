// aliases meaning creating your own datatype
type User = {  // you have defined the User datatype
  readonly _id:string; // using readonly no one will change it
  name:string;
  email:string;
  isActive:boolean;
  creditCardDetails?:number; // make creditCardDetails optional
}
type myString = string; // you have dedfined a datatype of mystring which is actually a string

const newUser:User = {
  _id:"123456", // using readonly no one will change it
  name:"bilal",
  email:"m.bilal0111@gmail.com",
  isActive:true,
}
type cardNumber={
  cardNumber:string
}
type cardDate={
  cardData:string
}
type cardDetails = cardNumber & cardDate & { 
  cvv: number
};
// newUser._id=5; // cannot assign because it is readonly property
function createUser(user:User):User{
  return {_id:"123",name:"usman", email:"usman@gmail.com", isActive:false}
}
createUser({_id:"123",name:"bilal", email:"bilal@gmail.com", isActive:true})
export {}