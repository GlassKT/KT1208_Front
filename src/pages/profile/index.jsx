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
    title: "취미",
    des: "누워있기",
    image: "",
  },
  {
    title: "생일",
    des: "2005-12-07",
    image: "",
  },
  {
    title: "MBTI",
    des: "ISFP",
    image: "",
  },
  {
    title: "소속",
    des: "대구소프트웨어마이스터고등학교",
    image: "",
  },
  {
    title: "지역",
    des: "경남 창원",
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
            <div className="follow-des">팔로워</div>
          </div>
          <div className="following">
            <div className="num">29</div>
            <div className="follow-des">팔로잉</div>
          </div>
        </div>
        <div className="button">
          <button className="freind-apply">친구 요쳥</button>
          <button className="chat-apply">채팅 신청</button>
        </div>
      </div>
      <div className="message">
        맛집마스터 그대가 나의 팔로우가 되어준다면... 나는 그대의 눈을 호강시켜
        드리리다 50만명이 받아보는 페북인스타대구대표맛집
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
