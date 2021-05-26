import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";

const TabItem = styled("button")`
  padding: 12px 24px;
  width: 100%;
  outline: none;
  border-bottom: solid 2px #eaeaea;

  :focus {
    outline: none;
  }

  ${({ active }) =>
    active &&
    `
    border-bottom: solid 2px #0099ff;
  `}
`;

const UserProfilePage = () => {
  const router = useRouter();
  const { query } = router;

  const [selectedTab, setSelectedTab] = useState("tab_1");

  return (
    <div>
      <div className="mb-10">this is {query.username} profile page</div>

      <div className="flex justify-between px-2 mb-4">
        <TabItem
          active={selectedTab === "tab_1"}
          onClick={() => setSelectedTab("tab_1")}
        >
          Tab 1
        </TabItem>
        <TabItem
          active={selectedTab === "tab_2"}
          onClick={() => setSelectedTab("tab_2")}
        >
          Tab 2
        </TabItem>
        <TabItem
          active={selectedTab === "tab_3"}
          onClick={() => setSelectedTab("tab_3")}
        >
          Tab 3
        </TabItem>
      </div>

      {selectedTab === "tab_1" && <div>Content tab 1</div>}
      {selectedTab === "tab_2" && <div>Content tab 2</div>}
      {selectedTab === "tab_3" && <div>Content tab 3</div>}
    </div>
  );
};

export default UserProfilePage;
