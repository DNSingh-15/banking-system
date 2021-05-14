const express = require("express");

const app = express();

app.set("views","./views");
app.set("view engine","ejs");
app.use(express.static("static"));

app.get("/",(req,res)=>{
    res.render("home");
});
app.get("/customers",(req,res)=>{
    res.render("customers");
});
app.get("/about",(req,res)=>{
    res.render("about");
});
app.get("/contact",(req,res)=>{
    res.render("contact");
});
app.get("/openaccount",(req,res)=>{
    res.render("openaccount");
});
app.get("/transfer",(req,res)=>{
    res.render("transfermoney");
});
app.get("/history",(req,res)=>{
    res.render("history");
});
app.get("/mydetails",(req,res)=>{
    res.render("mydetails");
});
app.listen(80,()=>{
    console.log("Server Started");
});