import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
    titel : {type:String, required: true, unique:true},
    desc : {type:String, required: true},
    author : {type:String, required: true},
    slug : {type:String, required: true},
},{timestamps: true});

const Blog= mongoose.models.Blog || mongoose.model("Blog", blogSchema)

export default Blog