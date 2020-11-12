import styled from "styled-components";

export const Container = styled.section`
  padding: 12em 0;

  font-weight: 800;
  .row {
    display: grid;
    width: 80%;

    max-width: 1080px;

    margin: 0 auto;

    grid-template: auto auto / 2.5fr 1fr;

    .col-1 {
      span {
        color: gray;
        margin-bottom: 95px;
        display: block;
        font-size: 14px;
        line-height: 14px;
      }

      h2 {
        font-size: 54px;
        padding-right: 100px;
        line-height: 53px;
        font-weight: 800;
      }
      h3 {
        font-size: 24px;

        line-height: 68px;

        letter-spacing: 3px;
        font-weight: 300;
      }
    }

    .col-2 {
      padding: 50px;

      h3 {
        font-size: 17px;
        text-transform: uppercase;
        margin-bottom: 108px;
        font-weight: 400;
      }
      ul {
        li {
          padding: 20px 0;
          .location {
            span,
            a {
              display: block;
              font-size: 18px;
              line-height: 24px;
            }

            a {
              color: white;
            }
          }

          p {
            display: block;
            font-size: 18px;
            line-height: 24px;
          }

          ol {
            display: flex;
            width: max-content;
            
            li {
              margin-right: 2rem;

              display: flex;
              justify-content: flex-end;
              img {
                display: block;
                width: 28px;
                object-fit: cover;
              }
            }
          }
        }
      }
    }
  }
`;
