import styled, { keyframes } from "styled-components";



export const Ul = styled.ul`
  column-count: 3;
  column-gap: 0;
  padding-bottom: 7em;
  max-width: 1080px;
  margin: 0 auto;


 @media (max-width: 600px) {
     padding:0 20px;
  }
  h1 {
    padding: 2em 0;
    text-align: center;
    font-size: 24px;

    @media (max-width: 600px) {
     font-size: 16px;
  }
  }

  @media (max-width: 600px) {
    column-count: 3;
  }
`;

export const Li = styled.li`
  margin: 5px;

  img {
    object-fit: cover;
  }
`;
