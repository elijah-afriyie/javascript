class MovieCollection {
    constructor() {
        this.movies = [];
    }

    addMovie(movie) {
        this.movies.push(movie);
    }

    getAvrRating(title) {
        const movie = this.movies.find((movie) => movie.title === title);
        if (!movie) return null;
        const sum = movie.ratings.reduce((acc, rating) => acc + rating, 0);
        return (sum / movie.ratings.length).toFixed(1);
    }

    getMoviesByYear(year) {
        return this.movies
            .filter((movie) => movie.year === year)
            .map((movie) => movie.title);
    }

    listMoviesByRating() {
        return this.movies
            .slice() // copy to avoid mutating original
            .sort((a, b) => {
                const avgA =
                    a.ratings.reduce((acc, r) => acc + r, 0) / a.ratings.length;
                const avgB =
                    b.ratings.reduce((acc, r) => acc + r, 0) / b.ratings.length;
                return avgB - avgA; // descending order
            })
            .map((m) => m.title);
    }
}

const movies = new MovieCollection();

movies.addMovie({title: "Inception", year: 2010, ratings: [9, 10, 8]});
movies.addMovie({title: "Interstellar", year: 2014, ratings: [8, 9, 9, 10]});
movies.addMovie({title: "The Dark Knight", year: 2008, ratings: [9, 10, 10]});

console.log(movies.getAvrRating("The Dark Knight"));
console.log(movies.getMoviesByYear(2010));
console.log(movies.listMoviesByRating());

