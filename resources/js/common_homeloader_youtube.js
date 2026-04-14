document.addEventListener("DOMContentLoaded", function() {
	fetch('js/yt_data.json')
		.then(response => response.json())
		.then(data => {
			const numItemsToShow = window.innerWidth < 1025 ? 2 : 3;
			data.slice(0, numItemsToShow).forEach((item, index) => { // Only process the first two or three items based on screen width
				createVideoItem(item, index);
			});
		})
		.catch(error => console.error('Error fetching data:', error));

	function createVideoItem(item, index) {
		if (item.title && item.image && item.link) {
			const postContainer = document.querySelector('.new');

			const div = document.createElement('div');
			div.classList.add('card', 'full', 'video_post', 'fade-in');
			div.setAttribute('id', `link${index + 1}`);
			div.setAttribute('onclick', `openLink('${item.link}')`);

			div.innerHTML = `
				<p class="copy">${item.date}</p>
				<div class="grid_content">
					<span class="title_divider"></span><h2>${item.title}</h2>
				</div>
				<span class="grid-over-bg"></span>
				<div class="image-banner">
					<img src="img/thumb/${item.image}" alt="Yusatsu Nao, yusatsu nao"/>
				</div>
			`;

			postContainer.appendChild(div);
		}
	}
});
