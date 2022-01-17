// get_index ,get_post
const blogSheam = require("../moduls/blog");

const get_index = (req, res) => {
    blogSheam.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('index', { Data: result, Title: "Home" });
        })
        .catch((err) => {
            console.log(err);
        })
}
const create = (req, res) => {
    const newblog = new blogSheam(req.body);
    newblog.save().then((result) => {
        res.redirect("blogs");
    }).catch((err) => {
        console.log(err)
    })
}

const details = (req, res) => {
    const id = req.params.id;
    blogSheam.findById(id)
        .then((result) => {
            res.render("details", { Data: result, Title: "Home" });
        }).catch(err => {
            console.log(err);
        })
}
const delete_blog = (req, res) => {
    const id = req.params.id;
    blogSheam.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/blogs' });
        })
        .catch(err => {
            console.log(err);
        });
}

module.exports = {
    get_index,
    create,
    details,
    delete_blog
}