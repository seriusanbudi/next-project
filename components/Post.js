import styled from "styled-components";
import {
  IoEllipsisHorizontalSharp,
  IoHeartOutline,
  IoChatbubbleOutline,
  IoShareOutline,
  IoBookmarkOutline,
} from "react-icons/io5";

const PostHeader = styled("div")`
  height: 72px;
  background: blue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
`;

const Profile = styled("div")`
  width: 42px;
  height: 42px;
  background: red;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MoreButton = styled("button")`
  height: 32px;
  width: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ActionButton = styled("button")`
  height: 42px;
  width: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
`;

const PostBody = styled("div")`
  height: 320px;
  background: yellow;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PostAction = styled("div")`
  display: flex;
  justify-content: space-between;
  padding: 12px;
`;

const PostDescription = styled("div")`
  padding: 0px 12px;
`;

const PostComment = styled("div")`
  padding: 0px 12px;
`;

const Post = () => {
  return (
    <div className="mb-8">
      <PostHeader>
        <div className="flex items-center gap-2">
          <Profile>Foto</Profile>
          <div className="inline-block">Username</div>
        </div>
        <div>
          <MoreButton>
            <IoEllipsisHorizontalSharp />
          </MoreButton>
        </div>
      </PostHeader>
      <PostBody>foto here</PostBody>
      <PostAction>
        <div className="flex gap-2">
          <ActionButton>
            <IoHeartOutline />
          </ActionButton>
          <ActionButton>
            <IoChatbubbleOutline />
          </ActionButton>
          <ActionButton>
            <IoShareOutline />
          </ActionButton>
        </div>
        <div>
          <ActionButton>
            <IoBookmarkOutline />
          </ActionButton>
        </div>
      </PostAction>
      <PostDescription>
        <div className="text-xs">523 Likes</div>
        <div>
          <span className="font-bold">mikunendoroid</span> lorem ipsum dolor sit
          amet
        </div>
      </PostDescription>
      <PostComment>
        <div className="text-sm">View all 13 comments</div>
        <div className="mb-2">
          <div className="flex justify-between">
            <div>
              <span className="font-bold">Inumaki</span> lorem ipsum dolor sit
              amet
            </div>
            <button>
              <IoHeartOutline />
            </button>
          </div>
        </div>
        <div className="text-xs uppercase ">14 Hours ago</div>
      </PostComment>
    </div>
  );
};

export default Post;
