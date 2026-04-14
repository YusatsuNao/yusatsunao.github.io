document.addEventListener("DOMContentLoaded", function() {
	fetch('js/blog_data.json')
		.then(response => response.json())
		.then(data => {
			const numItemsToShow = window.innerWidth < 1025 ? 2 : 3;
			data.slice(0, numItemsToShow).forEach((item, index) => { // Only process the first three items
				createPostItem(item, index);
			});
		})
		.catch(error => console.error('Error fetching data:', error));

	function createPostItem(item, index) {
		if (item.title && item.image && item.desc && item.link) {
			const postContainer = document.querySelector('.blog');

			const div = document.createElement('div');
			div.classList.add('card', 'full', 'blog_post', 'fade-in');
			div.setAttribute('id', `link${index + 1}`);
			div.setAttribute('onclick', `openLink('${addBlogPrefix(item.link)}')`);

			div.innerHTML = `
				<p class="copy">${item.date}</p>
				<div class="grid_content">
					<h1>${item.title}</h1>
					<div style="background: #01a1fa;" class="inner-border-line"></div>
				</div>
				<span class="grid-over-bg"></span>
				<div class="image-banner">
					<img src="${item.image}" alt="Yusatsu Nao, yusatsu nao"/>
				</div>
			`;

			postContainer.appendChild(div);
		}
	}

	function addBlogPrefix(link) {
		return 'blog/' + link + '.html';
	}
});