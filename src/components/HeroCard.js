
const HeroCard = ({hero: { name, avatar }}) => {
    return (
      <div className="parallelogram m-1">
          <img alt={name} src={avatar} className='heroAvatar'/>
          <div className="upperShadow"></div>
          <div className="bottomShadow"></div>
      </div>
    );
  }
  
  export default HeroCard;
  