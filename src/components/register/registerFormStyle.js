import styled from "styled-components";

export const RegisterContainer = styled.div`
  width: 41%;
  height: 100vh;
  background-color: white;
  position: relative;

  form {
    height: 65%;
    width: 100%;
  }

  .register-title {
    margin-top: 28px;
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

  .register-form {
    width: 90%;
    height: 100%;
    margin: 0 auto;
    margin-top: 20px;
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
      width: 100%;
      height: 13%;
      background: #ececec;
      border-radius: 8px;
      padding: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      gap: 28px;
      position: relative;

      .icon {
        font-size: 30px;
      }

      input[type="button"] {
        width: 30%;
        height: 75%;
        position: absolute;
        right: 0;
        top: 0;
        transform: translateY(17%) translateX(-10%);
        background-color: #46bed8;
        border: none;
        border-radius: 8px;
        color: #ffffff;
        cursor: pointer;
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
      height: 13%;
    }
    .register-button {
      width: 100%;
      height: 100%;
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
    width: 88%;
    height: 8%;
    margin: 0 auto;
  }
  .register {
    width: 100%;
    height: 100%;
    background: #ffffff;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.11);
    border-radius: 8px;
    color: #6358dc;
    border: none;
    outline: none;
  }
`;
