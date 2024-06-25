
(function(){
    let a='dfd'
    // console.log(a);
    })()
    
    console.log('sallee');
function person(name,age){
    return {
        name:name,
        age:age,
        nameAge:function (){
            return 'my name and age',this.name+ this.age
        }

    }
}
  let a =person('saleel',21)
  let b =person('saffsd',21)
//   console.log(a.nameAge());
//   console.log(b.nameAge());

// // Define a generator function to iterate over an array
function* arrayIterator(arr) {
    for (let i = 0; i < arr.length; i++) {
        yield arr[i];
    }
}
const arr = [10, 20, 30, 40];
// Create an instance of the generator
const iterator = arrayIterator(arr);
// Use the generator to iterate over the array
console.log(iterator.next().value); // Output: 10
console.log(iterator.next().value); // Output: 20

// constructur method 
function Person(name, age) {
    this.name = name;
    this.age = age;
  
    this.greet = function() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };
  }
  
  const person1 = new Person('Alice', 30);
  const person5 = new Person('Bob', 25);
  
  person1.greet(); // Hello, my name is Alice and I am 30 years old.
  person5.greet(); // Hello, my name is Bob and I am 25 years old.
  

// constructure function 
function Person(name) {
    this.name = name;
  
    this.greet = function() {
      console.log(`Hello, my name is ${this.name}`);
    };
  }
  
  const person2 = new Person('Alice');
  const person3 = new Person('Bob');
  
  person2.greet(); // Hello, my name is Alice
  person3.greet(); // Hello, my name is Bob
  
