export const getHeroesByClasses = (heroesArray = []) => {
    const heroesByClass = {};
    
    for (let i = 0; i < heroesArray.length; i++) {
        const hero = heroesArray[i];
        if (!heroesByClass[hero.class]) {
            heroesByClass[hero.class] = [];
        }
        heroesByClass[hero.class].push(hero);
    }
    return heroesByClass;
};