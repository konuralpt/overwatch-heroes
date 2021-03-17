import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setSelectedHero } from '../../redux/actions';
import { getSelectedHero } from "../../redux/selectors";
import { StyledHeroCard, StyledImg, UpperShadow, BottomShadow, HoverShadow } from './styled';

const HeroCard = ({ hero, selectedHero, setSelectedHero }) => {
  const { id, name, avatar } = hero;
  const [hovered, setHovered] = useState(false);
  const [isHeroSelected, setIsHeroSelected] = useState(false);

  const handleOnClick = () => {
    setSelectedHero({ hero });
  };

  useEffect(() => {
    const isThisHeroSelected = selectedHero.id === id;
    setIsHeroSelected(isThisHeroSelected);
  }, [selectedHero]);

  return (
    <StyledHeroCard
      onMouseEnter={() => {console.log('asdasd');setHovered(true)}}
      onMouseLeave={() => setHovered(false)}
      onClick={handleOnClick}
      isHeroSelected={isHeroSelected}
    >
        <StyledImg alt={name} src={avatar} />
        <UpperShadow />
        <BottomShadow />
        {
          hovered && !isHeroSelected ? <HoverShadow /> : <></>
        }
    </StyledHeroCard>
  );
};
  
const mapStateToProps = (state) => ({
  selectedHero: getSelectedHero(state),
});

const mapDispatchToProps = { setSelectedHero };

export default connect(mapStateToProps, mapDispatchToProps)(HeroCard);
  