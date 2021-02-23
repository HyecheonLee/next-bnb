import React, { FunctionComponent } from "react";
import styled from "styled-components";
import palette from "../../../styles/palette";
import Counter from "../../common/Counter";
import { useSelector } from "../../../store";
import { useDispatch } from "react-redux";
import { registerRoomActions } from "../../../store/registerRoom";
import Selector from "../../common/Selector";
import { getNumber } from "../../../lib/utils";
import { bedroomCountList } from "../../../lib/staticData";
import Button from "../../common/Button";
import RegisterRoomBedTypes from "./RegisterRoomBedTypes";
import RegisterRoomBedList from "./RegisterRoomBedList";
import RegisterRoomFooter from "./RegisterRoomFooter";

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

  .register-room-bedroom-counter-wrapper {
    width: 320px;
    margin-bottom: 32px;
  }

  .register-room-bed-count-wrapper {
    width: 320px;
    margin-bottom: 57px;
  }

  .register-room-bed-type-info {
    margin-top: 6px;
    margin-bottom: 20px;
    max-width: 400px;
    word-break: keep-all;
  }

  .register-room-bed-type-list-wrapper {
    width: 100%;
    padding: 28px 0;
    border-top: 1px solid ${palette.gray_dd};

    &:last-child {
      border-bottom: 1px solid ${palette.gray_dd};
    }

    .register-room-bed-type-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .register-room-bed-type-bedroom-texts {
      margin-bottom: 28px;
    }

    .register-room-bed-type-bedroom {
      font-size: 19px;
      color: ${palette.gray_48};
    }
  }
`;

interface IProps {}

const RegisterRoomBedrooms: FunctionComponent<IProps> = ({ ...props }) => {
  const { maximumGuestCount, bedroomCount, bedCount, bedList } = useSelector(
    (state) => state.registerRoom
  );

  const dispatch = useDispatch();

  const onChangeMaximumGuestCount = (value: number) => {
    dispatch(registerRoomActions.setMaximumGuestCount(value));
  };
  const onChangeBedroomCount = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    // console.log(getNumber(event.target.value) || 0);
    dispatch(
      registerRoomActions.setBedroomCount(getNumber(event.target.value) || 0)
    );
  };
  const onChangeBedCount = (value: number) => {
    dispatch(registerRoomActions.setBedCount(value));
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
      <div className="register-room-bedroom-counter-wrapper">
        <Selector
          type={"register"}
          value={`침실 ${bedroomCount}개`}
          onChange={onChangeBedroomCount}
          label="게스트가 사용할 수 있는 침실은 몇 개인가요?"
          options={bedroomCountList}
          isValid={!!bedroomCount}
        />
      </div>
      <div className="register-room-bed-count-wrapper">
        <Counter label="침대" value={bedCount} onChange={onChangeBedCount} />
      </div>
      <h4>침대 유형</h4>
      <p className="register-room-bed-type-info">
        각 침실에 놓인 침대 유형을 명시하면 숙소에 침대가 어떻게 구비되어 있는지
        게스트가 잘 파악할 수 있습니다.
      </p>
      <RegisterRoomBedList />
      <RegisterRoomFooter
        prevHref={"/room/register/building"}
        nextHref={"/room/register/bathroom"}
        isValid={!!bedroomCount}
      />
    </Container>
  );
};

export default RegisterRoomBedrooms;
