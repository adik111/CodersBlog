import * as fs from 'fs';

export default async function handler(req, res) {
  let blogData = [];
    const data= await fs.promises.readdir("blogposts");
    for(const item of data){
      const myfile = await fs.promises.readFile(`blogposts/${item}`,"utf-8");
        blogData.push(JSON.parse(myfile));
    }
    res.status(200).json(blogData);
}
