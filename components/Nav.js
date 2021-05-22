import styled from "styled-components";
import {
  IoHomeOutline,
  IoSearchOutline,
  IoAddOutline,
  IoHeartOutline,
  IoPersonCircleOutline,
} from "react-icons/io5";

const BottomNavWrapper = styled("div")`
  height: 64px;
  display: flex;
  justify-content: space-between;
  padding: 0px 12px;
  border-top: solid 2px #eaeaea;
  align-items: center;
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background: #fff;
`;

const ButtonNav = styled("button")`
  height: 42px;
  width: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
`;

const Nav = () => {
  return (
    <BottomNavWrapper>
      <ButtonNav>
        <IoHomeOutline />
      </ButtonNav>
      <ButtonNav>
        <IoSearchOutline />
      </ButtonNav>
      <ButtonNav>
        <IoAddOutline />
      </ButtonNav>
      <ButtonNav>
        <IoHeartOutline />
      </ButtonNav>
      <ButtonNav>
        <IoPersonCircleOutline />
      </ButtonNav>
    </BottomNavWrapper>
  );
};

export default Nav;
