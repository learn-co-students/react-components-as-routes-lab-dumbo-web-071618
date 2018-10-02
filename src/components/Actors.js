import React from 'react';
import { actors } from '../data';

const renderMovies = actor => {
	return actor.movies.map(movie => {
		return (
			<li key={movie}>{movie}</li>
		)
	})
}

const renderActors = () => {
	return actors.map(actor => {
		return (
			<div key={actor.name}>
				<h1>{actor.name}</h1>
				<ul>{renderMovies(actor)}</ul>
			</div>
		)
	})
}

const Actors = () => {
	return (
		<div>
			<h1>Actors Page</h1>
			{renderActors()}
		</div>
	);
};

export default Actors;
