import HeroPreview from '../components/HeroPreview'
import HeroesRow from '../components/HeroesRow'
import heroes from '../api/heroes.json';
import { getHeroesByRoles } from '../helpers/heroes';

const DefaultLayout = () => {
    const { tank, damage, support } = getHeroesByRoles(heroes);
    
    return (
        <div className="container mx-auto h-full">
            <HeroPreview />
            <div className='absolute'>
                <HeroesRow heroes={tank} role='tank' />
                <HeroesRow heroes={damage} role='damage' />
                <HeroesRow heroes={support} role='support' />
            </div>
        </div>
    );
}

export default DefaultLayout;
