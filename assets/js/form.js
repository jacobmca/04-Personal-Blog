document.addEventListener("DOMContentLoaded", function() {
    let usernameInput = document.querySelector("#username input");
    let blogTitleInput = document.querySelector("#blog-title input");
    let blogContentInput = document.querySelector("#blog-content textarea");
    let postButton = document.querySelector("#button");

postButton.addEventListener("click", function () {
    let username = usernameInput.value;
    let blogTitle = blogTitleInput.value;
    let blogContent = blogContentInput.value;

if (username !== "" && blogTitle !== "" && blogContent !== "") {
    let post = {
        username: `Post created by ${username}`,
        title: blogTitle,
        content: blogContent
    };

    let existingPosts = JSON.parse(localStorage.getItem("posts")) || [];
    existingPosts.push(post);

    localStorage.setItem("posts", JSON.stringify(existingPosts));

    window.location.href = "blog.html";
} else {
    alert("All fields must be completed.");
}
});
});