import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { HERO_ROLES } from '../constants/commonConstants';
import { ReactComponent as SupportSVG } from '../assets/icons/support.svg';

const RoleIcon = ({ role }) => {
    const [importedSVG, updateImportedSVG] = useState();
    
    const importSVG = async (role) => {

    }
    useEffect(() => {
        // importSVG(role);
        // updateImportedSVG(<SupportSVG />)
    }, [role])

    return (
        <>
            {importedSVG}
        </>
    );
}

RoleIcon.propTypes = {
    role: PropTypes.string,
};

RoleIcon.defaultProps = {
    role: 'support',
};

export default RoleIcon;
