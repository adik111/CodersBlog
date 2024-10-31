import mongoose from 'mongoose';
import Contact from '../../models/Contact';

export default async function handler(req, res) {
    if (req.method === 'POST'){
        try{
            await mongoose.connect("mongodb+srv://aditya:kamate13579@projects.fvwgu.mongodb.net/CodersBlog?retryWrites=true&w=majority&appName=Projects")
            let c = Contact({
                name : req.body.name,
                email : req.body.email,
                msg : req.body.msg
            })
            c.save();
        res.status(200).json(1)
        }
        catch(e){
            res.status(200).json(0)
        }
    }else{
        res.status(200).json(["Not valid request"]) 
    }
  }