import mongoose from 'mongoose';
import Blog from '../../models/BlogPost'

export default async function handler(req, res) {
    if(req.method === 'POST'){
    await mongoose.connect("mongodb+srv://aditya:kamate13579@projects.fvwgu.mongodb.net/CodersBlog?retryWrites=true&w=majority&appName=Projects")
    let b = Blog({
        titel : req.body.titel,
        desc : req.body.desc,
        author : req.body.author,
        slug : req.body.slug
    })
    b.save();
      res.status(200).json({"Sucess" : "Added"});
    }
  }