import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { StyledRoleIcon } from './styled';
import { HERO_ROLES } from '../../constants/commonConstants';
import { ReactComponent as TankSVG } from '../../assets/icons/tank.svg';
import { ReactComponent as DamageSVG } from '../../assets/icons/damage.svg';
import { ReactComponent as SupportSVG } from '../../assets/icons/support.svg';

const RoleIcon = ({ role }) => {
    const [importedSVG, updateImportedSVG] = useState();
    
    const importSVG = (role) => {
        if (role === HERO_ROLES.TANK) {
            updateImportedSVG(<TankSVG />)
        }
        else if (role === HERO_ROLES.DAMAGE) {
            updateImportedSVG(<DamageSVG />)
        }
        else if (role === HERO_ROLES.SUPPORT) {
            updateImportedSVG(<SupportSVG />)
        }        
    }

    useEffect(() => {
        importSVG(role);
    }, [role]);
    

    return (
        <StyledRoleIcon className='ml-3 mb-2'>
            {importedSVG}
        </StyledRoleIcon>
    );
}

RoleIcon.propTypes = {
    role: PropTypes.string,
};

RoleIcon.defaultProps = {
    role: 'support',
};

export default RoleIcon;
