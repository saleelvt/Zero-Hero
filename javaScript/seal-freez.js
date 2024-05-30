let obj = {
  name: "saleel",
  age: 21,
};

Object.seal(obj);
// Object.freeze(obj);

obj.age = 32;
obj.place = "thiruveegappura";

console.log("my object ", obj);
