const PATH = "./data.json"
const fs = require('fs');

class Post {
    get(){
        return this.readFile();
    }
    
    getIndividualPost(postid){
        const postsList = this.readFile();
        
        /**Tested using traditional method */
        /**for(const post in postsList){
            // console.log(postsList[post])
            if(postsList[post].id == postid){
                return postsList[post];
            }
        }**/
        // console.log(postid);

        /**using ES6 */

        const foundPost = postsList.find(post => post.id == postid);
        // console.log(foundPost);
        return foundPost;
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