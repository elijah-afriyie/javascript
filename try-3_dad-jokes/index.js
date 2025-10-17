const submit = document.querySelector('#submit');
const jokes = document.querySelector('#jokes');

// fetch joke from api
async function getDadJoke() {
	try {
		const joke = await axios.get('https://icanhazdadjoke.com', {
			headers: {accept: 'application/json'},
		});
		return joke.data.joke;
	} catch (error) {
		throw new Error('Failed to fetch joke');
	}
}

function displayJoke(joke) {
	const newLi = document.createElement('li');
	newLi.textContent = joke;
	jokes.append(newLi);
}

// button and populating display area
submit.addEventListener('click', async () => {
	try {
		jokes.textContent = '';
		const joke = await getDadJoke();
		displayJoke(joke);
	} catch (error) {
		throw new Error('Failed to fetch joke. Please try again');
	} finally {
	}
});