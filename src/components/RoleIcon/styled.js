import styled from 'styled-components';

const RoleIconWrapper = ({ className, children }) => (
  <div className={className}>
    {children}
  </div>
);

export const StyledRoleIcon = styled(RoleIconWrapper)`
    border: 2px solid rgb(246, 246, 246, 0.5);
    background: rgba(0,0,0, 0.3);    
    border-radius: 20px;
    display: flex;
    width: 35px;
    height: 35px;
    & > svg {
        display: block;
        margin: auto;
        height: 17px;
    }
`;