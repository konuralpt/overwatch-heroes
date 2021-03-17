import styled from 'styled-components';

const HeroCardWrapper = ({ className, children }) => (
  <div className={className}>
    {children}
  </div>
);

export const StyledHeroCard = styled(HeroCardWrapper)`
  width: 40px;
  height: 70px;
  display: inline-block;
  background: rgba(0,0,0, 0.3);    
  border: 1px solid rgba(0,0,0, 0.3);
  border-radius: 5px;
  transform: skewX(-10deg);
  overflow: hidden;
  &:hover {
    -webkit-box-shadow: #FFF 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px, red 0 -18px 40px, inset -1px 7px 10px -2px rgba(0,0,0,0); 
    box-shadow: #FFF 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px, red 0 -18px 40px, inset -1px 7px 10px -2px rgba(0,0,0,0);
    cursor: pointer;
    transform: scale(1.2) skewX(-10deg);
    background: #FEA200;
  }
`;

export const StyledImg = styled.img`
    transform: skewX(10deg);
    left: -30%;
    top: 4px;
    max-width: 100vw;
    position: relative;
    width: 66px;
    height: 59px;
    z-index: -2;
`;

export const UpperShadow = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    -webkit-box-shadow: inset 1px 9px 2px -5px rgba(255,255,255,1);
    -moz-box-shadow: inset 1px 9px 2px -5px rgba(255,255,255,1);
    box-shadow: inset 1px 9px 2px -5px rgba(255,255,255,1);
`;

export const BottomShadow = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    -webkit-box-shadow: inset 1px -11px 2px -7px rgba(255,255,255,1);
    -moz-box-shadow: inset 1px -11px 2px -7px rgba(255,255,255,1);
    box-shadow: inset 1px -11px 2px -7px rgba(255,255,255,1);
`;