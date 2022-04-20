import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 788px;
  height: 829px;
  background-color: white;
  border: 1px solid black;

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
`;
