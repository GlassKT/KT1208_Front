import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import styled from "styled-components";

const LeftbarContainer = styled.div`
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

const Leftbar = () => {
  const router = useRouter();

  useEffect(() => {
    console.log(router);
  }, [router]);

  return (
    <LeftbarContainer>
      <div className="rogobox">
        <div className="rogo"></div>
        <div className="rogoname">GlassKT</div>
      </div>
      <nav className="navbar">
        <Link href="/">
          <a>
            <div
              className={classNames("home", {
                active: router.pathname === "/",
              })}
            >
              <div className="icon"></div>
              <div className="text">Home</div>
            </div>
          </a>
        </Link>
        <Link href="/friend">
          <a>
            <div
              className={classNames("friends", {
                active: router.pathname === "/friend",
              })}
            >
              <div className="icon"></div>
              <div className="text">친구</div>
            </div>
          </a>
        </Link>
        <Link href="/message">
          <a>
            <div
              className={classNames("chat", {
                active: router.pathname === "/message",
              })}
            >
              <div className="icon"></div>
              <div className="text">채팅</div>
            </div>
          </a>
        </Link>
      </nav>
      <div className="logout">
        <div className="logout-icon"></div>
        <div className="out">logout</div>
      </div>
    </LeftbarContainer>
  );
};

export default Leftbar;
