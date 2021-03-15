import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import HeroCard from './HeroCard';

const HeroesRow = ({ heroes, heroType }) => {
    const prepareHeroCards = (heroes) => heroes.map((hero) => <HeroCard hero={hero} />);

    return (
        <div className="h-auto" style={{ borderBottom: '1px solid black' }}>
            <div className= "h-20" style={{ }}>
                {
                   prepareHeroCards(heroes)
                }
            </div>
        </div>
    );
};

HeroesRow.propTypes = {
    heroes: PropTypes.array,
    heroType: PropTypes.string,
};

HeroesRow.defaultProps = {
    heroes: [],
    heroType: '',
};

export default HeroesRow;
