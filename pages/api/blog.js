import mongoose from 'mongoose';
import Blog from '../../models/BlogPost'

export default async function handler(req, res) {
    await mongoose.connect("mongodb+srv://aditya:kamate13579@projects.fvwgu.mongodb.net/CodersBlog?retryWrites=true&w=majority&appName=Projects")
    const blogData = await Blog.find().limit(req.query.count);
      res.status(200).json(blogData);
  }