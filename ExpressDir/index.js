const express= require("express");
const app=express();
const path=require("path");
const instaData=require("./data.json");
// console.log(instaData);

let port=5050;


app.set("view engine","ejs");

app.set("VIEWS",path.join(__dirname,"VIEWS"));


app.get("/ig/:username",(req,res)=>{
    // res.send(`${username}`)
    console.log(req.params)
    let { username }=req.params;
    const data= instaData[username];
    console.log(data.posts);
    if(data){
    res.render("instagram.ejs",{ data });}
    else{
        res.status(404).send("<h1>User Not found</h1>");
    }
})


app.get('/RADHAKRISHNA',(req,res)=>{
    let value=Math.floor(Math.random()*5)+1;
    console.log(instaData["KRISHNALOVE"]);
    res.render("home.ejs",{ data:instaData["RADHAKRISHNALOVE"]});
    
});

app.get('/',(req, res) => {
    res.send("<h1>RADHAKRISHNA SHIVAPARVAYHI SITARAMA</h1>");
});

app.listen(port, ()=>{
    console.log('RADHAKRISHNA');
})

