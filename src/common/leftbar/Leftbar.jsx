import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { LeftbarContainer } from "./leftbarStyle";

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
