import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { importHeroVideo, importHeroImageFromVideos } from '../../helpers/heroes';
import { getSelectedHero } from "../../redux/selectors";
import { StyledHeroVideo, StyledHeroImage } from './styled';

const HeroVideo = ({ selectedHero }) => {
    const [importedVideo, setImportedVideo] = useState();
    const [importedImage, setImportedImage] = useState();
    const [isImageOrVideo, setIsImageOrVideo] = useState(true); // true for video, false for image

    const importImage = async ({ role, mediaSource }) => {
        setIsImageOrVideo(true);
        try {
            const dynamicImport = await importHeroImageFromVideos(role, mediaSource);
            setIsImageOrVideo(false);
            setImportedImage(dynamicImport.default);
        } catch (error) {
            console.error(error);
        }
    };

    const importVideo = async ({ role, mediaSource }) => {
        try {
            const dynamicImport = await importHeroVideo(role, mediaSource);
            setIsImageOrVideo(true);
            setImportedVideo(dynamicImport.default);
        } catch (error) {
            importImage({ role, mediaSource });
        }
    };

    useEffect(() => {
        if (!_.isEmpty(selectedHero)) {
            importVideo(selectedHero);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedHero]);

    return (
        <StyledHeroVideo>
            {
                isImageOrVideo ? 
                    <video key={importedVideo} autoPlay loop muted style={{ transition: 'all 0.1s ease-in' }}>
                        <source src={importedVideo} type="video/mp4" style={{ transition: 'all 0.1s ease-in' }} />
                    </video>:
                    <StyledHeroImage alt='' src={importedImage} />
            }
        </StyledHeroVideo>
    );
}

const mapStateToProps = (state) => ({
    selectedHero: getSelectedHero(state),
});
    
export default connect(mapStateToProps, null)(HeroVideo);