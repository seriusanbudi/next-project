import styled from "styled-components";

const StoryWrapper = styled("div")`
  background: red;
  display: flex;
  overflow: auto;
`;

const StoryItemWrapper = styled("div")`
  width: 100px;
  height: 120px;
  background: yellow;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 0px;
`;

const ProfilePicture = styled("div")`
  width: 62px;
  height: 62px;
  border-radius: 100%;
  background: blue;
`;

const StoryContainer = () => {
  return (
    <StoryWrapper>
      <div className="flex gap-2">
        <StoryItemWrapper>
          <div className="flex justify-center">
            <ProfilePicture />
          </div>
          <div className="text-center">User name</div>
        </StoryItemWrapper>
        <StoryItemWrapper>
          <div className="flex justify-center">
            <ProfilePicture />
          </div>
          <div className="text-center">User name</div>
        </StoryItemWrapper>
        <StoryItemWrapper>
          <div className="flex justify-center">
            <ProfilePicture />
          </div>
          <div className="text-center">User name</div>
        </StoryItemWrapper>
        <StoryItemWrapper>
          <div className="flex justify-center">
            <ProfilePicture />
          </div>
          <div className="text-center">User name</div>
        </StoryItemWrapper>
        <StoryItemWrapper>
          <div className="flex justify-center">
            <ProfilePicture />
          </div>
          <div className="text-center">User name</div>
        </StoryItemWrapper>
        <StoryItemWrapper>
          <div className="flex justify-center">
            <ProfilePicture />
          </div>
          <div className="text-center">User name</div>
        </StoryItemWrapper>
        <StoryItemWrapper>
          <div className="flex justify-center">
            <ProfilePicture />
          </div>
          <div className="text-center">User name</div>
        </StoryItemWrapper>
        <StoryItemWrapper>
          <div className="flex justify-center">
            <ProfilePicture />
          </div>
          <div className="text-center">User name</div>
        </StoryItemWrapper>
        <StoryItemWrapper>
          <div className="flex justify-center">
            <ProfilePicture />
          </div>
          <div className="text-center">User name</div>
        </StoryItemWrapper>
        <StoryItemWrapper>
          <div className="flex justify-center">
            <ProfilePicture />
          </div>
          <div className="text-center">User name</div>
        </StoryItemWrapper>
      </div>
    </StoryWrapper>
  );
};

export default StoryContainer;
