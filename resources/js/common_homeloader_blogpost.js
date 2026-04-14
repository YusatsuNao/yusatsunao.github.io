document.addEventListener("DOMContentLoaded", function() {
	fetch('../js/blog_data.json')
		.then(response => response.json())
		.then(data => {
			data.slice(0, 13).forEach((item, index) => { // Only process the first three items
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
                 </li>
			`;

			postContainer.appendChild(li);
		}
	}

	function addBlogPrefix(link) {
		return link + '.html';
	}
});