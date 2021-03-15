import HeroPreview from '../components/HeroPreview'
import HeroesRow from '../components/HeroesRow'
import heroes from '../api/heroes.json';
import { getHeroesByClasses } from '../helpers/heroes';

const DefaultLayout = () => {
    const { tank, damage, support } = getHeroesByClasses(heroes);
    
    return (
        <div className="container mx-auto h-full">
            <HeroPreview />
            <HeroesRow heroes={tank} heroType='tank' />
        </div>
    );
}

export default DefaultLayout;
