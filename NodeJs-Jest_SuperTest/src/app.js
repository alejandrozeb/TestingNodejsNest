import express from 'express';

const app = express()

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
        description
    });
});


export default app;