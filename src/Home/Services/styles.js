import styled from "styled-components";

export const Container = styled.section`
  padding: 7rem 0;

  @media (max-width: 500px) {
    padding-top: 2em;
    margin: 1em 0;
    padding-bottom: 2em;
  }
  h2 {
    text-align: center;
    padding: 2em 0;

    font-size: 32px;
  }
  .content {
    li {
      position: relative;
      &:not(:first-child) {
        margin: 7rem 0;
        @media (max-width: 500px) {
          margin: 3em 0;
        }
      }
      .banner {
        margin: 2em;
        padding-left: 80px;
        padding-right: 120px;

        padding-top: 60px;
        padding-bottom: 60px;
        background: var(--black);
        width: fit-content;
        max-width: 500px;
        @media (max-width: 500px) {
          width: 100%;
          max-width: 100%;
          padding: 0;
          margin: 0;
          text-align: center;
        }
        h2 {
          font-size: 32px;

          @media (max-width: 500px) {
            font-size: 32px;
            text-align: center;
          }
        }
        p {
          font-size: 18px;
          line-height: 32px;

          @media (max-width: 500px) {
            font-size: 14px;
          }
        }
      }
    }
  }
`;
