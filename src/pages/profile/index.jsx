import React from "react";
import styled from "styled-components";

const ProfileContainer = styled.div`
  width: 58%;
  height: 84%;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  .profile {
    width: 27%;
    height: 52%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    .img {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      background-color: aliceblue;
    }

    .me {
      text-align: center;

      .name {
        font-family: "Nunito Sans";
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 112%;
        color: #1d1929;
      }
      .email {
        font-family: "Nunito Sans";
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 130%;

        color: #a5a3a9;
      }
    }

    .follow {
      display: flex;
      justify-content: space-between;
      width: 74%;
      padding-left: 10%;
      padding-right: 10%;
      .follower {
        text-align: center;
      }
      .following {
        text-align: center;
      }

      .num {
        font-family: "Nunito Sans";
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 135%;
        color: #1d1929;
      }
      .follow-des {
        font-family: "Nunito Sans";
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 130%;
        color: #a5a3a9;
      }
    }
    .button {
      display: flex;
      width: 100%;
      justify-content: space-between;

      .freind-apply {
        width: 44%;
        height: 35px;
        outline: none;
        border: none;
        background: #f65354;
        border-radius: 100px;
        cursor: pointer;

        color: #ffffff;
        font-family: "Nunito Sans";
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 112%;
      }
      .chat-apply {
        width: 44%;
        height: 35px;
        outline: none;
        border: none;
        background: #5887ff;
        border-radius: 100px;
        cursor: pointer;

        color: #ffffff;
        font-family: "Nunito Sans";
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 112%;
      }
    }
  }
  .message {
    width: 58%;
    height: 16%;
    padding: 16px;

    background: #f9f9f9;
    border-radius: 24px;

    font-family: "Nunito Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 116%;
  }
  .self {
    width: 58%;
    height: 16%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .container {
      width: 18%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      text-align: center;

      .imageContainer {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 1px solid black;
      }
      .title {
        font-size: 16px;
      }
      .des {
        font-size: 11px;
        height: 20%;
      }
    }
  }
`;

const value = [
  {
    title: "??????",
    des: "????????????",
    image: "",
  },
  {
    title: "??????",
    des: "2005-12-07",
    image: "",
  },
  {
    title: "MBTI",
    des: "ISFP",
    image: "",
  },
  {
    title: "??????",
    des: "?????????????????????????????????????????????",
    image: "",
  },
  {
    title: "??????",
    des: "?????? ??????",
    image: "",
  },
];

const index = () => {
  return (
    <ProfileContainer>
      <div className="profile">
        <div className="img"></div>
        <div className="me">
          <div className="name">Robert Fox</div>
          <div className="email">@alessandroveronezi</div>
        </div>
        <div className="follow">
          <div className="follower">
            <div className="num">32</div>
            <div className="follow-des">?????????</div>
          </div>
          <div className="following">
            <div className="num">29</div>
            <div className="follow-des">?????????</div>
          </div>
        </div>
        <div className="button">
          <button className="freind-apply">?????? ??????</button>
          <button className="chat-apply">?????? ??????</button>
        </div>
      </div>
      <div className="message">
        ??????????????? ????????? ?????? ???????????? ???????????????... ?????? ????????? ?????? ????????????
        ???????????? 50????????? ???????????? ?????????????????????????????????
      </div>
      <div className="self">
        {value.map((v, i) => (
          <div className="container" key={i}>
            <div className="imageContainer"></div>
            <div className="title">{v.title}</div>
            <div className="des">{v.des}</div>
          </div>
        ))}
      </div>
    </ProfileContainer>
  );
};

export default index;
