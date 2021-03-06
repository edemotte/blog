


const API_URL = "http://localhost:3000/api/posts";
const API_BASE_URL = "http://localhost:3000/";


window.onload = () =>{
    getPosts();
}

const getPosts = () => {
    fetch(API_URL, {
        method: 'GET'
    }).then((response)=>{
        return response.json();
    }).then((data)=>{
        buildPosts(data);
    })
}

const buildPosts = (blogPosts) =>{
    
    let blogPostsContent = "";
    for (blogPost of blogPosts) {
        const blogPostDate = new Date(parseInt(blogPost.added_date)).toDateString();
        const blogImage = `${API_BASE_URL}${blogPost.post_image}`;
        const blogUrl = `/post.html?id=${blogPost.id}`;
        blogPostsContent += `
        <a class="post-link" href="${blogUrl}">
            <div class="post">
                <div class="post-image" style="background-image:url(${blogImage});"></div>
                <div class="post-content">
                    <div class="post-date">${blogPostDate}</div>
                    <div class="post-title">${blogPost.title}</div>
                    <div class="post-text">${blogPost.content}</div>
                </div>
            </div>
        </a>`
    }
    document.querySelector(".blog-posts").innerHTML = blogPostsContent;
}