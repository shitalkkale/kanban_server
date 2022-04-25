const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next)=>{
    //this means no matter which domain sending request it is allowed to access server
    res.setHeader("Access-Control-Allow-Origin","*");
    // allow types of headers
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
    //allow methods that we want to make accessible
    res.setHeader('Access-Control-Allow-Methods',"GET,POST,PUT,DELETE,OPTIONS");
    next();
});

app.get('/api/posts',(req, res)=>{
    const posts = [
        {
            title: "Nashik",
            content: "A beautiful town situated on the banks of the river Godavari, Nashik is surrounded by nine hills; blessed with an enchanting panorama, and pleasant climate Popularly known as the wine and grape capital of India."
        },
        {
            title: "Pune",
            content: "Pune is widely regarded to be the second major IT hub and the most important automobile and manufacturing hub in India. India's first indigenously run girls' school was started in Pune by Savitribai Phule."
        },
        {
            title: "Aurangabad",
            content: "Aurangabad city is a tourism hub, surrounded by many historical monuments, including the Ajanta Caves and Ellora Caves, as well as Bibi Ka Maqbara replica of Taj Mahal) and Panchakki.. Aurangabad is known as The City of Gates."
        }
    ]
    //res.send("Hello from improved server!");
    res.status(200).json({
        message: "Posts received successfully",
        posts: posts
    });
});

app.post('/api/posts',(req, res)=>{
    const post = req.body;
    console.log('*******Post Received', post);
    res.status(201).json({
        message:"Posts stored successfully"
    });
});

module.exports = app;