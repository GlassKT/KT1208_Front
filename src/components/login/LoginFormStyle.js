import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 788px;
  height: 829px;
  background-color: white;

  .login-title {
    margin-top: 71px;
    margin-left: 40px;
    font-family: "Poppins";

    div:nth-child(1) {
      color: #2f2f2f;
      font-weight: 500;
      font-size: 36px;
    }

    div:nth-child(2) {
      font-weight: 900;
      font-size: 46px;
      color: #6358dc;
    }
  }

  .login-form {
    width: 671px;
    height: 412px;
    margin: 0 auto;
    margin-top: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    span {
      font-weight: 700;
      font-size: 30px;
      color: #000000;
    }

    /* loginform */
    .input-form {
      width: 671px;
      height: 77px;
      background: #ececec;
      border-radius: 8px;
      padding: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      gap: 28px;

      .icon {
        font-size: 30px;
      }

      .input {
        width: 100%;

        .input-name {
          font-size: 12px;
          color: #2f2f2f;
        }

        .input-input-id {
          font-weight: 700;
          font-size: 16px;
          background: none;
          border: none;
          outline: none;
          border-bottom: 1px solid black;
          width: 20%;
          padding: 0;
          padding-top: 2px;
        }
        .input-input-password {
          font-weight: 700;
          font-size: 16px;
          background: none;
          border: none;
          outline: none;
          border-bottom: 1px solid black;
          width: 55%;
          padding: 0;
          padding-top: 2px;
        }
      }

      .password-click {
        cursor: pointer;
      }
    }

    .input-footer {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0;
      margin: 0;

      label,
      div {
        padding: 0;
        margin: 0;
        font-weight: 400;
        font-size: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .checkbox input {
        display: none;
      }
      .checkbox_icon {
        display: inline-block;
        width: 18px;
        height: 18px;
        background-color: transparent;
        border: 1px solid #d9d9d9;
        background: #ececec;
        border-radius: 4px;
        position: relative;
        cursor: pointer;
        margin-right: 5px;
      }
      .checkbox_icon::before,
      .checkbox_icon::after {
        content: ""; // ???????????? ?????????
        display: inline-block; // ?????? ??????
        width: 1.5px;
        height: 0; // ??????????????? ????????? ?????? ??????????????? ????????? ?????? ?????? (?????? ???????????? ???????????? ??????)
        background-color: #6358dc;
        position: absolute; // ???????????? ????????? ???????????? ???????????? ??????
        transform-origin: left top; // ????????? ??????, ???????????? ?????? ?????? ???????????? (???????????? ?????????)
      }

      // ???????????? before
      .checkbox_icon::before {
        top: 6.2px; // ????????? top
        left: 1px; // ????????? left
        transform: rotate(-30deg); // ?????????
        transition: all 0.15s ease 0.15s;
      }

      // ???????????? after
      .checkbox_icon::after {
        top: 15px; // ????????? top
        left: 7px; // ????????? left
        transform: rotate(-135deg); // ?????????
        transition: all 0.15s ease;
      }

      // ??????????????? ??? ????????? ??????
      .checkbox input:checked + .checkbox_icon {
        border: 1px solid #d9d9d9;
      }

      // ??????????????? ??? ???????????? before
      .checkbox input:checked + .checkbox_icon::before {
        height: 10px; // ????????? ??????
        transition: all 0.15s ease; // 0.15??? ???????????? ???
      }

      // ??????????????? ??? ???????????? after
      .checkbox input:checked + .checkbox_icon::after {
        height: 20px; // ????????? ??????
        transition: all 0.15s ease 0.15s; // 0.15??? ???????????? + ????????? ?????? ???
      }
    }

    .login-button {
      width: 671px;
      height: 77px;
      color: white;
      background: #6358dc;
      border-radius: 8px;
      font-weight: 600;
      font-size: 16px;
      text-transform: capitalize;
      border: none;
      cursor: pointer;

      &:hover {
        filter: brightness(80%);
      }
    }
  }
  .or-line {
    width: 85%;
    margin: 0 auto;
    height: 50px;
    position: relative;

    .line {
      position: absolute;
      top: 40px;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: #bfbfbf;
    }
    .or {
      position: absolute;
      top: 40px;
      left: 50%;
      background-color: white;
      width: 100px;
      text-align: center;
      transform: translate(-50%, -50%);
    }
  }
  .register-description {
    width: 85%;
    margin: 0 auto;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .register-container {
    width: 85%;
    margin: 0 auto;
  }
  .register {
    width: 100%;
    height: 78px;
    background: #ffffff;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.11);
    border-radius: 8px;
    color: #6358dc;
    border: none;
    outline: none;
  }
`;
