import React, { FunctionComponent } from "react";
import styled from "styled-components";
import palette from "../../../styles/palette";
import Counter from "../../common/Counter";
import { useSelector } from "../../../store";
import { useDispatch } from "react-redux";
import { registerRoomActions } from "../../../store/registerRoom";

const Container = styled.div`
  width: 548px;
  margin: 0 auto;
  padding: 62px 30px 100px;

  h2 {
    font-size: 19px;
    font-weight: 800;
    margin-bottom: 56px;
  }

  h3 {
    font-weight: bold;
    color: ${palette.gray_76};
    margin-bottom: 6px;
  }

  .register-room-step-info {
    font-size: 14px;
    min-width: 400px;
    margin-bottom: 24px;
    max-width: 400px;
    word-break: keep-all;
  }

  .register-room-maximum-guest-count-wrapper {
    width: 320px;
    margin-top: 32px;
    margin-bottom: 32px;
  }
`;

interface IProps {}

const RegisterRoomBedrooms: FunctionComponent<IProps> = ({ ...props }) => {
  const maximumGuestCount = useSelector(
    (state) => state.registerRoom.maximumGuestCount
  );

  const dispatch = useDispatch();

  const onChangeMaximumGuestCount = (value: number) => {
    dispatch(registerRoomActions.setMaximumGuestCount(value));
  };

  return (
    <Container>
      <h2>숙소에 얼마나 많은 인원이 숙발할 수 있나요?</h2>
      <h3>2단계</h3>
      <p className="register-room-step-info">
        모든 게스트가 편안하게 숙발할 수 있도록 침대가 충분히 구비되어 있는지
        확인하세요.
      </p>
      <div className="register-room-maximum-guest-count-wrapper">
        <Counter
          label="최대 숙박 인원"
          value={maximumGuestCount}
          onChange={onChangeMaximumGuestCount}
        />
      </div>
    </Container>
  );
};

export default RegisterRoomBedrooms;
