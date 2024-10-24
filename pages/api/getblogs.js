import * as fs from 'fs';

export default function handler(req, res) {
  fs.readFile(`blogposts/${req.query.slug}.json`,"utf-8",(err,data)=>{
    if(err) return res.status(404).json({error : "Blog not found"})
    res.status(200).json(JSON.parse(data))
  })
}
