import styled from "styled-components";

export const RightbarContainer = styled.div`
  width: 450px;
  height: 100vh;
  background-color: white;
  border: 1px solid black;
  /* float: right; */

  .Profile {
    width: 450px;
    height: 350vh;
    background-color: white;
    font-family: "Nunito Sans";
    border: 1px solid black;

    .Fofile-image {
      width: 150px;
      height: 150px;
      margin-top: 32px;
      margin-left: 150px;
      font-size: 50px;
      font-weight: 500;
    }
    .Profile-name {
      margin-top: 5px;
      font-weight: 700;
      font-size: 32px;

      div:nth-child(1) {
        margin-left: 40%;
        color: #1d1929;
        font-weight: 700;
        font-size: 32px;
      }
      div:nth-child(2) {
        margin-left: 45.5%;
        color: #a5a3a9;
        font-weight: 500;
        font-size: 16px;
      }
    }
    .Follow {
      margin-top: 24px;
      width: 450px;
      height: 53px;
      border: 1px solid black;
      display: flex;
      .Follow-follwer {
        width: 205px;
        height: 53px;
        align-items: center;

        div:nth-child(1) {
          font-weight: 700;
          font-size: 24px;
          color: #1d1929;
          text-align: center;
        }
        div:nth-child(2) {
          font-weight: 600;
          font-size: 16px;
          color: #a5a3a9;
          text-align: center;
        }
      }
      .Follow-following {
        width: 205px;
        height: 53px;
        align-items: center;

        div:nth-child(1) {
          font-weight: 700;
          font-size: 24px;
          color: #1d1929;
          text-align: center;
        }
        div:nth-child(2) {
          font-weight: 600;
          font-size: 16px;
          color: #a5a3a9;
          text-align: center;
        }
      }
    }

    .Writing {
      margin: 0 auto;
      width: 370px;
      height: 139px;
      border: 1px solid black;
      background: #f9f9f9;
      border-radius: 24px;
      .belong {
        font-weight: 400;
        font-size: 20px;
        color: #77757f;
      }
      .write {
        font-weight: 400;
        font-size: 18px;
        color: #1d1929;
      }
    }
  }
`;
