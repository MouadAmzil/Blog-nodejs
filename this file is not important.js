const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
//TODO here forget Sheam in file Blog  this file make u to put data in mongoDB
const blogSheam = require("./moduls/blog")
//TODO   create link for connect with our data base 
//mongodb+srv://<username>:<password>@cluster0.8cl3k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const URLdb = "mongodb+srv://Blogs:Yb5F6Fg4ZpkNJST@cluster0.8cl3k.mongodb.net/Blogsnuts?retryWrites=true&w=majority"
//TODO set EJS in app app is express
app.set('view engine', 'ejs');
//TODO set engine
mongoose.connect(URLdb, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => app.listen(3000))
    .catch(err => console.log(err));//this is for shar file in server ===>  app.use(express.static('public'));
app.use(express.static("public"))
//This is for encoded your request and get data from form   
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    // console.log('new request made:');
    // console.log('host: ', req.hostname);
    // console.log('path: ', req.path);
    // console.log('method: ', req.method);
    next();
});

app.use(morgan('dev'));

//TODO just test if data come to the server 
// app.get("/addblog", (req, res) => {
//     //TODO here is for set data to blogSheam and save it in mongoose
//     const blog = new blogSheam({
//         title: "Why we need to change our minde",
//         body: "Push notifications to your visitors with a toast, a lightweight and easily customizable alert message.",
//         author: "Mouad Amzil"
//     })
//     blog.save().then((result) => {
//         res.send(result)
//     }).catch((err) => {
//         console.log(err)
//     })
// })
app.get("/", (req, res) => {
    res.redirect("blogs");
});
//TODO GET is for get all data
app.get("/blogs", (req, res) => {
    blogSheam.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('index', { Data: result, Title: "Home" });
        })
        .catch((err) => {
            console.log(err);
        })
})
//TODO POST is for get all data
app.post("/blogs", (req, res) => {
    console.log(req.body);
    const newblog = new blogSheam(req.body);
    newblog.save().then((result) => {
        res.render('index', { Data: result, Title: "Home" });
    }).catch((err) => {
        console.log(err)
    })
})


app.get("/about", (req, res) => {
    console.log("hi i am ==> /about")
    // res.sendFile("./Views/about.html", { root: __dirname })
    res.render('about', { Title: "about" });
})
app.get("/createblog", (req, res) => {
    console.log("hi i am ==> /Create New")
    // res.sendFile("./Views/about.html", { root: __dirname })
    res.render('createblog', { Title: "Create New" });
})

app.use((req, res) => {
    res.status(404).render('404', { Title: "Not Found !!" })
});



//mongodb+srv://<username>:<password>@cluster0.8cl3k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority