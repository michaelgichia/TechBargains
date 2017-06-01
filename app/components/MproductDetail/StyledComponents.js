import styled from 'styled-components';

export const SubtitleDiv = styled.div`

  @media (max-width: 720px) {
    font-size: 14px;
  }

  @media (min-width: 720px) {
    font-size: 18px;
  }

    > p {
        font-family: Roboto, Helvetica, Arial;
        text-align: left;
        padding: 10px 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        line-height: 19px;
        max-height: 45px;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    > a {
        padding: 10px 10px;
        color: rgb(82, 92, 101);
        text-decoration: underline;
    }
`
export const TitleDiv = styled.div`
    background-color: #ff8400;
    padding: 10px 16px;

    > p {
        font-family: Roboto, Helvetica, Arial;
        text-align: left;
        line-height: 1.1;
    
  @media (max-width: 720px) {
    font-size: 18px;
  }

  @media (min-width: 720px) {
    font-size: 24px;
  }
}
`