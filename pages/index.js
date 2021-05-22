import styled from "styled-components";
import TopNav from "components/TopNav";
import StoryContainer from "components/containers/StoryContainer";
import PostContainer from "components/containers/PostContainer";
import Nav from "components/Nav";

const Home = () => {
  return (
    <>
      <TopNav />
      <div style={{ paddingTop: "64px", paddingBottom: "64px" }}>
        <StoryContainer />
        <PostContainer />
      </div>
      <Nav />
    </>
  );
};

export default Home;
