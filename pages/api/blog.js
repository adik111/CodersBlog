import * as fs from 'fs';

export default async function handler(req, res) {
  let blogData = [];
    const dirData= await fs.promises.readdir("blogposts");
    const data = dirData.slice(0,parseInt(req.query.count))
    for(const item of data){
      const myfile = await fs.promises.readFile(`blogposts/${item}`,"utf-8");
        blogData.push(JSON.parse(myfile));
    }
    res.status(200).json(blogData);
}
