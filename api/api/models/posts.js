const PATH = "./data.json"
const fs = require('fs');

class Post {
    get(){
        return this.readFile();
    }
    
    getIndividualPost(){

    }

    add(newPost){
        const currentPost = this.readFile();
        console.log(currentPost);
        currentPost.unshift(newPost);
        this.storeData(currentPost);

    }

    readFile(){
        let rawdata = fs.readFileSync(PATH);
        let posts = JSON.parse(rawdata);
        return posts;
    }

    storeData(rawData){
        let data = JSON.stringify(rawData);
        fs.writeFileSync(PATH, data);
    }
}

module.exports = Post;