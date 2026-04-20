document.addEventListener("DOMContentLoaded", function () {
    fetch('../js/blog_data.json')
        .then(response => response.json())
        .then(data => {
            data.slice(0, 13).forEach((item, index) => {
                createPostItem(item, index);
            });
        })
        .catch(error => console.error('Error fetching data:', error));

    function createPostItem(item, index) {
        if (item.title && item.link) {
            const postContainer = document.querySelector('#postlist');

            const li = document.createElement('li');
            li.classList.add('blog', `${item.class}`, 'listed');
            li.setAttribute('id', `link${index + 1}`);

            li.innerHTML = `
                <a href="${addBlogPrefix(item.link)}">${item.id} : <span>${item.date}</span>
                <br/>
                <span>${item.title}</span>
                </a>
            `;

            postContainer.appendChild(li);
        }
    }

    function addBlogPrefix(link) {
        const isVercel = window.location.hostname.includes('vercel.app');

        if (isVercel) {
            return `/blog/${link}.html`;
        }

        return `${link}.html`;
    }
});