import styled from "styled-components";

export const LeftbarContainer = styled.div`
  width: 250px;
  background-color: #fff;
  box-sizing: border-box;
  height: 100vh;
  margin: 0;
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
  padding-bottom: 40px;
  align-items: center;
  flex-direction: column;

  .rogobox {
    width: 80%;
    height: 17%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .rogo {
      width: 60px;
      height: 60px;
      background-color: red;
      margin-bottom: 11px;
    }
    .rogoname {
      font-weight: 700;
      font-size: 32px;
      line-height: 135%;
    }
  }
  .logout {
    width: 80%;
    height: 17%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 20px;

    .logout-icon {
      width: 24px;
      height: 24px;
      background-color: red;
      margin-right: 16px;
    }
    .out {
      font-family: "Nunito Sans";
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 116%;
      text-transform: uppercase;
    }
  }
  .navbar {
    width: 80%;
    height: 55%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;

    .icon {
      width: 55px;
      height: 55px;
      background-color: red;
      margin-bottom: 5px;
    }
    .home {
      margin-bottom: 12px;
    }
    .friends {
      margin-bottom: 12px;
    }
    .chat {
      margin-bottom: 12px;
    }
    .active {
      color: blue;
    }
  }
`;
