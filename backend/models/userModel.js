import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: {
        type: String , 
        required: [true , "Please add a Name"]
    },
    email: {
        type: String , 
        required: [true , "Please add an Email"],
        unique: true ,
        trim: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ , 
            "Please Enter a valid Email"
        ]
    },
    password: {
        type: String,
        required : [true , "Please add a Password"],
        minLength:[6,"Password must be up to 6 Character"],
        maxLength:[23,"Password must not be more than 23 Character"],
    },
    photo: {
        type: String,
        required : [true , "Please add a Photo"],
        default: "https://www.kindpng.com/picc/m/22-223910_circle-user-png-icon-transparent-png.png"        
    },
    phone: {
        type: String,
        default: "+91"        
    },
    bio: {
        type: String,
        maxLength:[250,"Bio must not be more than 250 Character"],
        default: "bio"        
    },
} ,
 {
    timestamps: true
}
);

const User = mongoose.model("User" , userSchema);

export default User; 