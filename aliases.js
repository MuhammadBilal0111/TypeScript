"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var newUser = {
    _id: "123456", // using readonly no one will change it
    name: "bilal",
    email: "m.bilal0111@gmail.com",
    isActive: true,
};
newUser._id = 5; // cannot assign because it is readonly property
function createUser(user) {
    return { _id: "123", name: "usman", email: "usman@gmail.com", isActive: false };
}
createUser({ _id: "123", name: "bilal", email: "bilal@gmail.com", isActive: true });
