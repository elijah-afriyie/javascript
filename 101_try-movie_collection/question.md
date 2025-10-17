# question

Create a class MovieCollection that stores an array of movies. Each movie is an object with title, releaseYear, and ratings (array of numbers).
Add methods:

- addMovie(movie): adds a movie
- getAverageRating(title): returns the average rating of the movie
- getMoviesByYear(year): returns titles of movies released in that year
- listMoviesByRating(): returns all movie titles sorted descending by average rating

Add three movies:
"Inception" (2010, ratings: [9, 10, 8])
"Interstellar" (2014, ratings: [8, 9, 9, 10])
"The Dark Knight" (2008, ratings: [10, 9, 10])

Final Answer:
getAverageRating("Inception") → 9
getMoviesByYear(2014) → ["Interstellar"]
listMoviesByRating() → ["The Dark Knight", "Inception", "Interstellar"]
