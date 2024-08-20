const express = require("express");
const app = express();
app.get("/user", (req, res) => {
  
  const {q}=req.query

  res.send(q)


});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
