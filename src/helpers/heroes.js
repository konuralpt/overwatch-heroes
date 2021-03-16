export const getHeroesByRoles = (heroesArray = []) => {
    const heroesByRole = {};
    
    for (let i = 0; i < heroesArray.length; i++) {
        const hero = heroesArray[i];
        if (!heroesByRole[hero.role]) {
            heroesByRole[hero.role] = [];
        }
        heroesByRole[hero.role].push(hero);
    }
    return heroesByRole;
};