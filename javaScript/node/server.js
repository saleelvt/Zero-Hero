
const express = require('express');

const app =express()


let id=9947440303

app.get('/user/:id', (req, res) => {

    // Access the 'id' parameter
    const userId = req.params.q;
    res.send(`User ID: ${userId}`);

  });
  


app.listen(3000,()=>{
    console.log('server startd');
})