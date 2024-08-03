const {Schema,model} = require('mongoose')
const bcryptjs = require('bcryptjs')
const {defaultImagePath} = require('../secret')
const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "User name is required"],
    trim: true,
    minlength: [3, "The length of user name can be minimum 31 characters"],
    maxlength: [31, "The length of user name can be maximum 31 characters"],
  },
  name: {
    type: String,
    required: [true, "User email is required"],
    trim: true,
    unique: true,
    lowercase: true,
    validator: (email) => {
      var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return re.test(email);
    },
    message: "please enter a valid email",
  },
  password: {
    type: String,
    required: [true, "User password is required"],
    trim: true,
    minlength: [3, "The length of user name can be minimum 31 characters"],
    set: (v) => bcryptjs.hashSync(v, bcryptjs.genSaltSync(10)),
  },
  image: {
    type: String,
    default:defaultImagePath
    
  },
  address:{
    type:String,
    required:[true,'user phone is required']
  },
  isAdmin:{
    type:Boolean,
    default:false,
  },
  isBanned:{
    type:Boolean,
    default:false
  }
},{timestamps:true});

const User = model('Users',userSchema)

module.exports = User;