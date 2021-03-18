import styled from 'styled-components';

export const StyledHeroVideo = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%; 
    overflow: hidden;
    & > video {
        /* Make video to at least 100% wide and tall */
        min-width: 100%; 
        min-height: 100%; 
    }
`;

export const StyledHeroImage = styled.img`
    width: 1920px
`;