


function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}
function sayGoodbye() {
  console.log("Goodbye!");
}
  greet("Alice", sayGoodbye);
  // Output:
  // Hello Alice
  // Goodbye!
  