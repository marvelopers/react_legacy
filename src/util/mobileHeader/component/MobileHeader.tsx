import React, { useState, useEffect } from "react";
import styled from "styled-components"
import { useHistory } from "react-router";
import close from './close_icon.svg';
import back from './back_icon.svg';

interface HeadrProps {
  PageName?: string;
  isBack?: boolean;
  isShare?: boolean;
  isCloseCallback?: Function;
}


const MobileHeader = (props: HeadrProps) => {
  const history = useHistory();
  const [background, setBackground] = useState(false);

  const { PageName, isBack, isShare, isCloseCallback } = props;

  const handleScroll = (e: any) => {
    if (window.scrollY > 54) {
      setBackground(true)
    } else {
      setBackground(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])


  return (
    <>
      <MobileNavbar>
        <div className={`top ${background ? "on" : null}`}>
          {isBack && (
            <div className="back">
              <button onClick={() => { history.goBack(); }}>
                <img src={back} alt="back_icon" />
              </button>
            </div>
          )}

          <div className="menu">{PageName}</div>

          {isCloseCallback && (
            <div className="close">
              <button onClick={() => { isCloseCallback(); }}>
                <img src={close} alt="close_icon" />
              </button>
            </div>
          )}

          {isShare && (
            <div className="share">
              <button onClick={() => { history.goBack(); }}>
                {/* <img src={`$/icon_close.svg`} alt="share_icon" /> */}
              </button>
            </div>
          )}
        </div>
      </MobileNavbar>    </>
  )
}

export default MobileHeader;

const MobileNavbar = styled.nav`
  width:100vw;
  height:54px;
  box-sizing: border-box;
  border-bottom: 1px solid #efefef;
  z-index: 1000;
  background-color:inherit;
  position:sticky;
  top:0;
  left:0;

  .top{
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    padding: 0 20px;
    transition: background-color 0.2s ease-in
  }
  .top.on{
    background:#fff;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .menu {
    font-size: 16px;
    margin-top: 2px;
    color: #292929;
    font-weight: 700;
  }

  .back{
  }

  .share{
  }
`;
