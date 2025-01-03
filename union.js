// Union is the combination of many types of data
var score = 7;
score = 5;
score = "bilal";
var hitesh; // hitesh will be either User or Admin
hitesh = {
    name: "hitesh",
    email: "h@gmail.com",
};
function getDbId(id) {
    // id is treated as new data type in between string and number
    // id.toUpperCase(); // Property 'toUpperCase' does not exist on type 'string | number'. Property 'toUpperCase' does not exist on type 'number'
    if (typeof id === "string") {
        id.toLowerCase();
    }
    console.log("DB id is ", id);
}
// Array 
var data = [1, 2, 4];
var data2 = ["1", "2", "4"];
var data3 = ["1", "2", "3"]; // it means that either all numbers or all strings in an array
// or
// const data3:(number | string)[]=["1","2","3"];
getDbId(5);
getDbId("7");
var seatAllotment; // you can assign the "aisle", "middle", "window" in seatAllotment
seatAllotment = "aisle";
