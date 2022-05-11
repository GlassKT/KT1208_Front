import React from "react";
import { RightbarContainer } from "./rightbarStyle";

const dumy = [
  {
    id: 1,
    image: "",
    names: "권헌춘",
  },
  {
    id: 2,
    image: "",
    names: "조건만남",
  },
  {
    id: 3,
    image: "",
    names: "대출상담053",
  },
];

const RightBar = () => {
  return (
    <RightbarContainer>
      <div className="Profile">
        <div className="Modify-Profile">편집</div>

        <div className="Fofile-image"></div>

        <h3 className="Profile-name">
          <div>KT1207</div>
          <div>안경태</div>
        </h3>

        <div className="Follow">
          <div className="Follow-follwer">
            <div className="Follow-follwer-number">32</div>
            <div className="Follow-follwer-follwer">팔로워</div>
          </div>

          <div className="Follow-following">
            <div className="">29</div>
            <div className="">팔로잉</div>
          </div>
        </div>
        <div className="Writing">
          <span className="belong"> 대구소프트웨어마이스터고등학교</span>
          <p className="write">
            맛집마스터 그대가 나의 팔로우가 되어준다면... 나는 그대의 눈을
            호강시켜 드리리다. 50만명이 받아보는 페북인스타대구대표맛집
          </p>
        </div>
        <div className="line"></div>
        <div className="alarm">
          <div className="alarm-Bar">
            <div className="alarm-Image">알</div>
            <div className="alarm-Denote">알림</div>
            <div className="alarm-Count">2</div>
          </div>
          <div className="alarm-List">
            {dumy.map((v) => (
              <div className="alarm-wrapper" key={v.id}>
                <div className="image"></div>
                <div>
                  <div className="des">
                    {v.names} 님이 친구요청을 보냈습니다.
                  </div>
                  <button className="apply">승인</button>
                  <button className="refuse">거절</button>
                </div>
              </div>
            ))}
          </div>
          <div className="line-2"></div>
        </div>
      </div>
    </RightbarContainer>
  );
};

export default RightBar;
