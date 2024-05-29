
const fs=require('fs')
fs.deleteFile('hay.txt', 'anshad is my friend and anas ', (err,data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File contents:', );
});
