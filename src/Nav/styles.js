import styled from "styled-components";

export const Container = styled.nav`
  height: 85px;
  margin-top: 68px;
  position: relative;
  @media (max-width: 500px) {
    padding: 0 20px;
    margin-top: 0;
  }
  .content {
    display: flex;

    width: 100%;
    max-width: 1080px;
    height: 100%;

    margin: 0 auto;

    justify-content: space-between;

    align-items: center;

    div > a {
      color: var(--white);
    }

    .logo {
      font-size: 52px;
      text-transform: uppercase;

      @media (max-width: 500px) {
        font-size: 24px;
      }
    }

    .portfolio,
    .contact {
      font-size: 18px;
      @media (max-width: 500px) {
        font-size: 16px;
      }
      a {
        transition: 0.2s ease-out;
      }
      a:hover {
        color: var(--hover);
      }
    }
  }
`;
