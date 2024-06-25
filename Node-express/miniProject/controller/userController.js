const { json } = require("stream/consumers");
const User = require("../models/user");

module.exports = {
  getuserHome: async (req, res) => {

 

    try {
      
      const userName=req.cookies.user
      console.log('my cookies ', userName);

      if(userName){
  
        const {name,email}= userName
        console.log("code enconded");
        res.render("home",{name,email});
  
      }else{
        console.log('error efkdf');
        // res.render("home", { name: 'Guest', email: '' });
      }
    } catch (error) {
      console.log('djfdf',error);
    }
  },

  
  getUserSignup: async (req, res) => {
    res.render("index");
  },
  getUserDatas: async (req, res) => {
    try {
      console.log("my body ", req.body);

      const name = req.body.username;
      const email = req.body.email;
      const password = req.body.password;

      const newUsre = new User({
        Name: name,
        Email: email,
        Password: password,
      });
      await newUsre.save();


      res.cookie('user',{name,email},{
        maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
        httpOnly: true,             // Cookie is not accessible via JavaScript
        secure: false,              // Set to true if using HTTPS
        sameSite: 'strict'          // Strict SameSite policy
      })

      res.redirect("/");
      console.log("user saved ");
    } catch (error) {
      console.log(error);
    }
  },
};
