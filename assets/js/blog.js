//document.addEventListener('DOMContentLoaded', function() {
    const blogPosts = JSON.parse(localStorage.getItem('blogs')) || [];
    console.log("Saved Data: ", blogPosts);  // {}  -->  [].forEach()

    const postsContainer = document.getElementById('postsContainer');

    blogPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.innerHTML = `
            <h1 class="title is-6">${post.title}</h1>
            <p><strong>By ${post.username}</strong></p>
            <p>${post.blogPost}</p>
        `;
        postsContainer.appendChild(postElement);
    });
//});