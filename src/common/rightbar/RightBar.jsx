import React from "react";
import { RightbarContainer } from "./rightbarStyle";

const RightBar = () => {
  return (
    <RightbarContainer>
      <div className="Profile">
        <image src=""></image>
        <div className="Fofile-image">이미지</div>

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
          <span className="belong">대구소프트웨어마이스터고등학교</span>
          <p className="write">
            맛집마스터 그대가 나의 팔로우가 되어준다면... 나는 그대의 눈을
            호강시켜 드리리다. 50만명이 받아보는 페북인스타대구대표맛집
          </p>
        </div>
      </div>
    </RightbarContainer>
  );
};

export default RightBar;
