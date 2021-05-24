import styled from "styled-components";
import {
  IoEllipsisHorizontalSharp,
  IoHeartOutline,
  IoChatbubbleOutline,
  IoShareOutline,
  IoBookmarkOutline,
  IoHeartSharp,
} from "react-icons/io5";
import { useRouter } from "next/router";
import { useState } from "react";

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

const Post = (props) => {
  const { username, likes, timestamp } = props;

  const [isLiked, setIsLiked] = useState(false);
  const routers = useRouter();

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="mb-8">
      <PostHeader>
        <div className="flex items-center gap-2">
          <Profile
            onClick={() => {
              routers.push(`/${username}`);
            }}
          >
            Foto
          </Profile>
          <div
            className="inline-block"
            onClick={() => {
              routers.push(`/${username}`);
            }}
          >
            {username}
          </div>
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
          <ActionButton
            onClick={() => {
              handleLike();
            }}
          >
            {isLiked && <IoHeartSharp style={{ color: "red" }} />}
            {!isLiked && <IoHeartOutline />}
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
        <div className="text-xs">{likeLabel(likes)}</div>
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
        <div className="text-xs uppercase ">{timestamp}</div>
      </PostComment>
    </div>
  );
};

export default Post;

const likeLabel = (count) => {
  if (count === 0) return "No Like";
  if (count === 1) return "1 Like";

  return `${count} Likes`;
};
