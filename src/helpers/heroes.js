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

export const importHeroVideo = async (role, mediaSource) => {
    const importedVideo = await import(`../assets/videos/${role}/${mediaSource}.mp4`);
    return importedVideo;
}

export const importHeroImageFromVideos = async (role, mediaSource) => {
    const importedImage = await import(`../assets/videos/${role}/${mediaSource}.jpg`);
    return importedImage;
}

export const importHeroAvatar = async (role, mediaSource) => {
    const importedImage = await import(`../assets/images/avatars/${role}/${mediaSource}.png`);
    return importedImage;
}

export const formatHeroNameForVideo = (name) => name.replace(/ /g, '-').replace(/\./g, '').replace(/:/g, '').toLowerCase()