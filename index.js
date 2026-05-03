import express from "express";
import bodyParser from "body-parser";
import methodOverride from "method-override";
import path from "path";
const app=express();
const port=3000;
let post="";
let name="";
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/",(req,res)=>{
    res.render("index.ejs")
});
app.post("/yourBlog",(req,res)=>{
    post=req.body.yday;
    name=req.body.yname;
    res.redirect("/yourBlog");
    });
app.get("/yourBlog",(req,res)=>{
    res.render("index.ejs",{
        yourPost: post,
        yourName: name
    });
});
app.get("/edit/:id",(req,res)=>{
    res.render("edit.ejs",{
        yourPost: post
    });
});
app.patch("/yourBlog/:id",(req,res)=>{
    post = req.body.yday;

    res.redirect("/yourBlog");
});
app.delete("/yourBlog/:id",(req,res)=>{
    post = "";
    name = "";

    res.render("delete.ejs");
});
app.listen(port, ()=>{
    console.log(`Server live on ${port}`)
});
