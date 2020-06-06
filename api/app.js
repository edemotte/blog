const express = require("express");
const app = express();
const Post = require("./api/models/posts.js");
const postData = new Post();

// const posts = [{
//     "id": "1581461442206",
//     "title": "This is a New Blog Post",
//     "content": "This is the content! ",
//     "post_image": "uploads/post-image-1581461442199.jpg",
//     "added_date": "1581461442206"
// }];

// app.get("/api/posts",(req, res)=>{

//     // const test = {
//     //     testing: "testing"
//     // }
//     // postData.add(test);
//     res.status(200).send(postData.get())
// });


app.get("/api/posts/:post_id", (req, res)=>{
    // res.status(200).send(postData.getIndividualPost(postid));
    const postid = req.params.post_id;

    //checking if any data was returned or not
    
    const foundPost = postData.getIndividualPost(postid)
    if(foundPost){
        res.status(200).send(foundPost);
    }
    else{
        res.status(404).send("Not Found");
    }
});

app.listen(3000, ()=>console.log("Listening on http://localhost:3000....."));