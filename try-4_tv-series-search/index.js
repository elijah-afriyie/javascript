// TVMaze API base URL
const API_BASE_URL = 'https://api.tvmaze.com';

// DOM elements for form and image container
const form = document.querySelector('#searchForm');
const imageContainer = document.querySelector('#imageContainer');

// Fetches shows from TVMaze API
async function fetchShows(query) {
	const config = { params: { q: query } };
	const response = await axios.get(`${API_BASE_URL}/search/shows`, config);
	return response.data;
}

// Displays error message in the UI
function displayError(message) {
	imageContainer.innerHTML = `<p>${message}</p>`;
}

// Renders show banners
function getShowBanners(shows) {
	if (!Array.isArray(shows)) {
		console.error('Expected an array of shows');
		return;
	}
	const fragment = document.createDocumentFragment(); // Minimize DOM reflows
	for (let result of shows) {
		if (result?.show?.image?.medium) {
			const img = document.createElement('img');
			img.src = result.show.image.medium;
			img.alt = result.show.name || 'Show banner'; // Accessible alt text
			fragment.append(img);
		}
	}
	imageContainer.append(fragment);
}

// Handles form submission
form.addEventListener('submit', async (e) => {
	e.preventDefault();
	imageContainer.innerHTML = '<p>Loading...</p>'; // Show loading state
	try {
		const searchQuery = form.elements.query.value.trim();
		if (!searchQuery) {
			displayError('Please enter a search query.');
			return;
		}
		const shows = await fetchShows(searchQuery);
		if (shows.length === 0) {
			displayError(`No results found for <strong>"${searchQuery}"</strong>`);
			return;
		}
		getShowBanners(shows);
		form.elements.query.value = ''; // Clear input
	} catch (error) {
		console.error('Error fetching search query:', error);
		displayError('Sorry, something went wrong while searching. Please try again later.');
	}
});