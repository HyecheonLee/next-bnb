import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { useSelector } from "../../store";
import SignUpModal from "./SignUpModal";
import LoginModal from "./LoginModal";

const Container = styled.div`
  z-index: 10;
`;

interface IProps {
  closeModal: () => void;
}

const AuthModal: FunctionComponent<IProps> = ({ closeModal, ...props }) => {
  const authMode = useSelector((state) => state.auth.authMode);

  return (
    <Container>
      {authMode == "signup" && <SignUpModal closeModal={closeModal} />}
      {authMode === "login" && <LoginModal closeModal={closeModal} />}
    </Container>
  );
};
export default AuthModal;
