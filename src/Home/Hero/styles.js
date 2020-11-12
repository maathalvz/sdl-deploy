import styled from "styled-components";

export const Container = styled.header`
 
  .content {
    width: 100%;

    max-width: 1080px;

    margin: 0 auto;

    .section-title {
      font-size: 44px;

      text-align: center;

      line-height: 58px;

      max-width: 740px;
      margin: 0 auto;
      padding-top: 7rem;
      @media (max-width: 500px) {
        font-size: 30px;
        line-height:32px;
      }
    }

    p {
      text-align: center;
      padding-top: 7rem;
      font-size: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      @media (max-width: 500px) {
        flex-direction: column;
        font-size:22px;
        padding-top: 3.5rem;
      }
      span {
        margin-left: 20px;
        border: 1px solid var(--white);
        width: 50px;
        display: block;
        display: flex;
        justify-content: center;
        font-size: 24px;
        align-items: center;
        border-radius: 50%;
        height: 50px;

        @media (max-width: 500px) {
          width: 25px;
          height: 25px;
          margin-top: 20px;
          font-size:18px;
          margin-left: 0px;
        }
      }
    }
  }
`;
