const express=require("express");
const app=express();
const port=8090;
const path=require("path");
var methodOverride = require('method-override')
const { v4: uuidv4 } = require('uuid');
uuidv4();
const mongoose = require('mongoose');


function main() {
    return mongoose.connect('mongodb+srv://radhakrishna:radhakrishna@cluster0.u71xq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
}

main()
.then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log("Error in connection:", err);
});

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extends:true}));
app.use(express.static(path.join(__dirname,"public")));
app.use(methodOverride('_method'));

let post=[
    {
        "id":uuidv4(),
        "img":"/ILOVEUUUAN.jpg",
        "name":"RADHAKRISHNA💕",
        "LOVE":"HONEST",
        "content":"This is Greate LOVE"
    },
    {
        "id":uuidv4(),
        "img":"/ILOVEUUUAN.jpg",
        "name":"SHIVAPARVATHI😍",
        "LOVE":"HONEST",
        "content":"This is Greate LOVE"
    },
    {
        "id":uuidv4(),
        "img":"/iloveumaaaaaaaaaaaaaaaaaa.jpg",
        "name":"SITARAMA❤️",
        "LOVE":"HONEST",
        "content":"This is Greate LOVE"
    }
]


app.get("/posts",(req,res)=>{
    // res.send("<h1>RADHAKRISHNA</h1>",{ post });
    res.render("profile.ejs",{post});
});

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
})

app.post("/post",(req,res)=>{
    let {name ,content }= req.body;
    post.push({name,content});
    // res.send("<h1>RADHAKRISHNA</h1>");
    res.redirect("/posts");
});


app.get("/posts/find",(req,res)=>{
    res.render("find.ejs");
})

app.post("/account_details",(req,res)=>{
    // console.log(req.body);
    // console.log(id);
    let { value }=req.body;
    let post1=post.find((p)=> value == p.id);
    console.log(post1);
    res.render("show.ejs", { post1  });
})



app.get("/posts/:id",(req,res)=>{
    // console.log(req.body);
    // console.log(id);
    let { id }=req.params;
    let post1=post.find((p)=> id == p.id);
    console.log(id);
    console.log(post1);
    res.render("show.ejs", { post1 });
});


app.get("/posts/:id/edit",(req,res)=>{
    // res.send("Patch Successful");
    let {id}=req.params;
    let post1=post.find((p)=> p.id==id);
    console.log(post1);
    res.render("edit.ejs",{ post1 });
})


app.patch("/posts/:id",(req,res)=>{
    let { id }= req.params;
    let content = req.body.content

    console.log(req.body);
    let posts=post.find((p)=> id===p.id);
    posts.content =content;

    console.log(post);
    // res.send("Patch Working Successfully");
    res.redirect("/posts");
})
app.listen(port,()=>{
    console.log("RADHAKRISHNA");
});