// Create a buffer with a specific size
const buffer1 = Buffer.alloc(10); // Allocates a buffer of size 10 bytes
// Fill the buffer with data
buffer1.write('Hellokmkjkkkjkjkj');
// Read the content of the buffer
console.log(buffer1.toString()); // Output: Hello
// Create a buffer from a string
const buffer2 = Buffer.from('World');
// Concatenate buffers

const buffer3 = Buffer.concat([buffer1, buffer2]);

// Read the concatenated buffer
console.log(buffer3.toString()); // Output: HelloWorld
