document.addEventListener('DOMContentLoaded', () => {
    const addBlogButton = document.getElementById('addBlogButton');
    const blogContainer = document.getElementById('blogContainer');

    addBlogButton.addEventListener('click', () => {
        const title = document.getElementById('blogTitle').value;
        const description = document.getElementById('blogDescription').value;
        const image = document.getElementById('blogImage').value;
        const date = new Date().toLocaleString();

        const blogPost = document.createElement('div');
        blogPost.classList.add('blog-post');
        blogPost.innerHTML = `
            <h3>${title}</h3>
            <p>${description}</p>
            <p><small>${date}</small></p>
            ${image ? `<img src="${image}" alt="${title}" class="img-fluid">` : ''}
        `;

        blogContainer.appendChild(blogPost);

        // Clear input fields
        document.getElementById('blogTitle').value = '';
        document.getElementById('blogDescription').value = '';
        document.getElementById('blogImage').value = '';
    });
});