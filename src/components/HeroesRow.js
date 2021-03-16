import React from 'react';
import PropTypes from 'prop-types';
import HeroCard from './HeroCard';
import RoleIcon from './RoleIcon';

const _ = require('lodash');

const HeroesRow = ({ heroes, role }) => {
    const prepareHeroCards = (heroes) => heroes.map((hero) => <HeroCard key={_.uniqueId()} hero={hero} />);

    return (
        <div className="h-auto mr-5 inline-block">
            <RoleIcon role={role} />
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
    role: PropTypes.string,
};

HeroesRow.defaultProps = {
    heroes: [],
    role: '',
};

export default HeroesRow;
