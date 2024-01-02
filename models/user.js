import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exists!'],
        required: [true, 'Email is required!']
    },
    
    username: {
        type: String,
        require: [true, 'Username is required!'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
    },

    image: {
        type: String
    }

});


    //Next js backend/api route is serverless. i.e, the route doesn't exist, it only becomes available on runtime when called.
    //so fot that reason, we need to apply check that if "models" already contains "User" model, then use that one,
    //otherwise create new

    const User = models.User || model("User", UserSchema);

    export default User;