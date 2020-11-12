import styled from "styled-components";

export const Container = styled.article`
  .content {
    width: 100%;

    p {
      font-size: 26px;
      text-align: justify;

      max-width: 700px;

      margin: 0 auto;
      line-height: 44px;

      @media (max-width: 500px) {
        font-size: 16px;
        line-height: 24px;
        text-align: center;
      }
    }
    .info-2 {
      margin-top: 32px;
    }
  }
`;
