import * as fs from 'fs';

export default async function handler(req, res) {
    if (req.method === 'POST'){
        try{
        const data = await fs.promises.readdir("contactdata")
        await fs.promises.appendFile(`contactdata/contact${data.length+1}.json`,JSON.stringify(req.body))
        res.status(200).json(1)
        }
        catch(e){
            res.status(200).json(0)
        }
    }else{
        res.status(200).json(["Not valid request"]) 
    }
  }