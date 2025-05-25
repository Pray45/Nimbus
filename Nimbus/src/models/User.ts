import mongoose, { Schema, Types }  from "mongoose";
import bcrypt from 'bcrypt'

export interface IUser {
    name : string;
    email : string;
    password: string;
    role: string;
    staredSnippets?: Types.ObjectId[];
}

const UserSchema = new Schema<IUser> (
    {
        name:{
            type: String,
            required: true,
            trim: true
        },
        email:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        password:{
            type: String,
            required: true,
        },
        role:{
            type: String,
        },
        staredSnippets: 
        {
            type : Schema.Types.ObjectId,
            ref: 'Snippet'
        },
    },
    {
        timestamps: true
    }
)


UserSchema.pre('save' , async function (next) {
    if(this.isModified('password')) this.password = await bcrypt.hash(this.password , 10)
    next()
})

UserSchema.methods.comparePassword = async function (comparePassword: string) {
    return bcrypt.compare(comparePassword , this.password)
}

const User = mongoose.models.User || mongoose.model("User" , UserSchema)

export default User