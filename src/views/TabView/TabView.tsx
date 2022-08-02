import React, { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Tabs, TabList, Tab, TabPanel } from "../../components/";
import "./TabView.css";

export const TabView: FC = () => {
  const navigate = useNavigate();
  const pathName = useLocation().pathname;

  return (
    <main id="tab-view">
      <div id="tab-content">
        <h1>Router Tabs</h1>
        <Tabs id="carbTabs" defaultTab={pathName === "/" ? "potato" : pathName}>
          <TabList ariaLabel="carbTabList">
            <Tab
              id="potato"
              ariaControls="potatoTabPanel"
              onClick={() => navigate("../potato")}
            >
              Potato
            </Tab>
            <Tab
              id="noodle"
              ariaControls="noodleTabPanel"
              onClick={() => navigate("../noodle")}
            >
              Noodle
            </Tab>
          </TabList>
          <TabPanel id="potatoTabPanel" ariaLabelLedby="potato">
            <TabList ariaLabel="potatoTabList" ariaLabelLedby="potatoTabPanel">
              <Tab
                id="sweet"
                ariaControls="sweetPanel"
                onClick={() => navigate("../potato/sweet")}
                tabIndex={0}
              >
                sweet
              </Tab>
              <Tab
                id="purple"
                ariaControls="purplePanel"
                onClick={() => navigate("../potato/purple")}
              >
                purple
              </Tab>
            </TabList>
            <TabPanel id="sweetPanel" ariaLabelLedby="sweet">
              content for sweetPanel
            </TabPanel>
            <TabPanel id="purplePanel" ariaLabelLedby="purple">
              <TabList
                ariaLabel="potatoTabList"
                ariaLabelLedby="potatoTabPanel"
              >
                <Tab
                  id="japanese"
                  ariaControls="japanesePanel"
                  onClick={() => navigate("../potato/purple/japanese")}
                  tabIndex={0}
                >
                  japanese purple potato
                </Tab>
                <Tab
                  id="regular"
                  ariaControls="regularPanel"
                  onClick={() => navigate("../potato/purple/regular")}
                >
                  regular purple potato
                </Tab>
              </TabList>
              <TabPanel id="regularPanel" ariaLabelLedby="regular">
                TBA. Purples rolling in
              </TabPanel>
              <TabPanel id="japanesePanel" ariaLabelLedby="japanese">
                TBA more Japanese potatoes
              </TabPanel>
            </TabPanel>
          </TabPanel>
          <TabPanel id="noodleTabPanel" ariaLabelLedby="noodle">
            more noodles to come
          </TabPanel>
        </Tabs>
      </div>
    </main>
  );
};

export default TabView;
