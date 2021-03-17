import styled from 'styled-components';

const HeroRowWrapper = ({ className, children }) => (
  <div className={className}>
    {children}
  </div>
);

export const StyledHeroRow = styled(HeroRowWrapper)``;