document.addEventListener('DOMContentLoaded', function() {
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    const postsContainer = document.getElementById('postsContainer');

    blogPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p><strong>By ${post.username}</strong></p>
            <p>${post.blogPost}</p>
        `;
        postsContainer.appendChild(postElement);
    });
});