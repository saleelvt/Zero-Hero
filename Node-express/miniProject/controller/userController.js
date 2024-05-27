const User = require("../models/user");

module.exports = {
  getuserHome: async (req, res) => {
    console.log("code enconded");
    res.render('home')
  },

  getUserSignup:async (req,res)=>{
          
      res.render('index')

},
getUserDatas:async (req,res)=>{


    console.log('my body ',req.body);

    const name=req.body.username
    const email=req.body.email
    const password=req.body.password


    const newUsre = new User({
    
        Name:name,
        Email:email,
        Password:password

    })
    await newUsre.save()

      console.log('user saved ');
    // const {username , password,email}=req.body


    //     console.log('my name',name);
    // console.log('reaced');
          
    //   res.render('index')

}
};
