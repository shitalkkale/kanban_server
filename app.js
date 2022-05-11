const express = require("express");

const app = express();


app.use((req, res, next)=>{
    //this means no matter which domain sending request it is allowed to access server
    console.log("Kanban Server")
    next();
});


app.put('/api/tasks/:id', (req, res, next)=>{
    const todo = new todo({
        _id: req.body.id,
        name:  req.body.name,
        descr:req.body.descr,
        assign:req.body.assig,
        s_date:req.body.s_date,
        d_date:req.body.d_date,
        status:req.body.status
    });

    Todo.updateOne({_id: req.params.id}, post).then(result =>{
        console.log(result);
        res.status(200).json({message: "updated successfully"});
    });
});

app.delete('/api/tasks/:id', (req, res)=>{
    Todo.deleteOne({_id: req.params.id}).then(result =>{
        console.log(result);
        res.status(200).json({message: "Task Delete!"});
    });
});


module.exports = app;
