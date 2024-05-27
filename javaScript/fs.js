
const fs=require('fs')
fs.readFile('hay.txt', 'latin1', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File contents:', data);
});
