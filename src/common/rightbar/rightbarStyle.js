import styled from "styled-components";

export const RightbarContainer = styled.div`
  width: 450px;
  height: 100vh;
  background-color: white;
  /* box-sizing: border-box; */
  /* float: right; */

  .Profile {
    width: 450px;
    height: 375px;
    background-color: white;
    font-family: "Nunito Sans";
    position: absolute;
    .Modify-Profile {
      width: 40px;
      height: 40px;
      position: absolute;
      /* float: right; */
      /* margin-right: 40px; */
      /* margin-top: 40px; */
      top: 40px;
      right: 40px;
      font-size: 20px;
      font-weight: 700;
    }

    .Fofile-image {
      width: 150px;
      height: 150px;
      margin-top: 72px;
      margin-left: 150px;
      font-size: 50px;
      font-weight: 500;
      border-radius: 50%;
      background-color: firebrick;
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
      display: flex;
      .Follow-follwer {
        width: 215px;
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
        width: 215px;
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
      height: 100px;
      margin-top: 20px;
      background: #f9f9f9;
      padding: 16px;
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
        margin: 0;
      }
    }
    .line {
      width: 370px;
      height: 0px;
      margin: 0 auto;
      margin-top: 32px;
      border: 2px dashed #e8e8ea;
    }
  }
  .alarm {
    width: 370px;
    height: 356px;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
    .alarm-Bar {
      width: 370px;
      height: 40px;
      display: flex;
      align-content: center;
      align-items: center;
      /* justify-content: center; */
      position: relative;
      margin-bottom: 20px;
      .alarm-Image {
        width: 30px;
        height: 30px;
        /* float: left; */
        position: absolute;
        font-size: 30px;
        left: 0;
        top: 1px;
        /* margin-right: 10px; */
      }
      .alarm-Denote {
        margin-left: 40px;
        margin-right: 5px;
        width: 60px;
        height: 38px;
        font-family: "Nunito Sans";
        font-style: normal;
        font-weight: 700;
        font-size: 30px;
        color: #1d1929;
      }

      .alarm-Count {
        width: 24px;
        height: 24px;
        /* float: left; */
        /* margin-right: 5px; */
        background-color: #ccd8ff;
        color: #003cff;
        text-align: center;
        border-radius: 10px;
      }
    }
    .alarm-List {
      height: 252px;

      .alarm-wrapper {
        display: flex;
        margin-bottom: 16px;
      }
      .image {
        width: 55px;
        height: 55px;
        background-color: darkblue;
        border-radius: 50%;
      }
      .des {
        margin: 16px;
        color: #77757f;
        font-weight: 700;
        width: 100%;
      }
      .apply {
        margin-left: 16px;
        margin-right: 16px;
        width: 57px;
        height: 25px;
        border-radius: 8px;
        background-color: #d7e5ff;
        border: none;
        outline: none;
        color: #4d77ff;
      }
      .refuse {
        width: 57px;
        height: 25px;
        border-radius: 8px;
        background-color: #e7e7e7;
        border: none;
        outline: none;
        color: #a5a3a9;
      }
    }
  }
`;
