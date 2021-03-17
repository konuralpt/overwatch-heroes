import React from 'react';
import PropTypes from 'prop-types';
import { StyledHeroRow } from './styled';
import HeroCard from '../HeroCard';
import RoleRow from '../RoleRow';

const _ = require('lodash');

const HeroesRow = ({ heroes, role }) => {
    const prepareHeroCards = (heroes) => heroes.map((hero) => <HeroCard key={_.uniqueId()} hero={hero} />);

    return (
        <StyledHeroRow>
            <RoleRow role={role} />
            <div className="h-20">
                {
                   prepareHeroCards(heroes)
                }
            </div>
        </StyledHeroRow>
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
