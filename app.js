const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const router = require("./Router/blogRouter")
//TODO here forget Sheam in file Blog  this file make u to put data in mongoDB
const { render } = require("ejs");
//TODO   create link for connect with our data base 
//mongodb+srv://<username>:<password>@cluster0.8cl3k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const URLdb = "mongodb+srv://Blogs:Yb5F6Fg4ZpkNJST@cluster0.8cl3k.mongodb.net/Blogsnuts?retryWrites=true&w=majority"
//TODO set EJS in app app is express
app.set('view engine', 'ejs');
//TODO set engine
mongoose.connect(URLdb, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => app.listen(3000))
    .catch(err => console.log(err));
app.use(express.static("public"))//this is for shar file in server ===>  app.use(express.static('public'));
// TODO This is for encoded your request and get data from form   
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.get("/", (req, res) => {
    res.redirect("blogs");
});
//TODO here we put all blogs
app.use("/blogs", router);


//some route
app.get("/about", (req, res) => {
    res.render('about', { Title: "about" });
})
app.get("/createblog", (req, res) => {
    res.render('createblog', { Title: "Create New" });
})
//TODO if no page found will do that    
app.use((req, res) => {
    res.status(404).render('404', { Title: "Not Found !!" })
});



//mongodb+srv://<username>:<password>@cluster0.8cl3k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority