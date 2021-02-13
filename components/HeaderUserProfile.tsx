import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";
import { useSelector } from "../store";
import { useDispatch } from "react-redux";
import { logoutAPI } from "../lib/api/auth";
import { userActions } from "../store/user";
import HamburgerIcon from "../public/static/svg/header/hamburger.svg";
import Link from "next/link";
import OutsideClickHandler from "react-outside-click-handler";

const Container = styled.div``;

interface IProps {}

const HeaderUserProfile: FunctionComponent<IProps> = ({ ...props }) => {
  const [isUserMenuOpened, setIsUserMenuOpened] = useState(false);
  const userProfileImage = useSelector((state) => state.user.profileImage);
  const dispatch = useDispatch();
  const logout = async () => {
    try {
      await logoutAPI();
      dispatch(userActions.initUser());
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <OutsideClickHandler
      onOutsideClick={(e) => {
        if (isUserMenuOpened) {
          setIsUserMenuOpened(false);
        }
      }}
    >
      <button
        className="header-user-profile"
        type="button"
        onClick={(event) => {
          setIsUserMenuOpened(!isUserMenuOpened);
        }}
      >
        <HamburgerIcon />
        <img
          src={
            userProfileImage ||
            "/static/image/user/default_user_profile_image.jpg"
          }
          className="header-user-profile-image"
          alt=""
        />
      </button>
      {isUserMenuOpened && (
        <ul className="header-usermenu">
          <li>숙소 관리</li>
          <Link href="/room/register/building">
            <a
              role="presentation"
              onClick={(event) => {
                setIsUserMenuOpened(false);
              }}
            >
              <li>숙소 등록하기</li>
            </a>
          </Link>
          <div className="header-usermenu-divider" />
          <li role="presentation" onClick={logout}>
            로그아웃
          </li>
        </ul>
      )}
    </OutsideClickHandler>
  );
};

export default HeaderUserProfile;
