document.addEventListener("DOMContentLoaded", function() {
    let storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    let blogPostContainer = document.querySelector(".blog-post");

    if (storedPosts.length > 0) {
        storedPosts.forEach(function(post) {
            let blogPost = document.createElement("div");
            blogPost.classList.add("single-post");

            let titleElement = document.createElement("h2");
            titleElement.textContent = post.title;

            let contentElement = document.createElement("p");
            contentElement.textContent = post.content;

            let usernameElement = document.createElement("h3")
            usernameElement.textContent = post.username;

            blogPost.appendChild(titleElement);
            blogPost.appendChild(contentElement);
            blogPost.appendChild(usernameElement);

            blogPostContainer.appendChild(blogPost);
        });
    }

    let backButton = document.querySelector("#back-button");
    backButton.addEventListener("click", function () {
        window.location.href = "index.html";
    });
    
    let clearPosts = document. querySelector("#clear-posts-button");
    clearPosts.addEventListener("click", function () {
        while (blogPostContainer.firstChild) {
            blogPostContainer.removeChild(blogPostContainer.firstChild);
        }
        localStorage.clear();
        storedPosts = [];
    });
});