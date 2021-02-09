import React, { useMemo } from 'react';
import HeroCard from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { useHistory, useLocation } from 'react-router-dom';
import { queryString } from '../../helpers/helpers';
import { getHeroesByName } from '../../selectors/getHeroesByName';

const SearchScreen = () => {

	const history = useHistory();
	const location = useLocation();
	const { q = '' } = queryString( location.search );

	const [formValues, handleInputChange] = useForm( {
		searchText: q
	} );

	const { searchText } = formValues;

	const heroesFiltered = useMemo( () => getHeroesByName( q ), [q] );

	const handleSearch = ( e ) => {
		e.preventDefault();
		history.push( `?q=${searchText}` );
	};

	return (
		<div>
			<h1>Search Screen</h1>
			<hr/>

			<div className="row">
				<div className="col-5">
					<h4>Search Form</h4>
					<hr/>

					<form onSubmit={handleSearch}>
						<input
							type="text"
							name="searchText"
							value={searchText}
							onChange={handleInputChange}
							placeholder="Find you hero"
							className="form-control"/>

						<button type="submit"
						        className="btn btn-outline-primary m-1 btn-block">
							Search...
						</button>
					</form>
				</div>

				<div className="col-7">
					<h4>Results</h4>
					<hr/>

					{
						( q === '' ) &&
						<div className="alert alert-info">
							Search a hero
						</div>
					}

					{
						( q !== '' && !heroesFiltered.length ) &&
						<div className="alert alert-danger">
							There is no a hero with <strong>{q}</strong>
						</div>
					}

					{
						heroesFiltered.map( hero => (
							<HeroCard key={hero.id} hero={hero}/>
						) )
					}
				</div>
			</div>
		</div>
	);
};

export default SearchScreen;
