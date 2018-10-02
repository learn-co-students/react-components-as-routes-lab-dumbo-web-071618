import React from 'react';
import { directors } from '../data';

const renderMovies = (director) => {
	return director.movies.map( movie => {
		return (
			<li key={movie}>{movie}</li>
		)
	})
}

const renderDirectors = () => {
	return directors.map(director => {
		return (
			<div key={director.name}>
				<h1>{director.name}</h1>
				<ul>{renderMovies(director)}</ul>
			</div>
		)
	})
}

const Directors = () => {
	return (
		<div>
			<h1>Directors Page</h1>
			{renderDirectors()}
		</div>
	);
}

export default Directors
