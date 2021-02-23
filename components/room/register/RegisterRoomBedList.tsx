import React, { FunctionComponent } from "react";
import styled from "styled-components";
import RegisterRoomBedTypes from "./RegisterRoomBedTypes";
import { useSelector } from "../../../store";
import RegisterRoomPublicBedTypes from "./RegisterRoomPublicBedTypes";

const Container = styled.div``;

interface IProps {}

const RegisterRoomBedList: FunctionComponent<IProps> = ({ ...props }) => {
  const { bedList } = useSelector((state) => state.registerRoom);
  return (
    <ul className="register-room-bed-type-list-wrapper">
      {bedList.map((bedroom) => (
        <RegisterRoomBedTypes key={bedroom.id} bedroom={bedroom} />
      ))}
      <RegisterRoomPublicBedTypes />
    </ul>
  );
};

export default RegisterRoomBedList;
