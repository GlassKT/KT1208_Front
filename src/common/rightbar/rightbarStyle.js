import styled from "styled-components";

export const RightbarContainer = styled.div`
  width: 23%;
  height: 100vh;
  background-color: white;
  /* box-sizing: border-box; */
  position: relative;
  /* float: right; */

  .Profile {
    width: 100%;
    height: 100%;
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
      top: 2%;
      right: 40px;
      font-size: 20px;
      font-weight: 700;
    }

    .Fofile-image {
      width: 30%;
      height: 13.9%;
      margin-top: 8%;
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
      width: 100%;
      height: 4.9%;
      display: flex;
      .Follow-follwer {
        width: 50%;
        height: 4.9%;
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
        width: 50%;
        height: 4.9%;
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
      width: 82.2%;
      height: 14.8%;
      margin-top: 20px;
      background: #f9f9f9;
      padding: 16px;
      border-radius: 24px;
      .belong {
        font-weight: 400;
        font-size: 16px;
        color: #77757f;
      }
      .write {
        font-weight: 400;
        font-size: 14px;
        color: #1d1929;
        margin: 0;
      }
    }
    .line-2 {
      width: 82.2%;
      height: 0px;
      margin: 0 auto;
      border: 2px dashed #e8e8ea;
      margin-top: 10%;
    }
    .line {
      width: 82.2%;
      height: 0px;
      margin: 0 auto;
      margin-top: 3%;
      border: 2px dashed #e8e8ea;
    }
  }
  .alarm {
    width: 82.2%;
    height: 35%;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
    .alarm-Bar {
      width: 82.2%;
      height: 11.2%;
      display: flex;
      align-content: center;
      align-items: center;
      /* justify-content: center; */
      position: relative;
      margin-bottom: 20px;
      .alarm-Image {
        width: 7.8%;
        /* float: left; */
        height: 100%;
        margin: 0;
        text-align: center;
        position: absolute;
        font-size: 15px;
        left: 0;
        top: 1px;
        /* margin-right: 10px; */
      }
      .alarm-Denote {
        margin-left: 40px;
        margin-right: 5px;
        width: 13.3%;
        /* height: 10.6%; */
        font-family: "Nunito Sans";
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        color: #1d1929;
      }

      .alarm-Count {
        width: 6%;
        height: 40%;
        /* float: left; */
        /* margin-right: 5px; */
        background-color: #ccd8ff;
        font-size: 80%;
        color: #003cff;
        text-align: center;
        border-radius: 5px;
      }
    }
    .alarm-List {
      height: 70.9%;
      width: 100%;
      .alarm-wrapper {
        display: flex;
        margin-bottom: 16px;
      }
      .image {
        width: 50px;
        height: 50px;
        background-color: darkblue;
        border-radius: 50%;
      }
      .des {
        margin: 5%;
        color: #77757f;
        font-weight: 700;
        width: 100%;
      }
      .apply {
        margin-left: 5%;
        margin-right: 5%;
        width: 15%;
        height: 30%;
        border-radius: 8px;
        background-color: #d7e5ff;
        border: none;
        outline: none;
        color: #4d77ff;
      }
      .refuse {
        width: 15%;
        height: 30%;
        border-radius: 8px;
        background-color: #e7e7e7;
        border: none;
        outline: none;
        color: #a5a3a9;
      }
    }
  }
`;
