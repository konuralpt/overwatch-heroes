import HeroPreview from '../components/HeroPreview'
import HeroesRow from '../components/HeroesRow'
import heroes from '../api/heroes.json';
import { getHeroesByClasses } from '../helpers/heroes';

const DefaultLayout = () => {
    const { tank, damage, support } = getHeroesByClasses(heroes);
    
    return (
        <div className="container mx-auto h-full">
            <HeroPreview />
            <div className='absolute'>
                <HeroesRow heroes={tank} heroType='tank' />
                <HeroesRow heroes={damage} heroType='damage' />
                <HeroesRow heroes={support} heroType='support' />
            </div>
        </div>
    );
}

export default DefaultLayout;
