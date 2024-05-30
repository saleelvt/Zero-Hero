// Factory function to create user objects
const createUser = (name, age) => {
    return {
        name,
        age,
        greet() {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }
    };
};

// Create user objects
const user1 = createUser('Alice', 30);
const user2 = createUser('Bob', 25);


user1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
user2.greet(); // Output: Hello, my name is Bob and I am 25 years old.
