import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import HeroCard from './HeroCard';

const HeroList = ( { publisher } ) => {

	const heroes = useMemo( () => getHeroesByPublisher( publisher ), [publisher] );
	// const heroes = getHeroesByPublisher( publisher );

	return (
		<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2 animate__animated animate__fadeIn">
			{
				heroes.map( hero => (
					<div className="col" key={hero.id}>
						<HeroCard hero={hero}/>
					</div>
				) )
			}
		</div>
	);
};

export default HeroList;
