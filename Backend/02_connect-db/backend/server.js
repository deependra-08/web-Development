import dotenv from 'dotenv';
import express from 'express';

dotenv.config();
const app = express();
const port = process.env.PORT || 4000

app.get('/',(req,res)=>{
    res.send("Hello India!");
})

app.get('/api/jokes',(req,res)=>{
    const deep = [
        {
            id:1,
            title:'Baniya',
            content:'3rd Class Caste'
        },
        {
            id:2,
            title:'Gurjar',
            content:' Also Known as VEER'
        },
        {
            id:3,
            title:'Jaat',
            content:'Ek number ke Gawar'
        },
    ];
    res.send(deep);
})

app.listen(port, () => {
    console.log(`App listening on ${port}`);
});