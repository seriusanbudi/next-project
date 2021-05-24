import Post from "components/Post";

const posts = [
  {
    username: "Miku",
    likes: 100,
    timestamp: "14 Hours ago",
  },
  {
    username: "Umaru",
    likes: 250,
    timestamp: "18 Hours ago",
  },
  {
    username: "Luka",
    likes: 0,
    timestamp: "1 Day ago",
  },
  {
    username: "Rin",
    likes: 1,
    timestamp: "2 Days ago",
  },
];

const PostContainer = () => {
  return (
    <>
      {posts.map((post) => {
        return (
          <Post
            username={post.username}
            likes={post.likes}
            timestamp={post.timestamp}
          />
        );
      })}
    </>
  );
};

export default PostContainer;
