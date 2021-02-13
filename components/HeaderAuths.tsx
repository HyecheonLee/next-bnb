import React, { FunctionComponent } from "react";
import styled from "styled-components";
import useModal from "../hooks/useModal";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import AuthModal from "./auths/AuthModal";

const Container = styled.div``;

interface IProps {}

const HeaderAuths: FunctionComponent<IProps> = ({ ...props }) => {
  const { openModal, ModalPortal, closeModal } = useModal();
  const dispatch = useDispatch();
  return (
    <>
      <div className="header-auth-button">
        <button
          type={"button"}
          className={"header-sign-up-button"}
          onClick={(event) => {
            dispatch(authActions.setAuthMode("signup"));
            openModal();
          }}
        >
          회원가입
        </button>
        <button
          type={"button"}
          className={"header-login-button"}
          onClick={(event) => {
            dispatch(authActions.setAuthMode("login"));
            openModal();
          }}
        >
          로그인
        </button>
      </div>
      <ModalPortal>
        <AuthModal closeModal={closeModal} />
      </ModalPortal>
    </>
  );
};

export default HeaderAuths;
