import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { setSelectedHero } from '../../redux/actions';
import { getSelectedHero } from "../../redux/selectors";
import { importHeroAvatar } from '../../helpers/heroes';
import { StyledHeroCard, StyledImg, UpperShadow, BottomShadow, HoverShadow,
  OverflowWrapper, AllowOverflowWrapper, DisableOverflowWrapper, UpperFireAnimation, BottomFireAnimation } from './styled';
import fireAnimation from '../../assets/images/fire.gif';

const HeroCard = ({ hero, selectedHero, setSelectedHero }) => {
  const { id, name, role, mediaSource } = hero;
  const [hovered, setHovered] = useState(false);
  const [isHeroSelected, setIsHeroSelected] = useState(false);
  const [importedAvatar,setImportedAvatar] = useState('');
  const upperImageRef = useRef();
  const bottomImageRef = useRef();

  const reloadFireAnimation = () => {
    upperImageRef.current.src = fireAnimation;
    bottomImageRef.current.src = fireAnimation;
    setTimeout(() => {
      upperImageRef.current.src = '';
      bottomImageRef.current.src = '';
    }, 1000);
  };

  const handleOnClick = () => {
    reloadFireAnimation();
    setSelectedHero({ hero });
  };

  useEffect(() => {
    (async() => {
      try {
        const dynamicImport = await importHeroAvatar(role, mediaSource);
        setImportedAvatar(dynamicImport.default);
      } catch (error) {
        console.error(error);
      }
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  useEffect(() => {
    const isThisHeroSelected = selectedHero.id === id;
    setIsHeroSelected(isThisHeroSelected);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedHero]);

  return (
    <StyledHeroCard
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleOnClick}
      isHeroSelected={isHeroSelected}
    >
      <OverflowWrapper>
        <AllowOverflowWrapper>
        <StyledImg alt={name} src={importedAvatar} />
        <UpperShadow />
        <BottomShadow />
        {
          hovered && !isHeroSelected ? <HoverShadow /> : <></>
        }
        </AllowOverflowWrapper>
        <DisableOverflowWrapper>
          <UpperFireAnimation ref={upperImageRef}/>
          <BottomFireAnimation ref={bottomImageRef}/>
        </DisableOverflowWrapper>
      </OverflowWrapper>
    </StyledHeroCard>
  );
};
  
const mapStateToProps = (state) => ({
  selectedHero: getSelectedHero(state),
});

const mapDispatchToProps = { setSelectedHero };

export default connect(mapStateToProps, mapDispatchToProps)(HeroCard);