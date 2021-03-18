import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { StyledRoleLabel } from './styled';

const RoleLabel = ({ role }) => {
    const [roleLabel, updateRoleLabel] = useState('');
    

    useEffect(() => {
        updateRoleLabel(role.toUpperCase());
    }, [role]);
    

    return (
        <StyledRoleLabel>
            {roleLabel}
        </StyledRoleLabel>
    );
}

RoleLabel.propTypes = {
    role: PropTypes.string,
};

RoleLabel.defaultProps = {
    role: 'support',
};

export default RoleLabel;
