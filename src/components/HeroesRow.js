import React from 'react';
import PropTypes from 'prop-types';
import HeroCard from './HeroCard';
import RoleIcon from './RoleIcon';

const _ = require('lodash');

const HeroesRow = ({ heroes, heroType }) => {
    const prepareHeroCards = (heroes) => heroes.map((hero) => <HeroCard key={_.uniqueId()} hero={hero} />);

    return (
        <div className="h-auto mr-5 inline-block" style={{ borderBottom: '1px solid black' }}>
            <RoleIcon />
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
