import styled from "styled-components";
import { IoCameraOutline, IoChatbubbleEllipsesOutline } from "react-icons/io5";

const IconButton = styled("button")`
  height: 32px;
  width: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TopNavWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  height: 64px;
  border-bottom: solid 2px #eaeaea;
  position: fixed;
  left: 0;
  right: 0;
  background: #fff;
`;

const TopNav = () => {
  return (
    <TopNavWrapper>
      <IconButton>
        <IoCameraOutline className="text-2xl" />
      </IconButton>
      <h3 className="font-bold text-xl">InstantGram</h3>
      <IconButton>
        <IoChatbubbleEllipsesOutline className="text-2xl" />
      </IconButton>
    </TopNavWrapper>
  );
};

export default TopNav;
