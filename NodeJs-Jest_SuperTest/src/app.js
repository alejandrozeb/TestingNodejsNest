import express from 'express';
import {v4} from 'uuid';

const app = express()
app.use(express.json());

app.get("/ping", (req,res)=>{
    res.send("pong");
});

app.get('/task', (req,res)=>{
    res.json([]);
});

app.post('/task', (req, res)=>{
    //el send devuelve un html y con string
    const {title, description} = req.body;
    res.json({
        title,
        description,
        id: v4(),
    });
});


export default app;