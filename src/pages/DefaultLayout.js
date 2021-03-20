import HeroVideo from '../components/HeroVideo'
import HeroesRow from '../components/HeroesRow'
import Footer from '../components/Footer'
import heroes from '../api/heroes.json';
import { getHeroesByRoles } from '../helpers/heroes';

const DefaultLayout = () => {
    const { tank, damage, support } = getHeroesByRoles(heroes);
    
    return (
        <div className="container mx-auto h-full">
            <HeroVideo />
            <div style={{ paddingLeft: '6em', position: 'absolute', bottom: '200px', minWidth: '1800px' }}>
                <HeroesRow heroes={tank} role='tank' />
                <HeroesRow heroes={damage} role='damage' />
                <HeroesRow heroes={support} role='support' />
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
