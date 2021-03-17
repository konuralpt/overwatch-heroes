import { StyledHeroCard, StyledImg, UpperShadow, BottomShadow } from './styled';


const HeroCard = ({hero: { name, avatar }}) => {
    return (
      <StyledHeroCard className='ml-2'>
          <StyledImg alt={name} src={avatar} />
          <UpperShadow />
          <BottomShadow />
      </StyledHeroCard>
    );
  }
  
  export default HeroCard;
  