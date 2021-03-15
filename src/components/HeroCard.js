
const HeroCard = ({hero: { name, avatar }}) => {
    return (
      <div className="parallelogram m-1">
          <img alt={name} src={avatar} className='heroAvatar'/>
          <div class="upperShadow"></div>
          <div class="bottomShadow"></div>
      </div>
    );
  }
  
  export default HeroCard;
  