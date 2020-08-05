const { Schema, model } = require("mongoose");
const crypto = require("crypto");

const UserSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      max: 32,
    },
    note: {
      type: String,
      trim: true,
      required: true
     
    },
   date:{
    type: String,
    trim: true,
   }
   ,
   complete:{
    type: Boolean,
    default:false
   }
    
  },
  { timestamps: true }
);


module.exports = model("User", UserSchema);
