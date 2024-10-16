const express= require("express")
const app = express();
app.get("/user", (req, res) => {
  
  const {q}=req.query

  app.use((err,req,res,next)=>{

    res.status(301)
    res.send('this one of the best erorr which i ever seen ',err)
    
  })

  res.send(":saleel is a good boy ")


});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
