import styled from 'styled-components';

export const Header = styled.div`
    min-width: 100%;
    border-radius: 0;
    min-height: 0.5%;
    height: 0.5%;
`;

export const Headline = styled.div`
    min-width: 100%;
    border-radius: 0px;
    min-height: 20%;
    height: 20%;
    text-align: center;
    font-size: calc((2.5vh + 2.5vw) / 2) !important;
    font-weight: 500;
    font-family: 'SourceSans', serif;
    padding: 10px 5px;
    background: #fff;
    letter-spacing: 0.03em;
    margin-bottom 5px;
    overflow: hidden !important,
`;
export const TitleDiv = styled.div`
    height: 20%;
    min-height: 20%;
    padding: 10px;
    font-size: calc((1.5vh + 1.5vw) / 2) !important;
    font-family: Roboto", serif;
    color: #6F7072;
    font-weight: 400,
    overflow: hidden;
    letter-spacing: 0.02em;
`;
export const DetailDiv = styled.div`
    height: 45%;
    min-height: 45%;
    margin-top: 5px;
    margin-bottom: 5px;
    border-bottom: solid 1px grey;
    overflow: hidden;
`;
export const ButtonDiv = styled.div`
    height: 5%;
    min-height: 5%;
    text-align: center;
    padding: auto;

`;
