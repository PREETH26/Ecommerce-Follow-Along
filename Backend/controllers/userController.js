// const User = require('../models/user');
// const createUser = async(req,res)=>{
//     try{
//         const {name,email,password} = req.body;
//         const profilePicture = req.file ? req.file.path : null; 

//         const existingUser = await User.findOne({email});
//         if(existingUser){
//             return res.status(400).json({message:'Email already in use' })
//         }
//         const newUser = new User({
//             name,
//             email,
//             password,
//             profilePicture,
//         });
//         await newUser.save();
//         res.status(201).json({ message: 'User created successfully', newUser })
//     }catch(error){
//         res.status(500).json({ message: 'Error creating user', error });
//     }
    
// };
// module.exports = {createUser}