import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import RoleIcon from './components/RoleIcon';
import RoleLabel from './components/RoleLabel';
import { StyledRoleRow } from './styled';

const RoleRow = ({ role }) => {

    return (
        <StyledRoleRow>
            <RoleIcon role={role}/>
            <RoleLabel role={role}/>
        </StyledRoleRow>
    );
}

RoleRow.propTypes = {
    role: PropTypes.string,
};

RoleRow.defaultProps = {
    role: 'support',
};

export default RoleRow;
