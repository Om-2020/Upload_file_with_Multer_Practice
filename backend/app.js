import express from "express";

import multer from "multer";
import cors from "cors";

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());


const upload = multer({dest:"uploads/"});

app.post("/upload_files", upload.array("files"), uploadFiles);




function uploadFiles(req,res) 
{
    console.log(req.body);
    console.log(req.files);
    res.json({
        message:"Successfully upload files",
    })    
}

app.get("/",(req,res)=>{
    res.send("Nice Working");
})