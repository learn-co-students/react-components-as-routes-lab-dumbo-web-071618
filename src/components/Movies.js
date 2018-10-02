import React from 'react';
import { movies } from '../data';

const renderGenres = (movie) => {
	return movie.genres.map(genre => {
		return (
			<li>{genre}</li>
		)
	})
}

const renderMovies = () => {
	return movies.map(movie => {
		return (
			<div>
				<h1>{movie.title}</h1>
				<h3>{movie.time}</h3>
				<ul>
					{renderGenres(movie)}
				</ul>
			</div>
		)
	})
}

const Movies = () => {
	return (
		<div>
			<h1>Movies Page</h1>
			{renderMovies()}
		</div>
	);
};

export default Movies;
