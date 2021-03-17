import styled from 'styled-components';

export const StyledFooter = styled.div`
    paddingLeft: 6em;
    text-align: center;
`;

export const StyledContinueButton = styled.button`
    font-family: 'FuturaBQ';
    font-size: 25px;
    letter-spacing: 5px;
    background-color: orange;
    color: white;
    border-radius: 2px;
    border: none;
    outline: none;
    margin-top: 40px;
    width: 260px;
    height: 60px;
    transition: all 0.1s ease-in;
    opacity: 0.85;
    &:hover {
        cursor: pointer;
        transform: scale(1.05);
    }
`;